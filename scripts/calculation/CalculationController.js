import { MONSTERS } from "../melvor/Monsters.js";
import { setValuesForMonster } from "../ui/Monster.js";
import { appendKeyValueRow, removeChildren } from "../util/Element.js";
import calculations from "./Calculation.js";

/**
 * @param {!HTMLElement} el 
 */
export function renderCalculationsTo(el) {
    const values = doCalculations();

    removeChildren(el);
    for(const key in calculations)
        if(! calculations[key].hide)
            appendKeyValueRow(el, key, values[key], calculations[key].format);
}

/**
 * @param {!HTMLElement} el 
 */
export function renderFindMonsterTo(el) {
    const best = findBestMonsterForXp();

    removeChildren(el);
    for(const key in best)
        appendKeyValueRow(el, key, best[key]);
}

function doCalculations() {
    const values = getFormValues();
    return doCalculationsWith(values);
}

function findBestMonsterForXp() {
    let bestXpHz = -1;
    let bestMonster = null;

    for(const monster of MONSTERS) {
        if(! monster.includeInSearch) continue;

        const xpHz = doCalculationsFor(monster).xpHz;

        if(xpHz > bestXpHz) {
            bestXpHz = xpHz;
            bestMonster = monster;
        }
    }

    return {
        monster: bestMonster.toString(),
        xpHz: bestXpHz,
    };
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