import { MONSTERS, MONSTERS_BY_NAME } from "../melvor/Monsters.js";
import { appendOption, setInputValue } from "../util/Element.js";
import { appendInput } from "./Player.js";

const INPUTS = {
    style: {
        type: 'optionset',
        options: [
            { value: 'melee', display: '⚔' },
            { value: 'ranged', display: '🏹' },
            { value: 'magic', display: '🧙‍♂️' },
        ],
        value: 'magic',
    },

    maxHp: {
        value: 600,
        min: 1,
    },

    meleeEvasion: {
        value: 1856,
        min: 1,
    },

    rangedEvasion: {
        value: 1856,
        min: 1,
    },

    magicEvasion: {
        value: 6968,
        min: 1,
    },
};

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

/**
 * @param {!HTMLElement} el 
 */
export function appendMonsterInputs(el) {
    for(const key in INPUTS) {
        const config = INPUTS[key];
        config.name = key;

        appendMonsterInput(el, config);
    }
}

/**
 * @param {!HTMLElement} el 
 * @param {object} config 
 */
function appendMonsterInput(el, config) {
    appendInput(el, 'monster', config);
}

export function onMonsterOptionSelected() {
    const monsterSelectEl = document.getElementById('monster-select');
    const value = monsterSelectEl.value;
    const monster = MONSTERS_BY_NAME[value];

    if(!monster) return;

    setInputValue('monsterStyle', monster.style);
    setInputValue('monsterMaxHp', monster.hp);
    setInputValue('monsterMeleeEvasion', monster.ratings.melee.evasion);
    setInputValue('monsterRangedEvasion', monster.ratings.ranged.evasion);
    setInputValue('monsterMagicEvasion', monster.ratings.magic.evasion);
};

export function setValuesForMonster(values, monster) {
    if(!monster) return;

    values.monsterStyle = monster.style;
    values.monsterMaxHp = monster.hp;
    values.monsterMeleeEvasion = monster.ratings.melee.evasion;
    values.monsterRangedEvasion = monster.ratings.ranged.evasion;
    values.monsterMagicEvasion = monster.ratings.magic.evasion;
}