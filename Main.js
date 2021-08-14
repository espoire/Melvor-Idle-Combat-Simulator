import { recalculateCombatStats, recalculateBestXpTable, recalculateSlayerTable } from './scripts/calculation/CalculationController.js';
import appendMonsterOptions from './scripts/ui/MonsterUI.js';
import { appendOptionsInputs } from './scripts/ui/SlayerUI.js';
import { appendPlayerInputs } from './scripts/ui/PlayerUI.js';
import TabPanel from './scripts/ui/widgets/TabPanel.js';

window.recalculateCombatStats = recalculateCombatStats;
window.recalculateSlayerTable = recalculateSlayerTable;

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
                label: '🙂<br />Player',
                element: 'player-tab',
            }, {
                label: '😈<br />Monsters',
                element: 'monster-tab',
                onShow: recalculateCombatStats,
            }, {
                label: '💎 🚧⏳<br />Loot',
                element: 'loot-tab',
            }, {
                label: '👑<br />Best XP',
                element: 'best-xp-tab',
                onShow: recalculateBestXpTable,
            }, {
                label: '💀<br />Slayer',
                element: 'slayer-tab',
                onShow: recalculateSlayerTable,
            }, {
                label: '🐉 🚧⏳<br />Dungeons',
                element: 'dungeons-tab',
            },
        ],
    });
}