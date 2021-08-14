import { MONSTERS } from '../melvor/Monsters.js';
import { SLAYER_TIERS } from '../melvor/Slayer Tasks.js';
import { setValuesForMonster, setValuesForMonsterByName } from '../ui/MonsterUI.js';
import { getSlayerPreferenceSortFunction } from '../ui/SlayerUI.js';
import { appendKeyValueRow, appendTableHead, appendTableRow, removeChildren } from '../util/Element.js';
import calculations from './Calculation.js';
import { STYLE_NAME_TO_EMOJI } from './Combat Triangle.js';

const SETTINGS = {
    combatStatsId: 'monster-combat-stats-output',
    bestXpTableId: 'best-xp-table',
    slayerTableId: 'slayer-table',
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

/**
 * @param {!HTMLElement} el
 */
export function renderMonsterCombatStatsTo(el) {
    const values = doCalculations();
    const formatted = format(values);

    removeChildren(el);
    for (const key in calculations)
        if (! calculations[key].hide)
            appendKeyValueRow(el, key, formatted[key]);
}

/**
 * @param {!HTMLElement} el
 */
export function renderBestXpTableTo(el) {
    const ranking = rankBestMonstersForXp();
    const bestXpHz = ranking[0].values.xpHz;

    removeChildren(el);
    appendTableHead(
        el,
        'Xp Hz',
        'Monster',
        'Level',
        'Style',
        'Area',
        'Slayer',
        'Auto-Eat',
    );
    for (const monsterInfo of ranking) {
        if (monsterInfo.rank >= 20) break;
        if (monsterInfo.values.xpHz < 0.75 * bestXpHz) break;

        appendTableRow(
            el,
            monsterInfo.formattedValues.xpHz,
            monsterInfo.monster.name,
            monsterInfo.monster.combatLevel,
            STYLE_NAME_TO_EMOJI[monsterInfo.monster.style],
            monsterInfo.monster.location.name,
            monsterInfo.monster.slayerLevel || '--',
            monsterInfo.formattedValues.autoEat,
        );
    }
}

/**
 * @param {!HTMLElement} el
 */
export function renderSlayerTableTo(el) {
    const formatted = format(getFormValues());
    const ranking = rankSlayerMonsters();

    removeChildren(el);
    appendTableHead(
        el,
        '💀🟢',
        '💀 XP',
        `${formatted.playerStyle} XP`,
        'Monster',
        'Level',
        'Style',
        'Area',
        'Slayer',
        'Auto-Eat',
    );
    for (const monsterInfo of ranking) {
        appendTableRow(
            el,
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

    return ret;
}

function format(values) {
    const ret = {};

    for (const key in values) {
        let value = values[key];
        const calculation = calculations[key];

        if (typeof value == 'number')
            value = value.toFixed(1);

        if (typeof calculation != 'object' || !calculation.format) {
            if (key.endsWith('Style')) {
                switch (value) {
                    case 'melee':
                        value = '⚔';
                        break;
                    case 'ranged':
                        value = '🏹';
                        break;
                    case 'magic':
                        value = '🧙‍♂️';
                        break;
                    default:
                        throw new Error(`Unknown style: ${value}`);
                }
            }

            ret[key] = value;
            continue;
        }

        ret[key] = calculation.format(value);
    }

    return ret;
}