import { average } from "../util/Array.js";
import { appendLineBreak, removeChildren } from "../util/Element.js";
import { randInt } from "../util/Random.js";
import { camelCaseToTitleCase } from "../util/String.js";

const SIMS = 100000;

const calculations = {
    playerAverageDamagePerHit(values) {
        return (values.playerMinDamage + values.playerMaxDamage) / 2;
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
            return values.simulatedAverageAttacksToKill * values.playerAttackSpeed;
        },
    },

    averageTimeToKillAndRespawn(values) {
        return values.averageTimeToKill + 3.0;
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
    removeChildren(el);
    const values = getFormValues();

    for(const key in calculations) {
        const calculation = calculations[key];
        const value = calculation.calculate(values);
        
        values[key] = value;

        if(!calculation.hide)
            appendOutputRow(el, key, value);
    }
}

function getFormValues() {
    const ret = {};

    const inputs = document.getElementsByTagName('input');
    for(const input of inputs) {
        let value = input.value; // Always a `string` type by default.

        if(input.type == 'number') {
            value = Number(value);
        }

        ret[input.id] = value;
    }

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