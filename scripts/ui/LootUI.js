import { ITEMS_FROM_COMBAT } from '../melvor/ItemsProcessing.js';
import { appendOption } from '../util/Element.js';

export default function appendItemOptions(el) {
    appendOption(el);
    for (const item of ITEMS_FROM_COMBAT)
        appendItemOption(el, item);
}

function appendItemOption(el, item) {
    const optionEl = document.createElement('option');

    if (item) {
        optionEl.value = item.name;
        optionEl.innerHTML = item.name;
    }

    el.appendChild(optionEl);
}