import { appendLineBreak } from "../util/Element.js";
import { camelCaseToTitleCase, capitalize } from "../util/String.js";

const INPUTS = {
    minDamage: {
        value: 1,
        min: 1,
    },

    maxDamage: {
        value: 290,
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
            'melee',
            'ranged',
            'magic',
        ],
        value: 'ranged'
    },

    accuracy: {
        value: 16650,
        min: 1,
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
    const labelElement = document.createElement('label');
    labelElement.innerHTML = camelCaseToTitleCase(config.name);
    el.appendChild(labelElement);
    appendLineBreak(el);

    const id = `player${capitalize(config.name)}`;

    switch(config.type) {
        case 'optionset':
            const selectElement = document.createElement('select');
            selectElement.id = id;

            for(const option of config.options) {
                const optionElement = document.createElement('option');
                optionElement.value = optionElement.innerHTML = option;
                if(config.value == option) optionElement.selected = true;
                selectElement.appendChild(optionElement);
            }

            el.appendChild(selectElement);
            break;

        case 'number':
        case 'percent':
        default:
            const inputElement = document.createElement('input');
            inputElement.type = 'number';
            inputElement.id = id;
            if(config.value) inputElement.value = config.value;
            if(config.min) inputElement.min = config.min;
            if(config.max) inputElement.max = config.max;
            if(config.step) inputElement.step = config.step;
            el.appendChild(inputElement);

            if(config.type == 'percent') {
                const bElement = document.createElement('b');
                bElement.innerHTML = "%";
                el.appendChild(bElement);
            }
        break;
    }

    appendLineBreak(el);
}

// <label>Min Damage</label>
// <input type="number" id="playerMinDamage" value="1" />