import { MONSTERS } from './Monsters.js';

const SLAYER = {
    task: {
        'Easy': {
            'display': 'Easy',
            'cost': 0,
            'minLevel': 1,
            'maxLevel': 49,
            'slayerLevel': 1,
        },
        'Normal': {
            'display': 'Normal',
            'cost': 2000,
            'minLevel': 50,
            'maxLevel': 99,
            'slayerLevel': 25,
        },
        'Hard': {
            'display': 'Hard',
            'cost': 5000,
            'minLevel': 100,
            'maxLevel': 199,
            'slayerLevel': 50,
        },
        'Elite': {
            'display': 'Elite',
            'cost': 15000,
            'minLevel': 200,
            'maxLevel': 374,
            'slayerLevel': 75,
        },
        'Master': {
            'display': 'Master',
            'cost': 25000,
            'minLevel': 375,
            'maxLevel': -1,
            'slayerLevel': 85,
        },
    },
};

const SLAYER_TIER_NAMES = Object.keys(SLAYER.task);

class SlayerTier {
    constructor(config) {
        this.id = config.id;
        this.name = config.display;

        this.slayerRequirement = config.slayerLevel;

        this.cost = config.cost;
        this.extensionCost = this._getExtensionCost();

        this.targetMonsterLevelRange = {
            min: config.minLevel,
            max: config.maxLevel > -1 ? config.maxLevel : 6969,
        };

        this.targetMonsterOptions = this._getTargetMonsters();
    }

    _getExtensionCost() {
        return 100 * Math.pow(this.id + 1, 3);
    }

    _getTargetMonsters() {
        return MONSTERS.filter(monster =>
            this.targetMonsterLevelRange.min <= monster.combatLevel &&
            monster.combatLevel <= this.targetMonsterLevelRange.max &&
            monster.canBeAssignedAsSlayerTask
        );
    }

    getInitialAmountRange(slayerLevel) {
        return {
            min: 10*(this.id + 1) + 4,
            max: 10*(this.id + 1) + 4 * slayerLevel,
        };
    }

    getExtensionAmount(slayerLevel) {
        return (this.id + 1) * (10 + Math.floor(slayerLevel / 5));
    }
}

// Initialize Slayer stuff
const SLAYER_TIERS = [];
for (let i = 0; i < SLAYER_TIER_NAMES.length; i++) {
    const name = SLAYER_TIER_NAMES[i];
    const config = SLAYER.task[name];
    config.id = i;
    const slayerTier = new SlayerTier(config);

    SLAYER_TIERS.push(slayerTier);
}

export { SLAYER_TIER_NAMES, SLAYER_TIERS };