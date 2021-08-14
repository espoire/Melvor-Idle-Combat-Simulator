import { appendInput } from './UI.js';

const INPUTS = {
    style: {
        type: 'optionset',
        class: 'center-options large-icons',
        options: [
            { value: 'melee', display: '⚔' },
            { value: 'ranged', display: '🏹' },
            { value: 'magic', display: '🧙‍♂️' },
        ],
        value: 'magic',
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
                class: 'two-digit',
                value: 80,
                min: 1,
            },

            maxDamage: {
                label: 'Max',
                class: 'three-digit',
                value: 402,
                min: 1,
            },
        },

        speed: {
            class: 'three-digit',
            value: 2.6,
            min: 0.1,
            step: 0.1,
        },

        accuracy: {
            class: 'six-digit',
            value: 17325,
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
            value: '20',
            min: 0,
            max: 100,
        },

        autoEat: {
            label: 'Auto Eat 🦀',
            class: 'three-digit',
            value: 216,
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