import { sort, unique } from '../util/Array.js';
import { MONSTERS } from './Monsters.js';

const ITEMS_FROM_COMBAT = buildItemsFromCombatArray();
const MONSTERS_BY_ITEM_NAME = buildMonstersByItemNameArray();

function buildItemsFromCombatArray() {
    let ret = [];

    for (const monster of MONSTERS)
        if (monster.includeInSearch)
            for (const loot of monster.loot)
                ret.push(loot.item);

    ret = unique(ret);
    ret.sort((a, b) => sort.alphabetize(a.name, b.name));

    return ret;
}

function buildMonstersByItemNameArray() {
    const ret = {};

    for (const monster of MONSTERS) {
        for (const loot of monster.loot) {
            if (! ret[loot.item.name])
                ret[loot.item.name] = [];

            ret[loot.item.name].push(monster);
        }
    }

    return ret;
}

export { ITEMS_FROM_COMBAT, MONSTERS_BY_ITEM_NAME };