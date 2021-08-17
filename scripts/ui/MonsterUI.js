import { MONSTERS, MONSTERS_BY_NAME } from '../melvor/Monsters.js';
import { appendOption } from '../util/Element.js';

export default function appendMonsterOptions(el) {
    appendOption(el);

    for (const monster of MONSTERS)
        appendMonsterOption(el, monster);

    el.value = 'Cow';
}

function appendMonsterOption(el, monster) {
    const optionEl = document.createElement('option');

    if (monster) {
        optionEl.value = monster.name;
        optionEl.textContent = monster.toString();
    }

    el.appendChild(optionEl);
}

export function setValuesForMonsterByName(values, monsterName) {
    setValuesForMonster(values, MONSTERS_BY_NAME[monsterName]);
}

export function setValuesForMonster(values, monster) {
    if (!monster) return;

    values.monster = monster;

    values.monsterMaxHp = monster.hp;
    values.monsterStyle = monster.style;
    values.monsterMaxDamage = monster.maxHit;
    values.monsterMeleeEvasion = monster.ratings.melee.evasion;
    values.monsterRangedEvasion = monster.ratings.ranged.evasion;
    values.monsterMagicEvasion = monster.ratings.magic.evasion;
}