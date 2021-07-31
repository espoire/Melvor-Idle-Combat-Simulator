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