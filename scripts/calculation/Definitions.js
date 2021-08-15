import { average } from '../util/Array.js';
import { randInt } from '../util/Random.js';
import { capitalize } from '../util/String.js';
import COMBAT_TRIANGLE from './Combat Triangle.js';
import format from '../util/Format.js';
import { GAME_MODES } from '../ui/GameModeUI.js';

const BASE_SIMULATION_KILLS = 10000;

const calculations = {
    gameMode: {
        hide: true,

        calculate(values) {
            const gameMode = values['game-mode'];

            let hpMultiplier = 1;
            let damagePenalty = -15;
            let meleeDrPenalty = -50;
            let rangedDrPenalty = -5;
            let magicDrPenalty = -15;

            if (gameMode == GAME_MODES.adventure) {
                hpMultiplier = 10;
            }

            if (gameMode == GAME_MODES.adventure || gameMode == GAME_MODES.hardcore) {
                damagePenalty = -25;
                meleeDrPenalty = -75;
                rangedDrPenalty = -25;
                magicDrPenalty = -25;
            }

            return {
                hpMultiplier,
                combatTriangle: {
                    damage: damagePenalty,
                    dr: {
                        melee: meleeDrPenalty,
                        ranged: rangedDrPenalty,
                        magic: magicDrPenalty,
                    },
                },
            };
        },
    },

    playerHitChance: {
        format: format.percent,

        calculate(values) {
            const monsterEvasion = values[`monster${capitalize(values.playerStyle)}Evasion`];

            if (values.playerAccuracy < monsterEvasion) {
                return values.playerAccuracy / monsterEvasion * 50;
            } else {
                return 100 - monsterEvasion / values.playerAccuracy * 50;
            }
        },
    },

    combatTriangle(values) {
        return COMBAT_TRIANGLE[values.playerStyle][values.monsterStyle];
    },

    combatTriangleDamageBonus: {
        hide: true,

        format(value) {
            return `${value} %`;
        },

        calculate(values) {
            switch (values.combatTriangle) {
                case '😰':
                    return values.gameMode.combatTriangle.damage;

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
            switch (values.combatTriangle) {
                case '😰': {
                    const style = values.playerStyle;
                    return values.gameMode.combatTriangle.dr[style];
                }

                case '😐':
                    return 0;

                case '😁':
                    return 25;

                default:
                    throw new Error(`Unknown combat triangle pairing: ${values.playerStyle}, ${values.monsterStyle}`);
            }
        },
    },

    playerModifiedDamage: {
        hide: true,

        calculate(values) {
            const multiplier = (1 + values.combatTriangleDamageBonus / 100);

            return {
                min: values.playerMinDamage * multiplier,
                max: values.playerMaxDamage * multiplier,
            };
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
                (1 - values.playerModifiedDamageReduction / 100) *
                values.gameMode.hpMultiplier;
        },
    },

    monsterModifiedMaxHp: {
        hide: true,

        calculate(values) {
            return values.monsterMaxHp * values.gameMode.hpMultiplier;
        },
    },

    playerAverageDamagePerHit(values) {
        return (values.playerModifiedDamage.min + values.playerModifiedDamage.max) / 2;
    },

    playerDps(values) {
        return values.playerAverageDamagePerHit / values.playerSpeed *
            values.playerHitChance / 100;
    },

    naiveHitsToKill: {
        hide: true,

        calculate(values) {
            return values.monsterModifiedMaxHp / values.playerAverageDamagePerHit;
        },
    },

    simulatedAverageHitsToKill: {
        hide: true,

        calculate(values) {
            const simResults = [];

            const sims = BASE_SIMULATION_KILLS * (values.simulationFidelity || 1);

            for (let i = 0; i < sims; i++) {
                let hits = 0;

                let monsterHp = values.monsterModifiedMaxHp;
                while (monsterHp > 0) {
                    const hit = randInt(
                        values.playerModifiedDamage.min,
                        values.playerModifiedDamage.max
                    );
                    monsterHp -= hit;
                    hits++;

                    if (hits > 100) return 100;
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
        return values.monsterModifiedMaxHp * 0.4 / values.averageTimeToKillAndRespawn /
            values.gameMode.hpMultiplier;
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
            if (value) return '🦀';
            return '💀';
        },

        calculate(values) {
            return values.monsterModifiedMaxDamage <= values.playerAutoEat;
        },
    },

    slayerCoins: {
        hide: true,

        calculate(values) {
            const hp = values.monsterModifiedMaxHp / values.gameMode.hpMultiplier;

            return Math.floor(hp / 10);
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
            const hp = values.monsterModifiedMaxHp / values.gameMode.hpMultiplier;

            if (values.monster && values.monster.alwaysGivesSlayerXp)
                return Math.floor(hp / 20);
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

    lootTableEntry: {
        hide: true,

        calculate(values) {
            if (! values.item || ! values.monster) return {};

            return values.monster.loot.find(
                loot => loot.item == values.item
            ) || {};
        },
    },

    dropChance: {
        hide: true,
        format: format.probability,

        calculate(values) {
            return values.lootTableEntry.chance || 0;
        },
    },

    dropAmount: {
        hide: true,

        format(value) {
            if (! value) return '--';

            value = Number(value);

            if (value == 1) return '1';
            return `1 - ${value.toFixed(0)}`;
        },

        calculate(values) {
            return values.lootTableEntry.maxStack || 0;
        },
    },

    dropsPerKill: {
        hide: true,

        calculate(values) {
            return (1 + values.dropAmount) / 2 * values.dropChance;
        },
    },

    dropsPerHour: {
        hide: true,

        calculate(values) {
            return values.dropsPerKill * values.killsPerHour;
        },
    },

    dropEtaHours: {
        hide: true,
        format: format.time.bind(format, 'hour'),

        calculate(values) {
            if (! values.dropChance) return NaN;

            const noDropChance = 1 - values.dropChance;
            const killsToHalfChance = Math.log(0.5) / Math.log(noDropChance);

            return Math.max(1, killsToHalfChance) / values.killsPerHour;
        },
    },
};

initialize(calculations);

export default calculations;

function initialize(calculations) {
    for (const key in calculations)
        if (typeof calculations[key] == 'function')
            calculations[key] = { calculate: calculations[key] };
}