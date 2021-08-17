import { ITEMS_FROM_COMBAT, MONSTERS_BY_ITEM_NAME } from '../melvor/ItemsProcessing.js';
import { MONSTERS } from '../melvor/Monsters.js';
import { SLAYER_TIERS } from '../melvor/Slayer Tasks.js';
import { setValuesForMonster, setValuesForMonsterByName } from '../ui/MonsterUI.js';
import { getSlayerPreferenceSortFunction } from '../ui/SlayerUI.js';
import { appendKeyValueRow, appendTableHead, appendTableRow, removeChildren } from '../util/Element.js';
import calculations from './Definitions.js';
import { STYLE_NAME_TO_EMOJI } from './Combat Triangle.js';

const SETTINGS = {
    combatStatsId: 'monster-combat-stats-output',
    bestXpTableId: 'best-xp-table',
    slayerTableId: 'slayer-table',
    lootTableId: 'loot-table',
};

export function recalculateCombatStats() {
    const combatStatsEl = document.getElementById(SETTINGS.combatStatsId);
    renderMonsterCombatStatsTo(combatStatsEl);
}

export function recalculateBestXpTable() {
    const bestXpTableEl = document.getElementById(SETTINGS.bestXpTableId);
    renderBestXpTableTo(bestXpTableEl);
}

export function recalculateSlayerTable() {
    const slayerTableEl = document.getElementById(SETTINGS.slayerTableId);
    renderSlayerTableTo(slayerTableEl);
}

export function recalculateLootTable() {
    const lootTableEl = document.getElementById(SETTINGS.lootTableId);
    renderLootTableTo(lootTableEl);
}

/**
 * @param {!HTMLElement} el
 */
export function renderMonsterCombatStatsTo(el) {
    const values = doCalculations();
    const formatted = format(values);

    const divEl = document.createElement('div');
    for (const key in calculations)
        if (! calculations[key].hide)
            appendKeyValueRow(divEl, key, formatted[key]);

    removeChildren(el);
    el.appendChild(divEl);
}

/**
 * @param {!HTMLElement} el
 */
export function renderBestXpTableTo(el) {
    const ranking = rankBestMonstersForXp();
    const bestXpHz = ranking[0].values.xpHz;

    const tableEl = document.createElement('table');

    appendTableHead(
        tableEl,
        `${format(getFormValues()).playerStyle}👑`,
        'Monster',
        'Level',
        'Style',
        'Area',
        '💀',
        '🦀',
    );
    for (const monsterInfo of ranking) {
        if (monsterInfo.rank >= 20) break;
        if (monsterInfo.values.xpHz < 0.75 * bestXpHz) break;

        appendTableRow(
            tableEl,
            monsterInfo.formattedValues.xpHz,
            monsterInfo.monster.name,
            monsterInfo.monster.combatLevel,
            STYLE_NAME_TO_EMOJI[monsterInfo.monster.style],
            monsterInfo.monster.location.name,
            monsterInfo.monster.slayerLevel || '--',
            monsterInfo.formattedValues.autoEat,
        );
    }

    removeChildren(el);
    el.appendChild(tableEl);
}

/**
 * @param {!HTMLElement} el
 */
export function renderSlayerTableTo(el) {
    const ranking = rankSlayerMonsters();

    const tableEl = document.createElement('table');
    appendTableHead(
        tableEl,
        '💀🟢',
        '💀👑',
        `${format(getFormValues()).playerStyle}👑`,
        'Monster',
        'Level',
        'Style',
        'Area',
        '💀',
        '🦀',
    );
    for (const monsterInfo of ranking) {
        appendTableRow(
            tableEl,
            monsterInfo.formattedValues.slayerCoinHz,
            monsterInfo.formattedValues.slayerXpHz,
            monsterInfo.formattedValues.xpHz,
            monsterInfo.monster.name,
            monsterInfo.monster.combatLevel,
            STYLE_NAME_TO_EMOJI[monsterInfo.monster.style],
            monsterInfo.monster.location.name,
            monsterInfo.monster.slayerLevel || '--',
            monsterInfo.formattedValues.autoEat,
        );
    }

    removeChildren(el);
    el.appendChild(tableEl);
}

/**
 * @param {!HTMLElement} el
 */
export function renderLootTableTo(el) {
    const ranking = rankLootMonsters();

    const tableEl = document.createElement('table');
    appendTableHead(
        tableEl,
        'Drop Chance',
        'Amount',
        'Items / Hour',
        'Median Time for First Drop',
        `${format(getFormValues()).playerStyle} XP`,
        'Monster',
        'Level',
        'Style',
        'Area',
        '💀',
        '🦀',
    );
    for (const monsterInfo of ranking) {
        appendTableRow(
            tableEl,
            monsterInfo.formattedValues.dropChance,
            monsterInfo.formattedValues.dropAmount,
            monsterInfo.formattedValues.dropsPerHour,
            monsterInfo.formattedValues.dropEtaHours,
            monsterInfo.formattedValues.xpHz,
            monsterInfo.monster.name,
            monsterInfo.monster.combatLevel,
            STYLE_NAME_TO_EMOJI[monsterInfo.monster.style],
            monsterInfo.monster.location.name,
            monsterInfo.monster.slayerLevel || '--',
            monsterInfo.formattedValues.autoEat,
        );
    }

    removeChildren(el);
    el.appendChild(tableEl);
}

function doCalculations() {
    const values = getFormValues();
    return doCalculationsWith(values);
}

function rankBestMonstersForXp() {
    const ranking = [];

    for (const monster of MONSTERS) {
        if (! monster.includeInSearch) continue;

        const values = doCalculationsFor(monster, 0.2);
        const formatted = format(values);

        ranking.push({
            monster,
            values,
            formattedValues: formatted,
        });
    }

    // Sort descending by `xpHz`
    ranking.sort(
        (a, b) => b.values.slayerCoinHz - a.values.slayerCoinHz,
    );

    for (let i = 0; i < ranking.length; i++)
        ranking[i].rank = i;

    return ranking;
}

function rankSlayerMonsters() {
    const values = getFormValues();
    const slayerTier = SLAYER_TIERS.find(
        tier => tier.name == values.optionsSlayerTier,
    );

    if (!slayerTier)
        throw new Error(`No slayer tier matches name: ${values.optionsSlayerTier}`);

    const ranking = [];
    for (const monster of slayerTier.targetMonsterOptions) {
        const values = doCalculationsFor(monster);
        const formatted = format(values);

        ranking.push({
            monster,
            values,
            formattedValues: formatted,
        });
    }

    const sortFn = getSlayerPreferenceSortFunction(values.optionsSlayerPreference);
    ranking.sort(sortFn);

    for (let i = 0; i < ranking.length; i++)
        ranking[i].rank = i;

    decorateSlayerRankingWithAggregateValues(ranking);

    return ranking;
}

function decorateSlayerRankingWithAggregateValues(ranking) {
    // TODO left off here
    //      Calculate expected task length.
    //      Calculate coins, xp per task.
    //          Use that to calculate expected coins, xp.
    //      Figure out how to decide to reroll/extend
    //          Calculate that per task
    //      Add reroll/extend recommendation to table.
}

function rankLootMonsters() {
    const values = getFormValues();

    if (!values.item) return [];

    const monsters = MONSTERS_BY_ITEM_NAME[values.item.name];

    const ranking = [];
    for (const monster of monsters) {
        const values = doCalculationsFor(monster);
        const formatted = format(values);

        ranking.push({
            monster,
            values,
            formattedValues: formatted,
        });
    }

    // Sort descending by `dropsPerHour`
    ranking.sort(
        (a, b) => b.values.dropsPerHour - a.values.dropsPerHour,
    );

    for (let i = 0; i < ranking.length; i++)
        ranking[i].rank = i;

    return ranking;
}

function doCalculationsFor(monster, simulationFidelity) {
    const values = getFormValues();
    setValuesForMonster(values, monster);
    values.simulationFidelity = simulationFidelity;
    return doCalculationsWith(values);
}

function doCalculationsWith(values) {
    for (const key in calculations)
        values[key] = calculations[key].calculate(values);

    return values;
}

function getFormValues() {
    const ret = {};

    for (const input of document.getElementsByTagName('input')) {
        let value = input.value; // Always a `string` type by default.

        if (input.type == 'number') {
            value = Number(value);
        }

        ret[input.id] = value;
    }

    for (const select of document.getElementsByTagName('select'))
        ret[select.id] = select.value;

    const monsterSelectEl = document.getElementById('monster-select');
    const monsterName = monsterSelectEl.value;
    setValuesForMonsterByName(ret, monsterName);

    ret.item = ITEMS_FROM_COMBAT.find(
        item => item.name == ret['loot-select']
    );

    return ret;
}

function format(values) {
    const ret = {};

    for (const key in values) {
        const value = values[key];
        const calculation = calculations[key];

        if (calculation && calculation.format) {
            ret[key] = calculation.format(value);
        } else if (typeof value == 'number') {
            ret[key] = value.toFixed(1);
        } else if (key.endsWith('Style')) {
            switch (value) {
                case 'melee':
                    ret[key] = '🗡';
                    break;
                case 'ranged':
                    ret[key] = '🏹';
                    break;
                case 'magic':
                    ret[key] = '🧙‍♂️';
                    break;
                default:
                    throw new Error(`Unknown style: ${value}`);
            }
        } else {
            ret[key] = value;
        }
    }

    return ret;
}