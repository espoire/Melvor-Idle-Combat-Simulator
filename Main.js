import calculations from "./scripts/calculation/Calculation.js";
import { camelCaseToTitleCase } from "./scripts/util/String.js";

function run() {
    renderCalculationsTo(document.getElementById('calculations'));
    document.getElementById('output').style.display = 'table';
}

/**
 * @param {!HTMLElement} el 
 */
function renderCalculationsTo(el) {
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

/**
 * @param {!HTMLElement} el 
 */
function appendLineBreak(el) {
    const lineBreakElement = document.createElement('br');
    el.appendChild(lineBreakElement);
}

window.run = run;
console.log("Main.js loaded.");