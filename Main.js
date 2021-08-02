import { renderCalculationsTo, renderFindMonsterTo } from "./scripts/calculation/CalculationController.js";
import appendMonsterOptions, { appendMonsterInputs, onMonsterOptionSelected } from "./scripts/ui/MonsterUI.js";
import { appendPlayerInputs } from "./scripts/ui/PlayerUI.js";

window.onCalculateButtonClick = function () {
    renderCalculationsTo(document.getElementById('calculations'));
    document.getElementById('calculate-output').style.display = 'inline-block';
};
window.onFindMonsterButtonClick = function () {
    renderFindMonsterTo(document.getElementById('found-monster'));
    document.getElementById('find-monster-output').style.display = 'inline-block';
}

window.onMonsterSelected = onMonsterOptionSelected;

(function onAfterLoad() {
    console.log("After load");

    appendPlayerInputs(document.getElementById('player'));
    appendMonsterOptions(document.getElementById('monster-select'));
    appendMonsterInputs(document.getElementById('monster-inputs'));
})();