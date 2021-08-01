import { renderCalculationsTo } from "./scripts/calculation/Calculation.js";
import MONSTERS_BY_NAME from "./scripts/melvor/Monsters.js";
import { appendOption, setInputValue } from "./scripts/util/Element.js";

window.onCalculateButtonClick = function () {
    renderCalculationsTo(document.getElementById('calculations'));
    document.getElementById('output').style.display = 'table';
};

(function onAfterLoad() {
    console.log("After load");

    const monsterSelectEl = document.getElementById('monster-select');
    appendOption(monsterSelectEl);
    for(const name in MONSTERS_BY_NAME) {
        const monster = MONSTERS_BY_NAME[name];
        appendMonsterOption(monsterSelectEl, monster);
    }
})();

function appendMonsterOption(el, monster) {
    const optionEl = document.createElement('option');
    
    if(monster) {
        optionEl.value = monster.name;
        optionEl.innerHTML = `${monster.name} (Level ${monster.combatLevel})`;
    }

    el.appendChild(optionEl);
}

window.onMonsterSelected = function() {
    const monsterSelectEl = document.getElementById('monster-select');
    const value = monsterSelectEl.value;
    const monster = MONSTERS_BY_NAME[value];

    if(!monster) return;

    setInputValue('monsterMaxHp', monster.hp);
};