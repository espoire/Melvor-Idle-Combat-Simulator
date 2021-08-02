import { SLAYER_TIER_NAMES } from "../melvor/Slayer Tasks.js";
import { appendInput } from "./UI.js";

const INPUTS = {
    slayerTier: {
        type: 'optionset',
        options: SLAYER_TIER_NAMES,
        value: SLAYER_TIER_NAMES[1],
    },
};

/**
 * @param {!HTMLElement} el 
 */
export function appendOptionsInputs(el) {
    for(const key in INPUTS) {
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