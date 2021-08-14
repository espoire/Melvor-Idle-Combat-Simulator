import { camelCaseToTitleCase } from './String.js';

/**
 * @param {!HTMLElement} el
 */
export function removeChildren(el) {
    [...el.children].forEach(child => void child.remove());
}

/**
 * @param {!HTMLElement} el
 */
export function appendLineBreak(el) {
    const lineBreakElement = document.createElement('br');
    el.appendChild(lineBreakElement);
}

/**
 * @param {!HTMLElement} el
 */
export function appendOption(el) {
    const optionElement = document.createElement('option');
    el.appendChild(optionElement);
}

/**
 * @param {string} id
 * @param {any} value
 */
export function setInputValue(id, value) {
    const inputEl = document.getElementById(id);
    inputEl.value = value;
}

/**
 * @param {!HTMLElement} el
 * @param {string} key
 * @param {any} value
 */
export function appendKeyValueRow(el, key, value) {
    const rowElement = document.createElement('div');
    rowElement.className = 'row';

    appendKeyValueRowLabel(rowElement, key);
    appendKeyValueRowValue(rowElement, value);
    appendLineBreak(rowElement);

    el.appendChild(rowElement);
}

/**
 * @param {!HTMLElement} rowEl
 * @param {string} key
 */
function appendKeyValueRowLabel(rowEl, key) {
    const labelElement = document.createElement('label');

    labelElement.innerHTML = camelCaseToTitleCase(key);

    rowEl.appendChild(labelElement);
}

/**
 * @param {!HTMLElement} rowEl
 * @param {any} value
 */
function appendKeyValueRowValue(rowEl, value) {
    const valueElement = document.createElement('span');
    valueElement.className = 'value';

    let text = value;
    if (typeof value == 'number')
        text = value.toFixed(1);
    valueElement.innerHTML = text;

    rowEl.appendChild(valueElement);
}

/**
 * @param {!HTMLElement} el
 * @param  {...string} headers
 */
export function appendTableHead(el, ...headers) {
    const trElement = document.createElement('tr');

    for (const header of headers) {
        const thElement = document.createElement('th');
        thElement.innerHTML = header;

        trElement.appendChild(thElement);
    }

    el.appendChild(trElement);
}

/**
 * @param {!HTMLElement} el
 * @param  {...string} data
 */
export function appendTableRow(el, ...data) {
    const trElement = document.createElement('tr');

    for (const datum of data) {
        const tdElement = document.createElement('td');
        tdElement.innerHTML = datum;

        trElement.appendChild(tdElement);
    }

    el.appendChild(trElement);
}