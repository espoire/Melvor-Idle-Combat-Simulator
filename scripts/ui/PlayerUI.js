import { appendInput } from "./UI.js";

const INPUTS = {
    minDamage: {
        value: 1,
        min: 1,
    },

    maxDamage: {
        value: 274,
        min: 1,
    },

    speed: {
        value: 2.6,
        min: 0.1,
        step: 0.1,
    },

    style: {
        type: 'optionset',
        options: [
            { value: 'melee', display: '⚔' },
            { value: 'ranged', display: '🏹' },
            { value: 'magic', display: '🧙‍♂️' },
        ],
        value: 'ranged',
    },

    accuracy: {
        value: 17325,
        min: 1,
    },

    damageReduction: {
        type: 'percent',
        value: '20',
        min: 0,
        max: 100,
    },

    autoEat: {
        label: 'Auto Eat 🦀',
        value: 216,
        min: 0,
    },
};

/**
 * @param {!HTMLElement} el 
 */
export function appendPlayerInputs(el) {
    for(const key in INPUTS) {
        const config = INPUTS[key];
        config.name = key;

        appendPlayerInput(el, config);
    }
}

/**
 * @param {!HTMLElement} el 
 * @param {object} config 
 */
function appendPlayerInput(el, config) {
    appendInput(el, 'player', config);
}