import { average } from "../util/Array.js";
import { randInt } from "../util/Random.js";
import { capitalize } from "../util/String.js";
import COMBAT_TRIANGLE from "./Combat Triangle.js";

const SIMS = 10000;

const calculations = {
    playerHitChance: {
        format(value) {
            return `${value} %`;
        },

        calculate(values) {
            const monsterEvasion = values[`monster${capitalize(values.playerStyle)}Evasion`];

            if(values.playerAccuracy < monsterEvasion) {
                return values.playerAccuracy / monsterEvasion * 50;
            } else {
                return 100 - monsterEvasion / values.playerAccuracy * 50;
            }
        },
    },

    combatTriangle(values) {
        return COMBAT_TRIANGLE[values.playerStyle][values.monsterStyle];
    },

    combatTriangleMaxDamageBonus: {
        hide: true,

        format(value) {
            return `${value} %`;
        },

        calculate(values) {
            switch(values.combatTriangle) {
                case '😰':
                    return -15;
                case '😐':
                    return 0;
                case '😁':
                    return 10;
                default:
                    throw new Error(`Unknown combat triangle pairing: ${values.playerStyle}, ${values.monsterStyle}`);
            }
        },
    },

    combatTriangleDamageReductionBonus: {
        hide: true,

        format(value) {
            return `${value} %`;
        },

        calculate(values) {
            switch(values.combatTriangle) {
                case '😰':
                    return -15;
                case '😐':
                    return 0;
                case '😁':
                    return 25;
                default:
                    throw new Error(`Unknown combat triangle pairing: ${values.playerStyle}, ${values.monsterStyle}`);
            }
        },
    },

    combatTriangleDamageTakenBonus: {
        hide: true,

        format(value) {
            return `${value} %`;
        },

        calculate(values) {
            switch(values.combatTriangle) {
                case '😰':
                    return 10;
                case '😐':
                    return 0;
                case '😁':
                    return -15;
                default:
                    throw new Error(`Unknown combat triangle pairing: ${values.playerStyle}, ${values.monsterStyle}`);
            }
        },
    },

    playerModifiedMaxDamage: {
        hide: true,

        calculate(values) {
            return values.playerMaxDamage * (1 + values.combatTriangleMaxDamageBonus / 100);
        },
    },

    playerModifiedDamageReduction: {
        hide: true,

        calculate(values) {
            return Math.floor(
                values.playerDamageReduction *
                (1 + values.combatTriangleDamageReductionBonus / 100)
            );
        },
    },

    monsterModifiedMaxDamage: {
        // hide: true,

        calculate(values) {
            return values.monsterMaxDamage *
                (1 + values.combatTriangleDamageTakenBonus / 100) *
                (1 - values.playerModifiedDamageReduction  / 100);
        },
    },

    playerAverageDamagePerHit(values) {
        return (values.playerMinDamage + values.playerModifiedMaxDamage) / 2;
    },

    playerDps(values) {
        return values.playerAverageDamagePerHit * values.playerHitChance / 100 / values.playerSpeed;
    },

    naiveHitsToKill: {
        hide: true,

        calculate(values) {
            return values.monsterMaxHp / values.playerAverageDamagePerHit;
        },
    },

    simulatedAverageHitsToKill: {
        hide: true,

        calculate(values) {
            const simResults = [];

            for(let i = 0; i < SIMS; i++) {
                let hits = 0;

                let monsterHp = values.monsterMaxHp;
                while(monsterHp > 0) {
                    let hit = randInt(values.playerMinDamage, values.playerModifiedMaxDamage);
                    monsterHp -= hit;
                    hits++;

                    if(hits > 100) return 100;
                }

                simResults.push(hits);
            }

            return average(simResults);
        },
    },

    simulatedAverageAttacksToKill(values) {
        return values.simulatedAverageHitsToKill / (values.playerHitChance / 100);
    },

    averageTimeToKill: {
        hide: true,

        calculate(values) {
            return values.simulatedAverageAttacksToKill * values.playerSpeed;
        },
    },

    averageTimeToKillAndRespawn(values) {
        return values.averageTimeToKill + 3.0;
    },

    xpHz(values) {
        return values.monsterMaxHp * 0.4 / values.averageTimeToKillAndRespawn;
    },

    killHz: {
        hide: true,

        calculate(values) {
            return 1 / values.averageTimeToKillAndRespawn;
        },
    },

    killsPerMinute(values) {
        return 60 / values.averageTimeToKillAndRespawn;
    },

    killsPerHour(values) {
        return 3600 / values.averageTimeToKillAndRespawn;
    },

    autoEat: {
        format(value) {
            if(value) return '🦀👍';
            return '💀👎';
        },

        calculate(values) {
            return values.monsterModifiedMaxDamage <= values.playerAutoEat;
        },
    },

    slayerCoins: {
        hide: true,

        calculate(values) {
            return Math.floor(values.monsterMaxHp / 10);
        },
    },

    slayerCoinHz: {
        hide: true,

        calculate(values) {
            return values.slayerCoins * values.killHz;
        },
    },

    baseSlayerXp: {
        hide: true,

        calculate(values) {
            if(values.monster && values.monster.alwaysGivesSlayerXp)
                return Math.floor(values.monsterMaxHp / 20);
            return 0;
        },
    },

    slayerXpIfTask: {
        hide: true,

        calculate(values) {
            return values.slayerCoins + values.baseSlayerXp;
        },
    },

    slayerXpHz: {
        hide: true,

        calculate(values) {
            return values.slayerXpIfTask * values.killHz;
        },
    },
};

function initialize(calculations) {
    for(const key in calculations) {
        const calculation = calculations[key];

        if(typeof calculation == 'function') {
            calculations[key] = {
                calculate: calculation
            };
        }
    }
}

initialize(calculations);

export default calculations;