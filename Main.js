import { renderCalculationsTo, renderFindMonsterTo } from "./scripts/calculation/Calculation.js";
import appendMonsterOptions, { onMonsterOptionSelected } from "./scripts/ui/Monster.js";
import { appendPlayerInputs } from "./scripts/ui/Player.js";

window.onCalculateButtonClick = function () {
    renderCalculationsTo(document.getElementById('calculations'));
    document.getElementById('calculate-output').style.display = 'table';
};
window.onFindMonsterButtonClick = function () {
    renderFindMonsterTo(document.getElementById('found-monster'));
    document.getElementById('find-monster-output').style.display = 'table';
}

window.onMonsterSelected = onMonsterOptionSelected;

(function onAfterLoad() {
    console.log("After load");

    appendMonsterOptions(document.getElementById('monster-select'));
    appendPlayerInputs(document.getElementById('player'));
})();

