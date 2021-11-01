import Cookie from '../util/Cookie.js';
import { camelCaseToTitleCase, capitalize } from '../util/String.js';

export function appendInput(el, prefix, config) {
    const elementWrapper = document.createElement('div');
    elementWrapper.className = 'vbox ui-auto-input center-content';

    const labelElement = document.createElement('label');
    labelElement.textContent = config.label || camelCaseToTitleCase(config.name);
    if (config.labelClass) labelElement.className = config.labelClass;
    elementWrapper.appendChild(labelElement);

    const id = `${prefix}${capitalize(config.name)}`;

    switch (config.type) {
        case 'group': {
            const subElementsWrapper = document.createElement('div');
            subElementsWrapper.className = 'hbox bottom-content';

            for (const key in config) {
                if (['type', 'name', 'label', 'labelClass'].includes(key)) continue;

                const subElementWrapper = document.createElement('div');
                subElementWrapper.className = 'vbox center-content';

                const subConfig = config[key];
                subConfig.name = key;

                appendInput(subElementWrapper, prefix, subConfig);
                subElementsWrapper.appendChild(subElementWrapper);
            }

            elementWrapper.appendChild(subElementsWrapper);
            break;
        }

        case 'optionset': {
            const selectElement = document.createElement('select');
            selectElement.id = id;
            if (config.class) selectElement.className = config.class;

            let targetValue = null;
            if (config.value) targetValue = config.value;
            if (config.cookie) targetValue = Cookie.jar[id] || targetValue;

            for (const option of config.options) {
                let value, display;
                if (typeof option == 'string') {
                    value = display = option;
                } else {
                    value = option.value;
                    display = option.display;
                }

                const optionElement = document.createElement('option');

                optionElement.value = value;
                optionElement.textContent = display;

                if (targetValue == value) optionElement.selected = true;

                selectElement.appendChild(optionElement);
            }

            const onChange = [];
            if (config.onChange) onChange.push(window[config.onChange]);
            if (config.cookie) onChange.push(function (event) {
                Cookie.bake(id, event.target.value);
            });

            selectElement.onchange = function () {
                const event = arguments[0]; // eslint-disable-line prefer-rest-params -- Event info not accessible via parameters.
                for (const subfunction of onChange) subfunction(event);
            };

            elementWrapper.appendChild(selectElement);
            break;
        }

        case 'number': case 'percent': default: {
            const inputElement = document.createElement('input');
            inputElement.type = 'number';
            inputElement.id = id;
            if (config.class) inputElement.className = config.class;
            if (config.value) inputElement.value = config.value;
            if (config.cookie) inputElement.value = Cookie.jar[id] || inputElement.value;
            if (config.min) inputElement.min = config.min;
            if (config.max) inputElement.max = config.max;
            if (config.step) inputElement.step = config.step;

            const onChange = [];
            if (config.onChange) onChange.push(window[config.onChange]);
            if (config.cookie) onChange.push(function (event) {
                Cookie.bake(id, event.target.value);
            });

            inputElement.onchange = function () {
                const event = arguments[0]; // eslint-disable-line prefer-rest-params -- Event info not accessible via parameters.
                for (const subfunction of onChange) subfunction(event);
            };

            if (config.type == 'percent') {
                const inputWrapper = document.createElement('div');
                inputWrapper.className = 'hbox center-content';

                inputWrapper.appendChild(inputElement);

                const bElement = document.createElement('b');
                bElement.textContent = '%';
                bElement.className = 'percent-input-postfix';
                inputWrapper.appendChild(bElement);

                elementWrapper.appendChild(inputWrapper);
            } else {
                elementWrapper.appendChild(inputElement);
            }
            break;
        }
    }

    el.appendChild(elementWrapper);
}