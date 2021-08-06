import { renderCalculationsTo, renderFindMonsterTo, renderSlayerSummaryTo } from "./scripts/calculation/CalculationController.js";
import appendMonsterOptions, { appendMonsterInputs, onMonsterOptionSelected } from "./scripts/ui/MonsterUI.js";
import { appendOptionsInputs } from "./scripts/ui/OptionsUI.js";
import { appendPlayerInputs } from "./scripts/ui/PlayerUI.js";
import TabPanel from "./scripts/ui/widgets/TabPanel.js";

window.onCalculateButtonClick = function () {
    renderCalculationsTo(document.getElementById('monster-combat-stats-output'));
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
        parent: 'main-tab-panel',
        tabs: [
            {
                noButton: true,
                element: 'intro-page',
            }, {
                label: '🙂 Player',
                element: 'player-tab',
            }, {
                label: '😈 Monsters',
                element: 'monster-tab',
            }, {
                label: '💎 Loot 🚧⏳',
                element: 'loot-tab'
            }, {
                label: '👑 Best XP',
                element: 'best-xp-tab',
            }, {
                label: '💀 Slayer',
                element: 'slayer-tab',
            }, {
                label: '🐉 Dungeons 🚧⏳',
                element: 'dungeons-tab'
            }
        ]
    });
})();