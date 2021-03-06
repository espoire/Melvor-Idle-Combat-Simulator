import { appendInput } from './UI.js';

const INPUTS = {
    style: {
        type: 'optionset',
        class: 'center-options large-icons',
        options: [
            { value: 'melee', display: '🗡' },
            { value: 'ranged', display: '🏹' },
            { value: 'magic', display: '🧙‍♂️' },
        ],
        value: 'magic',
        cookie: true,
    },

    offenses: {
        label: '🪓 Offenses',
        labelClass: 'top-level-header',
        type: 'group',

        damage: {
            label: '💥 Damage',
            type: 'group',

            minDamage: {
                label: 'Min',
                class: 'three-digit',
                value: 80,
                cookie: true,
                min: 1,
            },

            maxDamage: {
                label: 'Max',
                class: 'four-digit',
                value: 402,
                cookie: true,
                min: 1,
            },
        },

        speed: {
            class: 'three-digit',
            value: 2.6,
            cookie: true,
            min: 0.1,
            step: 0.1,
        },

        accuracy: {
            class: 'six-digit',
            value: 17325,
            cookie: true,
            min: 1,
        },
    },

    defenses: {
        label: '🛡 Defenses',
        labelClass: 'top-level-header',
        type: 'group',

        damageReduction: {
            type: 'percent',
            class: 'three-digit',
            value: 20,
            cookie: true,
            min: 0,
            max: 100,
        },

        autoEat: {
            label: 'Auto Eat 🦀',
            class: 'four-digit',
            value: 216,
            cookie: true,
            min: 0,
        },
    },
};

/**
 * @param {!HTMLElement} el
 */
export function appendPlayerInputs(el) {
    for (const key in INPUTS) {
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