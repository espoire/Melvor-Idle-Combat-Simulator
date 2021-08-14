import { SLAYER_TIER_NAMES } from '../melvor/Slayer Tasks.js';
import { appendInput } from './UI.js';

const INPUTS = {
    slayerTier: {
        type: 'optionset',
        options: SLAYER_TIER_NAMES,
        value: SLAYER_TIER_NAMES[1],
        onChange: 'recalculateSlayerTable',
    },

    slayerPreference: {
        type: 'optionset',
        options: [
            { value: 'coins', display: '💀🟢' },
            { value: 'slayerxp', display: '💀 XP' },
            { value: 'totalxp', display: '💀⚔🏹🧙‍♂️ XP' },
        ],
        value: 'coins',
        onChange: 'recalculateSlayerTable',
    },
};

/**
 * @param {!HTMLElement} el
 */
export function appendOptionsInputs(el) {
    for (const key in INPUTS) {
        const config = INPUTS[key];
        config.name = key;

        appendOptionsInput(el, config);
    }
}

/**
 * @param {!HTMLElement} el
 * @param {object} config
 */
function appendOptionsInput(el, config) {
    appendInput(el, 'options', config);
}

export function getSlayerPreferenceSortFunction(preference) {
    switch (preference) {
        case 'coins':
            // Sort descending by `slayerCoinHz`
            return ((a, b) =>
                b.values.slayerCoinHz -
                a.values.slayerCoinHz
            );

        case 'slayerxp':
            // Sort descending by `slayerXpHz`
            return ((a, b) =>
                b.values.slayerXpHz -
                a.values.slayerXpHz
            );

        case 'totalxp':
            // Sort descending by `slayerXpHz + xpHz`
            return ((a, b) =>
                (b.values.slayerXpHz + b.values.xpHz) -
                (a.values.slayerXpHz + a.values.xpHz)
            );

        default:
            throw new Error(`Unknown slayer preference: ${preference}`);
    }
}