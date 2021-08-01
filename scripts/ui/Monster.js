import { MONSTERS, MONSTERS_BY_NAME } from "../melvor/Monsters.js";
import { appendOption, setInputValue } from "../util/Element.js";

export default function appendMonsterOptions(el) {
    appendOption(el);
    for(const monster of MONSTERS)
        appendMonsterOption(el, monster);
}

function appendMonsterOption(el, monster) {
    const optionEl = document.createElement('option');
    
    if(monster) {
        optionEl.value = monster.name;
        optionEl.innerHTML = monster.toString();
    }

    el.appendChild(optionEl);
}

export function onMonsterOptionSelected() {
    const monsterSelectEl = document.getElementById('monster-select');
    const value = monsterSelectEl.value;
    const monster = MONSTERS_BY_NAME[value];

    if(!monster) return;

    setInputValue('monsterMaxHp', monster.hp);
    setInputValue('monsterMeleeEvasion', monster.ratings.melee.evasion);
    setInputValue('monsterRangedEvasion', monster.ratings.ranged.evasion);
    setInputValue('monsterMagicEvasion', monster.ratings.magic.evasion);
};

export function setValuesForMonster(values, monster) {
    if(!monster) return;

    values.monsterMaxHp = monster.hp;
    values.monsterMeleeEvasion = monster.ratings.melee.evasion;
    values.monsterRangedEvasion = monster.ratings.ranged.evasion;
    values.monsterMagicEvasion = monster.ratings.magic.evasion;
}