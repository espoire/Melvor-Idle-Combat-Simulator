import { recalculateCombatStats, recalculateBestXpTable, recalculateSlayerTable, recalculateLootTable } from './scripts/calculation/Core.js';
import appendMonsterOptions from './scripts/ui/MonsterUI.js';
import { appendSlayerInputs } from './scripts/ui/SlayerUI.js';
import { appendPlayerInputs } from './scripts/ui/PlayerUI.js';
import appendItemOptions from './scripts/ui/LootUI.js';
import TabPanel from './scripts/ui/widgets/TabPanel.js';

window.recalculateCombatStats = recalculateCombatStats;
window.recalculateSlayerTable = recalculateSlayerTable;
window.recalculateLootTable = recalculateLootTable;

onAfterLoad();

function onAfterLoad() {
    appendPlayerInputs(document.getElementById('player'));
    appendMonsterOptions(document.getElementById('monster-select'));
    appendSlayerInputs(document.getElementById('slayer-options'));
    appendItemOptions(document.getElementById('loot-select'));

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
                label: '👑<br />XP',
                element: 'best-xp-tab',
                onShow: recalculateBestXpTable,
            }, {
                label: '💀<br />Slayer',
                element: 'slayer-tab',
                onShow: recalculateSlayerTable,
            }, {
                label: '💎 🚧<br />Loot',
                element: 'loot-tab',
            }, {
                label: '🐉 ⏳<br />Dungeons',
                element: 'dungeons-tab',
            },
        ],
    });
}