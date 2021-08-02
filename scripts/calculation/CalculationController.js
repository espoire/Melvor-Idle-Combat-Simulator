import { MONSTERS } from "../melvor/Monsters.js";
import { setValuesForMonster } from "../ui/MonsterUI.js";
import { appendKeyValueRow, appendTableHead, appendTableRow, removeChildren } from "../util/Element.js";
import calculations from "./Calculation.js";
import { STYLE_NAME_TO_EMOJI } from "./Combat Triangle.js";

/**
 * @param {!HTMLElement} el 
 */
export function renderCalculationsTo(el) {
    const values = doCalculations();
    const formatted = format(values);

    removeChildren(el);
    for(const key in calculations)
        if(! calculations[key].hide)
            appendKeyValueRow(el, key, formatted[key]);
}

/**
 * @param {!HTMLElement} el 
 */
export function renderFindMonsterTo(el) {
    const ranking = rankBestMonsterForXp();
    const bestXpHz = ranking[0].values.xpHz;

    removeChildren(el);
    appendTableHead(
        el,
        "Xp Hz",
        "Monster",
        "Level",
        "Style",
        "Area",
        "Slayer",
        "Auto-Eat"
    );
    for(const monsterInfo of ranking) {
        if(monsterInfo.rank >= 20) break;
        if(monsterInfo.values.xpHz < 0.75 * bestXpHz) break;

        appendTableRow(
            el,
            monsterInfo.formattedValues.xpHz,
            monsterInfo.monster.name,
            monsterInfo.monster.combatLevel,
            STYLE_NAME_TO_EMOJI[monsterInfo.monster.style],
            monsterInfo.monster.location.name,
            monsterInfo.monster.slayerLevel || '--',
            monsterInfo.formattedValues.autoEat
        );
    }
}

function doCalculations() {
    const values = getFormValues();
    return doCalculationsWith(values);
}

function rankBestMonsterForXp() {
    const ranking = [];

    for(const monster of MONSTERS) {
        if(! monster.includeInSearch) continue;

        const values = doCalculationsFor(monster);
        const formatted = format(values);

        ranking.push({
            monster,
            values,
            formattedValues: formatted,
        });
    }

    // Sort descending by `xpHz`
    ranking.sort(
        (a, b) => b.values.xpHz - a.values.xpHz
    );

    for(let i = 0 ; i < ranking.length; i++)
        ranking[i].rank = i;

    return ranking;
}

function doCalculationsFor(monster) {
    const values = getFormValues();
    setValuesForMonster(values, monster);
    return doCalculationsWith(values);
}

function doCalculationsWith(values) {
    for(const key in calculations)
        values[key] = calculations[key].calculate(values);
    
    return values;
}

function getFormValues() {
    const ret = {};

    for(const input of document.getElementsByTagName('input')) {
        let value = input.value; // Always a `string` type by default.

        if(input.type == 'number') {
            value = Number(value);
        }

        ret[input.id] = value;
    }

    for(const select of document.getElementsByTagName('select'))
        ret[select.id] = select.value;

    return ret;
}

function format(values) {
    const ret = {};

    for(const key in values) {
        let value = values[key];
        const calculation = calculations[key];

        if(typeof value == 'number')
            value = value.toFixed(1);

        if(typeof calculation != 'object' || !calculation.format) {
            ret[key] = value;
            continue;
        }

        ret[key] = calculation.format(value);
    }

    return ret;
}