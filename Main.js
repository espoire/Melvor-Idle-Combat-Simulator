import { recalculateCombatStats, renderFindMonsterTo, renderSlayerSummaryTo } from './scripts/calculation/CalculationController.js';
import appendMonsterOptions from './scripts/ui/MonsterUI.js';
import { appendOptionsInputs } from './scripts/ui/OptionsUI.js';
import { appendPlayerInputs } from './scripts/ui/PlayerUI.js';
import TabPanel from './scripts/ui/widgets/TabPanel.js';

window.recalculateCombatStats = recalculateCombatStats;
window.onFindMonsterButtonClick = function () {
    renderFindMonsterTo(document.getElementById('found-monster'));
};
window.onShowSlayerButtonClick = function () {
    renderSlayerSummaryTo(document.getElementById('slayer-table'));
};

onAfterLoad();

function onAfterLoad() {
    appendPlayerInputs(document.getElementById('player'));
    appendMonsterOptions(document.getElementById('monster-select'));
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
                onShow: recalculateCombatStats,
            }, {
                label: '💎 Loot 🚧⏳',
                element: 'loot-tab',
            }, {
                label: '👑 Best XP',
                element: 'best-xp-tab',
            }, {
                label: '💀 Slayer',
                element: 'slayer-tab',
            }, {
                label: '🐉 Dungeons 🚧⏳',
                element: 'dungeons-tab',
            },
        ],
    });
}