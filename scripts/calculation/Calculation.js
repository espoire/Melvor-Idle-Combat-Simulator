import { MONSTERS } from "../melvor/Monsters.js";
import { setValuesForMonster } from "../ui/Monster.js";
import { average } from "../util/Array.js";
import { appendLineBreak, removeChildren } from "../util/Element.js";
import { randInt } from "../util/Random.js";
import { camelCaseToTitleCase, capitalize } from "../util/String.js";

const SIMS = 10000;

const calculations = {
    playerHitChance(values) {
        const monsterEvasion = values[`monster${capitalize(values.playerStyle)}Evasion`];

        if(values.playerAccuracy < monsterEvasion) {
            return values.playerAccuracy / monsterEvasion * 50;
        } else {
            return 100 - monsterEvasion / values.playerAccuracy * 50;
        }
    },

    playerAverageDamagePerHit(values) {
        return (values.playerMinDamage + values.playerMaxDamage) / 2;
    },

    playerDps(values) {
        return values.playerAverageDamagePerHit * values.playerHitChance / 100 / values.playerSpeed;
    },

    // naiveHitsToKill(values) {
    //     return values.monsterMaxHp / values.playerAverageDamagePerHit;
    // },

    simulatedAverageHitsToKill: {
        hide: true,

        calculate(values) {
            const simResults = [];

            for(let i = 0; i < SIMS; i++) {
                let hits = 0;

                let monsterHp = values.monsterMaxHp;
                while(monsterHp > 0) {
                    let hit = randInt(values.playerMinDamage, values.playerMaxDamage);
                    monsterHp -= hit;
                    hits++;

                    if(hits > 100) return 100;
                }

                simResults.push(hits);
            }

            return average(simResults);
        },
    },

    simulatedAverageAttacksToKill(values) {
        return values.simulatedAverageHitsToKill / (values.playerHitChance / 100);
    },

    averageTimeToKill: {
        hide: true,

        calculate(values) {
            return values.simulatedAverageAttacksToKill * values.playerSpeed;
        },
    },

    averageTimeToKillAndRespawn(values) {
        return values.averageTimeToKill + 3.0;
    },

    xpHz(values) {
        return values.monsterMaxHp * 0.4 / values.averageTimeToKillAndRespawn;
    },

    // killHz(values) {
    //     return 1 / values.averageTimeToKillAndRespawn;
    // },

    killsPerMinute(values) {
        return 60 / values.averageTimeToKillAndRespawn;
    },

    killsPerHour(values) {
        return 3600 / values.averageTimeToKillAndRespawn;
    },
};

function initialize(calculations) {
    for(const key in calculations) {
        const calculation = calculations[key];

        if(typeof calculation == 'function') {
            calculations[key] = {
                calculate: calculation
            };
        }
    }
}

initialize(calculations);

export default calculations;

/**
 * @param {!HTMLElement} el 
 */
export function renderCalculationsTo(el) {
    const values = doCalculations();

    removeChildren(el);
    for(const key in calculations)
        if(! calculations[key].hide)
            appendOutputRow(el, key, values[key]);
}

/**
 * @param {!HTMLElement} el 
 */
export function renderFindMonsterTo(el) {
    const best = findBestMonsterForXp();

    removeChildren(el);
    for(const key in best)
        appendOutputRow(el, key, best[key]);
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

/**
 * @param {!HTMLElement} el 
 * @param {string} key 
 * @param {any} value 
 */
function appendOutputRow(el, key, value) {
    const rowElement = document.createElement('div');
    rowElement.className = 'row';

    appendOutputRowLabel(rowElement, key);
    appendOutputRowValue(rowElement, value);
    appendLineBreak(rowElement);    

    el.appendChild(rowElement);
}

/**
 * @param {!HTMLElement} el 
 * @param {string} key 
 */
function appendOutputRowLabel(rowEl, key) {
    const labelElement = document.createElement('label');

    labelElement.innerHTML = camelCaseToTitleCase(key);

    rowEl.appendChild(labelElement);
}

/**
 * @param {!HTMLElement} rowEl 
 * @param {any} value 
 */
function appendOutputRowValue(rowEl, value) {
    const valueElement = document.createElement('span');
    valueElement.className = 'value';
    
    let text = value;
    if(typeof value == 'number')
        text = value.toFixed(1);
    valueElement.innerHTML = text;

    rowEl.appendChild(valueElement);
}