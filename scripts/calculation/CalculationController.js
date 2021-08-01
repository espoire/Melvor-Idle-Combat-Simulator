import { MONSTERS } from "../melvor/Monsters.js";
import { setValuesForMonster } from "../ui/Monster.js";
import { appendKeyValueRow, appendTableHead, appendTableRow, removeChildren } from "../util/Element.js";
import calculations from "./Calculation.js";
import { STYLE_NAME_TO_EMOJI } from "./Combat Triangle.js";

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
    const ranking = rankBestMonsterForXp();

    console.log(ranking);

    removeChildren(el);
    appendTableHead(el, "Xp Hz", "Monster", "Level", "Style");
    for(const monsterInfo of ranking) {
        if(monsterInfo.rank >= 20) break;
        if(monsterInfo.xpHz < 0.8 * ranking[0].xpHz) break;

        appendTableRow(
            el,
            monsterInfo.xpHz.toFixed(1),
            monsterInfo.monster.name,
            monsterInfo.monster.combatLevel,
            STYLE_NAME_TO_EMOJI[monsterInfo.monster.style]
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

        const xpHz = doCalculationsFor(monster).xpHz;

        ranking.push({
            monster,
            xpHz,
        });
    }

    // Sort descending by `xpHz`
    ranking.sort(
        (a, b) => b.xpHz - a.xpHz
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