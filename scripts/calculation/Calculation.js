import { average } from "../util/Array.js";
import { randInt } from "../util/Random.js";

const SIMS = 100000;

const calculations = {
    playerAverageDamagePerHit(values) {
        return (values.playerMinDamage + values.playerMaxDamage) / 2;
    },

    naiveHitsToKill(values) {
        return values.enemyMaxHp / values.playerAverageDamagePerHit;
    },

    simulatedAverageHitsToKill(values) {
        const simResults = [];

        for(let i = 0; i < SIMS; i++) {
            let hits = 0;

            let enemyHp = values.enemyMaxHp;
            while(enemyHp > 0) {
                let hit = randInt(values.playerMinDamage, values.playerMaxDamage);
                enemyHp -= hit;
                hits++;
            }

            simResults.push(hits);
        }

        return average(simResults);
    },

    simulatedAverageAttacksToKill(values) {
        return values.simulatedAverageHitsToKill / (values.playerHitChance / 100);
    },

    averageTimeToKill(values) {
        return values.simulatedAverageAttacksToKill * values.playerAttackSpeed;
    },

    averageTimeToKillAndRespawn(values) {
        return values.averageTimeToKill + 3.0;
    },

    killHz(values) {
        return 1 / values.averageTimeToKillAndRespawn;
    },

    killsPerMinute(values) {
        return 60 / values.averageTimeToKillAndRespawn;
    },

    killsPerHour(values) {
        return 3600 / values.averageTimeToKillAndRespawn;
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