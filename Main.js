import { average } from "./scripts/util/Array.js";
import { randInt } from "./scripts/util/Random.js";
import { camelCaseToTitleCase } from "./scripts/util/String.js";

const SIMS = 100000;

const calculations = {
    playerAverageDamagePerHit(values) {
        return (values.playerMinDamage + values.playerMaxDamage) / 2;
    },

    naiveHitsToKill(values) {
        return values.enemyMaxHp / values.playerAverageDamagePerHit;
    },

    simulatedAverageHitsToKill(values) {
        const simResults = [];

        for(let i = 0; i < SIMS; i++) {
            let hits = 0;

            let enemyHp = values.enemyMaxHp;
            while(enemyHp > 0) {
                let hit = randInt(values.playerMinDamage, values.playerMaxDamage);
                enemyHp -= hit;
                hits++;
            }

            simResults.push(hits);
        }

        return average(simResults);
    },

    simulatedAverageAttacksToKill(values) {
        return values.simulatedAverageHitsToKill / (values.playerHitChance / 100);
    },

    averageTimeToKill(values) {
        return values.simulatedAverageAttacksToKill * values.playerAttackSpeed;
    },

    averageTimeToKillAndRespawn(values) {
        return values.averageTimeToKill + 3.0;
    },

    killHz(values) {
        return 1 / values.averageTimeToKillAndRespawn;
    },

    killsPerMinute(values) {
        return 60 / values.averageTimeToKillAndRespawn;
    },

    killsPerHour(values) {
        return 3600 / values.averageTimeToKillAndRespawn;
    },
};

function run() {
    const values = getFormValues();

    const calculationsElement = document.getElementById('calculations');
    removeChildren(calculationsElement);

    initializeCalculations();

    for(const key in calculations) {
        const calculation = calculations[key];
        const value = calculation.calculate(values);
        
        values[key] = value;

        if(!calculation.hide) {
            appendOutputRow(calculationsElement, key, value);
        }
    }

    document.getElementById('output').style.display = 'table';
    console.log(values);
}

function initializeCalculations() {
    for(const key in calculations) {
        const calculation = calculations[key];

        if(typeof calculation == 'function') {
            calculations[key] = {
                calculate: calculation
            };
        }
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
 */
function removeChildren(el) {
    [...el.children].forEach(child => void child.remove());
}

/**
 * @param {!HTMLElement} el 
 * @param {string} key 
 * @param {any} value 
 */
function appendOutputRow(el, key, value) {
    const rowElement = document.createElement('div');
    rowElement.className = 'row';

    const labelElement = document.createElement('label');
    labelElement.innerHTML = camelCaseToTitleCase(key);
    rowElement.appendChild(labelElement);
    
    const spanElement = document.createElement('span');
    spanElement.className = 'value';
    
    let text = value;
    if(typeof value == 'number')
        text = value.toFixed(1);
    spanElement.innerHTML = text;

    rowElement.appendChild(spanElement);

    const lineBreakElement = document.createElement('br');
    rowElement.appendChild(lineBreakElement);

    el.appendChild(rowElement);
}

window.run = run;
console.log("Main.js loaded.");