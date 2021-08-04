import { renderCalculationsTo, renderFindMonsterTo, renderSlayerSummaryTo } from "./scripts/calculation/CalculationController.js";
import appendMonsterOptions, { appendMonsterInputs, onMonsterOptionSelected } from "./scripts/ui/MonsterUI.js";
import { appendOptionsInputs } from "./scripts/ui/OptionsUI.js";
import { appendPlayerInputs } from "./scripts/ui/PlayerUI.js";
import TabPanel from "./scripts/ui/widgets/TabPanel.js";

window.onCalculateButtonClick = function () {
    renderCalculationsTo(document.getElementById('calculations'));
};
window.onFindMonsterButtonClick = function () {
    renderFindMonsterTo(document.getElementById('found-monster'));
}
window.onShowSlayerButtonClick = function () {
    renderSlayerSummaryTo(document.getElementById('slayer-table'));
}

window.onMonsterSelected = onMonsterOptionSelected;

(function onAfterLoad() {
    appendPlayerInputs(document.getElementById('player'));
    appendMonsterOptions(document.getElementById('monster-select'));
    appendMonsterInputs(document.getElementById('monster-inputs'));
    appendOptionsInputs(document.getElementById('options'));

    new TabPanel({
        parent: 'output',
        tabs: [
            {
                label: 'Specific Monster',
                element: 'calculate-output',
            }, {
                label: 'Best Monsters for XP',
                element: 'find-monster-output',
            }, {
                label: 'Slayer Tiers',
                element: 'show-slayer-output',
            }
        ]
    });
})();