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