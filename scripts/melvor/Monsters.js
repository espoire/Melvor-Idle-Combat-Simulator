import SPELLS from "./Spells.js";

let MONSTERS = [
    {
        "id": 0,
        "name": "Black Knight",
        "hitpoints": 20,
        "attackLevel": 20,
        "strengthLevel": 20,
        "defenceLevel": 20,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 10,
        "attackBonusRanged": 0,
        "strengthBonus": 0,
        "defenceBonus": 20,
        "defenceBonusRanged": 20,
        "defenceBonusMagic": 0,
        "attackSpeed": 2600,
        "attackType": 0,
        "dropCoins": [
            10,
            50
        ],
        "lootTable": [
            [
                139,
                50,
                1
            ],
            [
                138,
                30,
                1
            ],
            [
                134,
                30,
                1
            ],
            [
                142,
                20,
                1
            ],
            [
                135,
                20,
                1
            ],
            [
                136,
                20,
                1
            ],
            [
                434,
                8,
                1
            ],
            [
                137,
                20,
                1
            ],
            [
                140,
                5,
                1
            ],
            [
                141,
                1,
                1
            ]
        ],
        "lootChance": 10,
        "media": "assets/media/monsters/black_knight.svg",
        "bones": 439,
        "canSlayer": true
    },
    {
        "id": 1,
        "name": "Hill Giant",
        "hitpoints": 35,
        "attackLevel": 18,
        "strengthLevel": 22,
        "defenceLevel": 26,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 18,
        "strengthBonus": 16,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "dropCoins": [
            8,
            24
        ],
        "lootTable": [
            [
                263,
                25,
                15
            ],
            [
                264,
                25,
                15
            ],
            [
                144,
                25,
                10
            ],
            [
                145,
                25,
                10
            ],
            [
                529,
                25,
                1
            ],
            [
                149,
                10,
                5
            ],
            [
                129,
                1,
                1
            ],
            [
                130,
                1,
                1
            ]
        ],
        "media": "assets/media/monsters/hill_giant.svg",
        "bones": 506,
        "canSlayer": true
    },
    {
        "id": 2,
        "name": "Moss Giant",
        "hitpoints": 60,
        "attackLevel": 50,
        "strengthLevel": 50,
        "defenceLevel": 50,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 33,
        "strengthBonus": 50,
        "defenceBonus": 30,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "dropCoins": [
            28,
            65
        ],
        "lootTable": [
            [
                264,
                25,
                20
            ],
            [
                265,
                15,
                15
            ],
            [
                392,
                25,
                15
            ],
            [
                148,
                25,
                8
            ],
            [
                393,
                25,
                10
            ],
            [
                530,
                25,
                1
            ],
            [
                531,
                15,
                1
            ],
            [
                150,
                11,
                5
            ],
            [
                395,
                10,
                5
            ],
            [
                396,
                5,
                5
            ],
            [
                131,
                1,
                1
            ],
            [
                163,
                1,
                1
            ]
        ],
        "lootChance": 75,
        "media": "assets/media/monsters/moss_giant.svg",
        "bones": 506,
        "canSlayer": true
    },
    {
        "id": 3,
        "name": "Giant Crab",
        "hitpoints": 60,
        "attackLevel": 20,
        "strengthLevel": 15,
        "defenceLevel": 30,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 5,
        "strengthBonus": 10,
        "defenceBonus": 10,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 2400,
        "attackType": 0,
        "dropCoins": [
            10,
            30
        ],
        "lootTable": [
            [
                16,
                100,
                1
            ],
            [
                120,
                1,
                1
            ]
        ],
        "media": "assets/media/monsters/large_crab.svg",
        "bones": 439,
        "canSlayer": true
    },
    {
        "id": 4,
        "name": "Tentacle",
        "hitpoints": 25,
        "attackLevel": 10,
        "strengthLevel": 10,
        "defenceLevel": 5,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 5,
        "strengthBonus": 5,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 2400,
        "attackType": 0,
        "dropCoins": [
            1,
            20
        ],
        "lootTable": [
            [
                47,
                10,
                5
            ],
            [
                48,
                10,
                5
            ],
            [
                10,
                10,
                3
            ],
            [
                11,
                10,
                3
            ]
        ],
        "media": "assets/media/monsters/tentacle.svg",
        "bones": 439,
        "canSlayer": true
    },
    {
        "id": 5,
        "name": "Seagull",
        "hitpoints": 6,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 1,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 2400,
        "attackType": 0,
        "dropCoins": [
            1,
            5
        ],
        "lootTable": [
            [
                278,
                1,
                55
            ]
        ],
        "media": "assets/media/monsters/seagull.svg",
        "bones": 439,
        "canSlayer": true
    },
    {
        "id": 6,
        "name": "Confused Pirate",
        "hitpoints": 40,
        "attackLevel": 40,
        "strengthLevel": 20,
        "defenceLevel": 20,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 30,
        "strengthBonus": 8,
        "defenceBonus": 10,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3600,
        "attackType": 0,
        "lootTable": [
            [
                433,
                50,
                1
            ],
            [
                434,
                30,
                1
            ],
            [
                435,
                8,
                1
            ],
            [
                436,
                1,
                1
            ]
        ],
        "lootChance": 20,
        "dropCoins": [
            10,
            80
        ],
        "media": "assets/media/monsters/pirate.svg",
        "bones": 439,
        "canSlayer": true
    },
    {
        "id": 7,
        "name": "Frozen Mammoth",
        "hitpoints": 70,
        "attackLevel": 20,
        "strengthLevel": 60,
        "defenceLevel": 60,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 20,
        "strengthBonus": 50,
        "defenceBonus": 50,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "dropCoins": [
            200,
            300
        ],
        "lootTable": [
            [
                377,
                1,
                1
            ]
        ],
        "lootChance": 1,
        "media": "assets/media/monsters/frozen_mammoth.svg",
        "bones": 506,
        "canSlayer": true
    },
    {
        "id": 8,
        "name": "Frozen Archer",
        "hitpoints": 30,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 1,
        "rangedLevel": 40,
        "magicLevel": 1,
        "attackBonus": 0,
        "attackBonusRanged": 10,
        "strengthBonus": 0,
        "strengthBonusRanged": 15,
        "defenceBonus": 0,
        "defenceBonusRanged": 20,
        "defenceBonusMagic": 20,
        "attackSpeed": 2000,
        "attackType": 1,
        "dropCoins": [
            50,
            100
        ],
        "lootTable": [
            [
                378,
                1,
                20
            ]
        ],
        "lootChance": 20,
        "media": "assets/media/monsters/frozen_archer.svg",
        "bones": 439,
        "canSlayer": true
    },
    {
        "id": 9,
        "name": "Mummy",
        "hitpoints": 27,
        "attackLevel": 22,
        "strengthLevel": 27,
        "defenceLevel": 27,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 2500,
        "attackType": 0,
        "dropCoins": [
            5,
            40
        ],
        "lootTable": [
            [
                527,
                20,
                2
            ],
            [
                325,
                20,
                1
            ],
            [
                327,
                20,
                1
            ],
            [
                528,
                15,
                2
            ],
            [
                320,
                10,
                1
            ],
            [
                323,
                10,
                1
            ],
            [
                246,
                10,
                1
            ],
            [
                319,
                1,
                1
            ]
        ],
        "media": "assets/media/monsters/mummy.svg",
        "bones": 439,
        "canSlayer": true,
        "slayerXP": 13
    },
    {
        "id": 10,
        "name": "Statue",
        "hitpoints": 37,
        "attackLevel": 22,
        "strengthLevel": 37,
        "defenceLevel": 37,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 10,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 10,
        "attackSpeed": 2500,
        "attackType": 0,
        "dropCoins": [
            5,
            40
        ],
        "lootTable": [
            [
                48,
                10,
                5
            ],
            [
                133,
                5,
                3
            ],
            [
                58,
                5,
                2
            ]
        ],
        "media": "assets/media/monsters/statue.svg",
        "bones": 439,
        "canSlayer": true,
        "slayerXP": 18
    },
    {
        "id": 11,
        "name": "Stone Snake",
        "hitpoints": 60,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 60,
        "rangedLevel": 1,
        "magicLevel": 75,
        "attackBonus": 0,
        "attackBonusMagic": 30,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 40,
        "damageBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 2,
        "selectedSpell": 7,
        "dropCoins": [
            5,
            40
        ],
        "lootTable": [
            [
                51,
                20,
                5
            ],
            [
                529,
                15,
                2
            ],
            [
                52,
                10,
                5
            ],
            [
                53,
                1,
                5
            ]
        ],
        "media": "assets/media/monsters/stone_snake.svg",
        "bones": 439,
        "canSlayer": true,
        "slayerXP": 30
    },
    {
        "id": 12,
        "name": "Wet Monster",
        "hitpoints": 30,
        "attackLevel": 30,
        "strengthLevel": 30,
        "defenceLevel": 30,
        "rangedLevel": 20,
        "magicLevel": 20,
        "attackBonus": 33,
        "strengthBonus": 31,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3600,
        "attackType": 0,
        "dropCoins": [
            20,
            80
        ],
        "lootTable": [
            [
                51,
                5,
                1
            ],
            [
                52,
                1,
                1
            ],
            [
                49,
                10,
                1
            ],
            [
                14,
                5,
                1
            ],
            [
                26,
                5,
                1
            ],
            [
                29,
                1,
                1
            ],
            [
                25,
                10,
                1
            ],
            [
                59,
                2,
                1
            ],
            [
                58,
                4,
                1
            ],
            [
                57,
                5,
                1
            ],
            [
                4,
                5,
                1
            ],
            [
                3,
                5,
                1
            ],
            [
                6,
                1,
                1
            ],
            [
                128,
                3,
                1
            ],
            [
                12,
                10,
                1
            ],
            [
                13,
                10,
                1
            ],
            [
                248,
                1,
                1
            ],
            [
                529,
                5,
                2
            ]
        ],
        "media": "assets/media/monsters/m12.svg",
        "bones": 439,
        "canSlayer": true
    },
    {
        "id": 13,
        "name": "Moist Monster",
        "hitpoints": 25,
        "attackLevel": 40,
        "strengthLevel": 20,
        "defenceLevel": 40,
        "rangedLevel": 20,
        "magicLevel": 20,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 15,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 2400,
        "attackType": 0,
        "dropCoins": [
            20,
            80
        ],
        "lootTable": [
            [
                51,
                5,
                1
            ],
            [
                52,
                1,
                1
            ],
            [
                49,
                10,
                1
            ],
            [
                14,
                5,
                1
            ],
            [
                26,
                5,
                1
            ],
            [
                29,
                1,
                1
            ],
            [
                25,
                10,
                1
            ],
            [
                59,
                2,
                1
            ],
            [
                58,
                4,
                1
            ],
            [
                57,
                5,
                1
            ],
            [
                4,
                5,
                1
            ],
            [
                3,
                5,
                1
            ],
            [
                6,
                1,
                1
            ],
            [
                128,
                3,
                1
            ],
            [
                12,
                10,
                1
            ],
            [
                13,
                10,
                1
            ],
            [
                246,
                1,
                1
            ],
            [
                530,
                5,
                2
            ]
        ],
        "lootQty": [
            1
        ],
        "media": "assets/media/monsters/m13.svg",
        "bones": 439,
        "canSlayer": true
    },
    {
        "id": 14,
        "name": "Sweaty Monster",
        "hitpoints": 28,
        "attackLevel": 22,
        "strengthLevel": 24,
        "defenceLevel": 24,
        "rangedLevel": 20,
        "magicLevel": 20,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 2400,
        "attackType": 0,
        "dropCoins": [
            20,
            80
        ],
        "lootTable": [
            [
                51,
                5,
                1
            ],
            [
                52,
                1,
                1
            ],
            [
                49,
                10,
                1
            ],
            [
                14,
                5,
                1
            ],
            [
                26,
                5,
                1
            ],
            [
                29,
                1,
                1
            ],
            [
                25,
                10,
                1
            ],
            [
                59,
                2,
                1
            ],
            [
                58,
                4,
                1
            ],
            [
                57,
                5,
                1
            ],
            [
                4,
                5,
                1
            ],
            [
                3,
                5,
                1
            ],
            [
                6,
                1,
                1
            ],
            [
                128,
                3,
                1
            ],
            [
                12,
                10,
                1
            ],
            [
                13,
                10,
                1
            ],
            [
                247,
                1,
                1
            ],
            [
                531,
                5,
                2
            ]
        ],
        "lootQty": [
            1
        ],
        "media": "assets/media/monsters/m14.svg",
        "bones": 439,
        "canSlayer": true
    },
    {
        "id": 15,
        "name": "Undead Werewolf",
        "hitpoints": 48,
        "attackLevel": 58,
        "strengthLevel": 55,
        "defenceLevel": 48,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 2500,
        "attackType": 0,
        "dropCoins": [
            20,
            80
        ],
        "lootTable": [
            [
                292,
                1,
                5
            ]
        ],
        "media": "assets/media/monsters/undead_wolf.svg",
        "bones": 439,
        "canSlayer": true,
        "slayerXP": 24
    },
    {
        "id": 16,
        "name": "Vampire",
        "hitpoints": 50,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 40,
        "rangedLevel": 70,
        "magicLevel": 1,
        "attackBonus": 0,
        "attackBonusRanged": 10,
        "strengthBonus": 0,
        "strengthBonusRanged": 10,
        "defenceBonus": 0,
        "defenceBonusRanged": 30,
        "defenceBonusMagic": 50,
        "attackSpeed": 2600,
        "attackType": 1,
        "dropCoins": [
            20,
            80
        ],
        "lootTable": [
            [
                389,
                10,
                5
            ],
            [
                391,
                10,
                5
            ],
            [
                392,
                10,
                5
            ],
            [
                393,
                10,
                5
            ],
            [
                530,
                10,
                2
            ],
            [
                390,
                10,
                5
            ],
            [
                395,
                3,
                3
            ],
            [
                396,
                1,
                2
            ]
        ],
        "lootChance": 75,
        "media": "assets/media/monsters/vampire.svg",
        "bones": 439,
        "canSlayer": true,
        "slayerXP": 25
    },
    {
        "id": 17,
        "name": "Fierce Devil",
        "hitpoints": 82,
        "attackLevel": 100,
        "strengthLevel": 90,
        "defenceLevel": 74,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 0,
        "strengthBonus": 10,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 2600,
        "attackType": 0,
        "dropCoins": [
            20,
            80
        ],
        "lootTable": [
            [
                143,
                900,
                1
            ],
            [
                532,
                100,
                2
            ],
            [
                367,
                1,
                1
            ]
        ],
        "media": "assets/media/monsters/fierce_devil.svg",
        "bones": 439,
        "canSlayer": true,
        "slayerXP": 41
    },
    {
        "id": 18,
        "name": "Many Eyed Monster",
        "hitpoints": 37,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 37,
        "rangedLevel": 50,
        "magicLevel": 15,
        "attackBonus": 0,
        "attackBonusRanged": 30,
        "strengthBonus": 0,
        "strengthBonusRanged": 20,
        "defenceBonus": 0,
        "defenceBonusRanged": 40,
        "defenceBonusMagic": 70,
        "attackSpeed": 2600,
        "attackType": 1,
        "dropCoins": [
            20,
            80
        ],
        "lootTable": [
            [
                495,
                5,
                3
            ],
            [
                529,
                1,
                3
            ]
        ],
        "media": "assets/media/monsters/many_eyed_monster.svg",
        "bones": 439,
        "canSlayer": true,
        "slayerXP": 18
    },
    {
        "id": 19,
        "name": "Strange Eyed Monster",
        "hitpoints": 65,
        "attackLevel": 65,
        "strengthLevel": 65,
        "defenceLevel": 65,
        "rangedLevel": 65,
        "magicLevel": 65,
        "attackBonus": 30,
        "strengthBonus": 0,
        "defenceBonus": 10,
        "defenceBonusRanged": 20,
        "defenceBonusMagic": 20,
        "attackSpeed": 2800,
        "attackType": 0,
        "dropCoins": [
            40,
            120
        ],
        "lootTable": [
            [
                495,
                5,
                8
            ],
            [
                531,
                1,
                3
            ]
        ],
        "media": "assets/media/monsters/strange_eyed_monster.svg",
        "bones": 439,
        "canSlayer": true,
        "slayerXP": 32
    },
    {
        "id": 20,
        "name": "Lots of Eyes",
        "hitpoints": 25,
        "attackLevel": 54,
        "strengthLevel": 46,
        "defenceLevel": 32,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 10,
        "strengthBonus": 0,
        "defenceBonus": 10,
        "defenceBonusRanged": 10,
        "defenceBonusMagic": 5,
        "attackSpeed": 2500,
        "attackType": 0,
        "dropCoins": [
            40,
            120
        ],
        "lootTable": [
            [
                495,
                5,
                5
            ],
            [
                530,
                1,
                3
            ]
        ],
        "media": "assets/media/monsters/lots_of_eyes.svg",
        "bones": 439,
        "canSlayer": true,
        "slayerXP": 12
    },
    {
        "id": 21,
        "name": "Eyes",
        "hitpoints": 81,
        "attackLevel": 68,
        "strengthLevel": 70,
        "defenceLevel": 71,
        "rangedLevel": 15,
        "magicLevel": 25,
        "attackBonus": 25,
        "strengthBonus": 25,
        "defenceBonus": 25,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "dropCoins": [
            40,
            120
        ],
        "lootTable": [
            [
                495,
                5,
                12
            ],
            [
                532,
                1,
                3
            ]
        ],
        "media": "assets/media/monsters/eyes.svg",
        "bones": 439,
        "canSlayer": true,
        "slayerXP": 40
    },
    {
        "id": 22,
        "name": "Griffin",
        "hitpoints": 150,
        "attackLevel": 97,
        "strengthLevel": 67,
        "defenceLevel": 135,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 20,
        "strengthBonus": 30,
        "defenceBonus": 0,
        "defenceBonusRanged": 20,
        "defenceBonusMagic": 0,
        "attackSpeed": 2400,
        "attackType": 0,
        "dropCoins": [
            40,
            120
        ],
        "lootTable": [
            [
                496,
                1,
                1
            ]
        ],
        "lootChance": 12,
        "media": "assets/media/monsters/griffin.svg",
        "bones": 506,
        "canSlayer": true,
        "slayerXP": 75
    },
    {
        "id": 23,
        "name": "Pegasus",
        "hitpoints": 220,
        "attackLevel": 140,
        "strengthLevel": 160,
        "defenceLevel": 120,
        "rangedLevel": 1,
        "magicLevel": 130,
        "attackBonus": 0,
        "strengthBonus": 30,
        "defenceBonus": 40,
        "defenceBonusRanged": 100,
        "defenceBonusMagic": 90,
        "attackSpeed": 2400,
        "attackType": 0,
        "dropCoins": [
            40,
            120
        ],
        "lootTable": [
            [
                498,
                1,
                1
            ]
        ],
        "lootChance": 3,
        "media": "assets/media/monsters/pegasus.svg",
        "bones": 441,
        "canSlayer": true,
        "slayerXP": 110
    },
    {
        "id": 24,
        "name": "Fairy",
        "hitpoints": 41,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 40,
        "rangedLevel": 20,
        "magicLevel": 50,
        "attackBonus": 0,
        "attackBonusMagic": 0,
        "strengthBonus": 0,
        "defenceBonus": 30,
        "defenceBonusRanged": 10,
        "defenceBonusMagic": 30,
        "damageBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 2,
        "selectedSpell": 12,
        "dropCoins": [
            10,
            50
        ],
        "lootTable": [
            [
                527,
                5,
                3
            ],
            [
                399,
                5,
                1
            ],
            [
                401,
                5,
                1
            ],
            [
                400,
                5,
                1
            ],
            [
                402,
                5,
                1
            ],
            [
                490,
                1,
                1
            ],
            [
                531,
                1,
                3
            ]
        ],
        "lootChance": 40,
        "media": "assets/media/monsters/fairy.svg",
        "bones": 500,
        "canSlayer": true,
        "slayerXP": 20
    },
    {
        "id": 25,
        "name": "Valkyrie",
        "hitpoints": 54,
        "attackLevel": 70,
        "strengthLevel": 79,
        "defenceLevel": 40,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 10,
        "strengthBonus": 10,
        "defenceBonus": 10,
        "defenceBonusRanged": 30,
        "defenceBonusMagic": 0,
        "attackSpeed": 2400,
        "attackType": 0,
        "dropCoins": [
            40,
            120
        ],
        "lootTable": [
            [
                104,
                1,
                1
            ],
            [
                103,
                1,
                1
            ],
            [
                105,
                1,
                1
            ],
            [
                437,
                1,
                1
            ],
            [
                106,
                1,
                1
            ]
        ],
        "lootChance": 5,
        "media": "assets/media/monsters/valkyrie.svg",
        "bones": 500,
        "canSlayer": true,
        "slayerXP": 27
    },
    {
        "id": 26,
        "name": "Angel",
        "hitpoints": 80,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 50,
        "rangedLevel": 20,
        "magicLevel": 80,
        "attackBonus": 0,
        "attackBonusMagic": 50,
        "strengthBonus": 0,
        "defenceBonus": 30,
        "defenceBonusRanged": 60,
        "defenceBonusMagic": 60,
        "damageBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 2,
        "selectedSpell": 14,
        "dropCoins": [
            40,
            120
        ],
        "lootTable": [
            [
                403,
                5,
                1
            ],
            [
                405,
                5,
                1
            ],
            [
                404,
                5,
                1
            ],
            [
                406,
                5,
                1
            ],
            [
                491,
                1,
                1
            ]
        ],
        "lootChance": 5,
        "media": "assets/media/monsters/angel.svg",
        "bones": 500,
        "canSlayer": true,
        "slayerXP": 40
    },
    {
        "id": 27,
        "name": "Holy Archer",
        "hitpoints": 105,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 60,
        "rangedLevel": 80,
        "magicLevel": 30,
        "attackBonus": 0,
        "attackBonusRanged": 40,
        "strengthBonus": 0,
        "strengthBonusRanged": 50,
        "defenceBonus": 40,
        "defenceBonusRanged": 80,
        "defenceBonusMagic": 80,
        "attackSpeed": 2400,
        "attackType": 1,
        "dropCoins": [
            40,
            120
        ],
        "lootTable": [
            [
                265,
                100,
                15
            ],
            [
                266,
                50,
                15
            ],
            [
                267,
                25,
                15
            ],
            [
                533,
                1,
                3
            ],
            [
                260,
                10,
                1
            ],
            [
                261,
                5,
                1
            ],
            [
                387,
                1,
                1
            ],
            [
                501,
                1,
                1
            ]
        ],
        "media": "assets/media/monsters/holy_archer.svg",
        "bones": 500,
        "canSlayer": true,
        "slayerXP": 52
    },
    {
        "id": 28,
        "name": "Goo Monster",
        "hitpoints": 15,
        "attackLevel": 15,
        "strengthLevel": 12,
        "defenceLevel": 15,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 5,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 2400,
        "attackType": 0,
        "dropCoins": [
            1,
            30
        ],
        "lootTable": [
            [
                527,
                10,
                3
            ],
            [
                55,
                10,
                3
            ],
            [
                528,
                4,
                3
            ],
            [
                56,
                3,
                3
            ],
            [
                63,
                5,
                1
            ],
            [
                71,
                1,
                1
            ]
        ],
        "media": "assets/media/monsters/goo_monster.svg",
        "bones": 439,
        "canSlayer": true,
        "slayerXP": 7
    },
    {
        "id": 29,
        "name": "Green Goo Monster",
        "hitpoints": 35,
        "attackLevel": 35,
        "strengthLevel": 20,
        "defenceLevel": 35,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 20,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 2400,
        "attackType": 0,
        "dropCoins": [
            10,
            40
        ],
        "lootTable": [
            [
                57,
                10,
                3
            ],
            [
                59,
                3,
                3
            ],
            [
                79,
                5,
                1
            ],
            [
                87,
                1,
                1
            ]
        ],
        "media": "assets/media/monsters/green_goo_monster.svg",
        "bones": 439,
        "canSlayer": true,
        "slayerXP": 27
    },
    {
        "id": 30,
        "name": "Purple Goo Monster",
        "hitpoints": 54,
        "attackLevel": 42,
        "strengthLevel": 42,
        "defenceLevel": 42,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 30,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "dropCoins": [
            10,
            50
        ],
        "lootTable": [
            [
                58,
                10,
                3
            ],
            [
                530,
                10,
                3
            ],
            [
                60,
                3,
                3
            ],
            [
                95,
                5,
                1
            ],
            [
                248,
                1,
                1
            ]
        ],
        "media": "assets/media/monsters/purple_goo_monster.svg",
        "bones": 439,
        "canSlayer": true,
        "slayerXP": 27
    },
    {
        "id": 31,
        "name": "Scattered Goo Monster",
        "hitpoints": 76,
        "attackLevel": 60,
        "strengthLevel": 50,
        "defenceLevel": 60,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 30,
        "strengthBonus": 30,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "dropCoins": [
            40,
            120
        ],
        "lootTable": [
            [
                249,
                1,
                1
            ]
        ],
        "lootChance": 2,
        "media": "assets/media/monsters/scattered_goo_monster.svg",
        "bones": 439,
        "canSlayer": true,
        "slayerXP": 27
    },
    {
        "id": 32,
        "name": "Raging Horned Elite",
        "hitpoints": 140,
        "attackLevel": 97,
        "strengthLevel": 79,
        "defenceLevel": 135,
        "rangedLevel": 40,
        "magicLevel": 1,
        "attackBonus": 20,
        "strengthBonus": 30,
        "defenceBonus": 0,
        "defenceBonusRanged": 20,
        "defenceBonusMagic": 0,
        "attackSpeed": 2600,
        "attackType": 0,
        "dropCoins": [
            70,
            180
        ],
        "lootTable": [
            [
                503,
                475,
                30
            ],
            [
                24,
                475,
                30
            ],
            [
                619,
                200,
                4
            ],
            [
                807,
                1,
                1
            ]
        ],
        "media": "assets/media/monsters/raging_horned_elite.svg",
        "bones": 506,
        "canSlayer": true,
        "slayerXP": 70
    },
    {
        "id": 33,
        "name": "Seething Horned Elite",
        "hitpoints": 200,
        "attackLevel": 104,
        "strengthLevel": 130,
        "defenceLevel": 140,
        "rangedLevel": 40,
        "magicLevel": 40,
        "attackBonus": 40,
        "strengthBonus": 40,
        "defenceBonus": 60,
        "defenceBonusRanged": 60,
        "defenceBonusMagic": 0,
        "attackSpeed": 2600,
        "attackType": 0,
        "dropCoins": [
            100,
            350
        ],
        "lootTable": [
            [
                128,
                250,
                10
            ],
            [
                533,
                200,
                3
            ],
            [
                129,
                200,
                10
            ],
            [
                130,
                200,
                10
            ],
            [
                131,
                150,
                10
            ],
            [
                534,
                120,
                3
            ],
            [
                619,
                120,
                4
            ],
            [
                132,
                24,
                10
            ],
            [
                366,
                2,
                1
            ],
            [
                438,
                2,
                1
            ],
            [
                807,
                1,
                1
            ]
        ],
        "media": "assets/media/monsters/seething_horned_elite.svg",
        "bones": 506,
        "canSlayer": true,
        "slayerXP": 90
    },
    {
        "id": 34,
        "name": "Dark Horned Elite",
        "hitpoints": 280,
        "attackLevel": 178,
        "strengthLevel": 178,
        "defenceLevel": 180,
        "rangedLevel": 90,
        "magicLevel": 90,
        "attackBonus": 75,
        "strengthBonus": 80,
        "defenceBonus": 80,
        "defenceBonusRanged": 70,
        "defenceBonusMagic": 70,
        "attackSpeed": 2600,
        "attackType": 0,
        "dropCoins": [
            250,
            750
        ],
        "lootTable": [
            [
                90,
                450,
                1
            ],
            [
                98,
                225,
                1
            ],
            [
                533,
                150,
                3
            ],
            [
                106,
                110,
                1
            ],
            [
                534,
                90,
                3
            ],
            [
                619,
                90,
                4
            ],
            [
                114,
                10,
                1
            ],
            [
                504,
                1,
                1
            ],
            [
                807,
                1,
                1
            ]
        ],
        "media": "assets/media/monsters/dark_horned_elite.svg",
        "bones": 506,
        "canSlayer": true,
        "slayerXP": 140
    },
    {
        "id": 35,
        "name": "Golbin",
        "hitpoints": 5,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 1,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "dropCoins": [
            2,
            10
        ],
        "lootTable": [
            [
                391,
                7,
                4
            ],
            [
                394,
                7,
                4
            ],
            [
                9,
                6,
                3
            ],
            [
                527,
                5,
                1
            ],
            [
                121,
                1,
                1
            ],
            [
                65,
                1,
                1
            ]
        ],
        "media": "assets/media/monsters/goblin.svg",
        "bones": 439,
        "canSlayer": true
    },
    {
        "id": 36,
        "name": "Ranged Golbin",
        "hitpoints": 10,
        "attackLevel": 5,
        "strengthLevel": 5,
        "defenceLevel": 5,
        "rangedLevel": 5,
        "magicLevel": 1,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "strengthBonus": 0,
        "strengthBonusRanged": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 1,
        "dropCoins": [
            2,
            10
        ],
        "lootTable": [
            [
                262,
                15,
                4
            ],
            [
                9,
                13,
                3
            ],
            [
                527,
                10,
                1
            ],
            [
                250,
                8,
                1
            ],
            [
                251,
                1,
                1
            ]
        ],
        "media": "assets/media/monsters/goblin.svg",
        "bones": 439,
        "canSlayer": true
    },
    {
        "id": 37,
        "name": "Chicken",
        "foundIn": 1,
        "hitpoints": 3,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 1,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": -47,
        "strengthBonus": -42,
        "defenceBonus": -42,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 2400,
        "attackType": 0,
        "dropCoins": [
            1,
            5
        ],
        "lootTable": [
            [
                278,
                1,
                45
            ]
        ],
        "media": "assets/media/monsters/chicken.svg",
        "bones": 439,
        "canSlayer": true
    },
    {
        "id": 38,
        "name": "Cow",
        "foundIn": 1,
        "hitpoints": 8,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 1,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": -15,
        "strengthBonus": -15,
        "defenceBonus": -21,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 2400,
        "attackType": 0,
        "dropCoins": [
            1,
            5
        ],
        "lootTable": [
            [
                292,
                1,
                3
            ]
        ],
        "media": "assets/media/monsters/cow.svg",
        "bones": 439,
        "canSlayer": true
    },
    {
        "id": 39,
        "name": "Chick",
        "description": "Please don't hurt me.",
        "hitpoints": 3,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 1,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": -45,
        "strengthBonus": -45,
        "defenceBonus": -45,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 4000,
        "attackType": 0,
        "dropCoins": [
            1,
            5
        ],
        "media": "assets/media/monsters/chick.svg",
        "bones": 439
    },
    {
        "id": 40,
        "name": "Mumma Chicken",
        "hitpoints": 50,
        "attackLevel": 30,
        "strengthLevel": 30,
        "defenceLevel": 30,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 2600,
        "attackType": 0,
        "dropCoins": [
            70,
            700
        ],
        "lootTable": [
            [
                346,
                1,
                1
            ]
        ],
        "media": "assets/media/monsters/mumma_chicken.svg",
        "bones": 439,
        "isBoss": true
    },
    {
        "id": 41,
        "name": "Pirate",
        "hitpoints": 50,
        "attackLevel": 70,
        "strengthLevel": 50,
        "defenceLevel": 50,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 50,
        "strengthBonus": 12,
        "defenceBonus": 20,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3600,
        "attackType": 0,
        "dropCoins": [
            20,
            80
        ],
        "media": "assets/media/monsters/pirate.svg",
        "bones": 439
    },
    {
        "id": 42,
        "name": "Pirate Captain",
        "hitpoints": 100,
        "attackLevel": 100,
        "strengthLevel": 80,
        "defenceLevel": 80,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 50,
        "strengthBonus": 50,
        "defenceBonus": 50,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3200,
        "attackType": 0,
        "dropCoins": [
            20,
            80
        ],
        "media": "assets/media/monsters/pirate_captain.svg",
        "bones": 439
    },
    {
        "id": 43,
        "name": "The Kraken",
        "hitpoints": 300,
        "attackLevel": 100,
        "strengthLevel": 100,
        "defenceLevel": 150,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 60,
        "strengthBonus": 45,
        "defenceBonus": 60,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 4000,
        "attackType": 0,
        "dropCoins": [
            280,
            1120
        ],
        "media": "assets/media/monsters/kraken.svg",
        "lootTable": [
            [
                360,
                1,
                1
            ]
        ],
        "bones": 439,
        "isBoss": true
    },
    {
        "id": 44,
        "name": "Bat",
        "hitpoints": 10,
        "attackLevel": 20,
        "strengthLevel": 30,
        "defenceLevel": 15,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "dropCoins": [
            1,
            10
        ],
        "media": "assets/media/monsters/bat.svg",
        "bones": 439
    },
    {
        "id": 45,
        "name": "Big Bat",
        "hitpoints": 20,
        "attackLevel": 40,
        "strengthLevel": 60,
        "defenceLevel": 30,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "dropCoins": [
            1,
            10
        ],
        "media": "assets/media/monsters/bat_big.svg",
        "bones": 439
    },
    {
        "id": 46,
        "name": "The Eye",
        "hitpoints": 40,
        "attackLevel": 80,
        "strengthLevel": 120,
        "defenceLevel": 60,
        "rangedLevel": 60,
        "magicLevel": 120,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "attackBonusMagic": 0,
        "strengthBonus": 0,
        "strengthBonusRanged": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "damageBonusMagic": 0,
        "attackSpeed": 2800,
        "attackType": 2,
        "selectedSpell": 9,
        "dropCoins": [
            1,
            10
        ],
        "media": "assets/media/monsters/eye.svg",
        "bones": 439
    },
    {
        "id": 47,
        "name": "Resurrected Eye",
        "hitpoints": 80,
        "attackLevel": 160,
        "strengthLevel": 240,
        "defenceLevel": 120,
        "rangedLevel": 80,
        "magicLevel": 200,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "attackBonusMagic": 0,
        "strengthBonus": 0,
        "strengthBonusRanged": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "damageBonusMagic": 0,
        "attackSpeed": 2800,
        "attackType": 2,
        "selectedSpell": 19,
        "dropCoins": [
            1,
            10
        ],
        "media": "assets/media/monsters/eye_resurrected.svg",
        "bones": 439
    },
    {
        "id": 48,
        "name": "Prat, the Protector of Secrets",
        "hitpoints": 160,
        "attackLevel": 320,
        "strengthLevel": 480,
        "defenceLevel": 240,
        "rangedLevel": 480,
        "magicLevel": 240,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "attackBonusMagic": 0,
        "strengthBonus": 0,
        "strengthBonusRanged": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 1,
        "dropCoins": [
            1,
            10
        ],
        "media": "assets/media/monsters/prat_protector_of_secrets.svg",
        "bones": 441,
        "hasSpecialAttack": true,
        "specialAttackID": [
            0
        ]
    },
    {
        "id": 49,
        "name": "Malcs, the Guardian of Melvor",
        "hitpoints": 250,
        "attackLevel": 640,
        "strengthLevel": 960,
        "defenceLevel": 380,
        "rangedLevel": 960,
        "magicLevel": 480,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "dropCoins": [
            14000,
            35000
        ],
        "media": "assets/media/monsters/malcs_guardian_of_melvor.svg",
        "lootTable": [
            [
                362,
                1,
                1
            ]
        ],
        "bones": 441,
        "isBoss": true,
        "hasSpecialAttack": true,
        "specialAttackID": [
            1,
            2
        ]
    },
    {
        "id": 50,
        "name": "Spider",
        "hitpoints": 25,
        "attackLevel": 50,
        "strengthLevel": 50,
        "defenceLevel": 50,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "dropCoins": [
            10,
            100
        ],
        "media": "assets/media/monsters/spider.svg",
        "bones": 439
    },
    {
        "id": 51,
        "name": "Spider",
        "hitpoints": 30,
        "attackLevel": 50,
        "strengthLevel": 50,
        "defenceLevel": 50,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "dropCoins": [
            10,
            100
        ],
        "media": "assets/media/monsters/spider2.svg",
        "bones": 439
    },
    {
        "id": 52,
        "name": "Evil Spider",
        "hitpoints": 75,
        "attackLevel": 80,
        "strengthLevel": 80,
        "defenceLevel": 80,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "dropCoins": [
            10,
            250
        ],
        "media": "assets/media/monsters/spider_subboss.svg",
        "bones": 439
    },
    {
        "id": 53,
        "name": "Spider King",
        "hitpoints": 200,
        "attackLevel": 120,
        "strengthLevel": 120,
        "defenceLevel": 120,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "dropCoins": [
            350,
            3500
        ],
        "media": "assets/media/monsters/spider_boss.svg",
        "lootTable": [
            [
                363,
                1,
                1
            ]
        ],
        "bones": 439,
        "isBoss": true
    },
    {
        "id": 54,
        "name": "Ice Monster",
        "hitpoints": 50,
        "attackLevel": 70,
        "strengthLevel": 70,
        "defenceLevel": 70,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "dropCoins": [
            100,
            250
        ],
        "lootTable": [
            [
                370,
                1,
                1
            ]
        ],
        "lootChance": 10,
        "media": "assets/media/monsters/ice_monster.svg",
        "bones": 439
    },
    {
        "id": 55,
        "name": "Ice Troll",
        "hitpoints": 70,
        "attackLevel": 80,
        "strengthLevel": 80,
        "defenceLevel": 80,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "dropCoins": [
            10,
            100
        ],
        "media": "assets/media/monsters/ice_troll.svg",
        "bones": 439
    },
    {
        "id": 56,
        "name": "Ice",
        "hitpoints": 30,
        "attackLevel": 80,
        "strengthLevel": 80,
        "defenceLevel": 80,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "dropCoins": [
            10,
            100
        ],
        "media": "assets/media/monsters/ice.svg",
        "bones": 439
    },
    {
        "id": 57,
        "name": "Protector of Ice",
        "hitpoints": 225,
        "attackLevel": 150,
        "strengthLevel": 150,
        "defenceLevel": 150,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "dropCoins": [
            1400,
            7000
        ],
        "media": "assets/media/monsters/ice_king.svg",
        "lootTable": [
            [
                381,
                1,
                1
            ]
        ],
        "bones": 439,
        "isBoss": true
    },
    {
        "id": 58,
        "name": "First Mate",
        "hitpoints": 75,
        "attackLevel": 80,
        "strengthLevel": 65,
        "defenceLevel": 65,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 65,
        "strengthBonus": 35,
        "defenceBonus": 20,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "dropCoins": [
            20,
            80
        ],
        "media": "assets/media/monsters/first_mate.svg",
        "bones": 439
    },
    {
        "id": 59,
        "name": "Zombie Hand",
        "hitpoints": 20,
        "attackLevel": 20,
        "strengthLevel": 20,
        "defenceLevel": 20,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "dropCoins": [
            20,
            80
        ],
        "lootTable": [
            [
                70,
                1,
                1
            ],
            [
                69,
                1,
                1
            ],
            [
                78,
                1,
                1
            ],
            [
                77,
                1,
                1
            ]
        ],
        "media": "assets/media/monsters/zombie_hand.svg",
        "bones": 439
    },
    {
        "id": 60,
        "name": "Zombie",
        "hitpoints": 30,
        "attackLevel": 30,
        "strengthLevel": 30,
        "defenceLevel": 30,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "lootTable": [
            [
                527,
                1,
                3
            ],
            [
                78,
                1,
                1
            ],
            [
                76,
                1,
                1
            ],
            [
                86,
                1,
                1
            ],
            [
                84,
                1,
                1
            ]
        ],
        "dropCoins": [
            20,
            80
        ],
        "media": "assets/media/monsters/zombie.svg",
        "bones": 439
    },
    {
        "id": 61,
        "name": "Zombie Leader",
        "hitpoints": 70,
        "attackLevel": 60,
        "strengthLevel": 60,
        "defenceLevel": 60,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 40,
        "strengthBonus": 20,
        "defenceBonus": 20,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "dropCoins": [
            140,
            1400
        ],
        "media": "assets/media/monsters/zombie_leader.svg",
        "lootTable": [
            [
                382,
                1,
                1
            ]
        ],
        "isBoss": true
    },
    {
        "id": 62,
        "name": "Ghost",
        "hitpoints": 40,
        "attackLevel": 40,
        "strengthLevel": 40,
        "defenceLevel": 40,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 20,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 2400,
        "attackType": 0,
        "dropCoins": [
            1,
            10
        ],
        "lootTable": [
            [
                531,
                1,
                5
            ]
        ],
        "lootChance": 25,
        "media": "assets/media/monsters/ghost.svg",
        "bones": 439
    },
    {
        "id": 63,
        "name": "Green Dragon",
        "hitpoints": 75,
        "attackLevel": 68,
        "strengthLevel": 68,
        "defenceLevel": 68,
        "rangedLevel": 60,
        "magicLevel": 60,
        "attackBonus": 20,
        "strengthBonus": 40,
        "defenceBonus": 40,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "dropCoins": [
            1,
            100
        ],
        "media": "assets/media/monsters/dragon_green.svg",
        "lootTable": [
            [
                293,
                1,
                10
            ]
        ],
        "bones": 440,
        "canSlayer": true
    },
    {
        "id": 64,
        "name": "Blue Dragon",
        "hitpoints": 90,
        "attackLevel": 75,
        "strengthLevel": 75,
        "defenceLevel": 75,
        "rangedLevel": 70,
        "magicLevel": 70,
        "attackBonus": 30,
        "strengthBonus": 50,
        "defenceBonus": 50,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "dropCoins": [
            1,
            175
        ],
        "media": "assets/media/monsters/dragon_blue.svg",
        "lootTable": [
            [
                294,
                1,
                10
            ]
        ],
        "bones": 440,
        "canSlayer": true
    },
    {
        "id": 65,
        "name": "Red Dragon",
        "hitpoints": 100,
        "attackLevel": 90,
        "strengthLevel": 90,
        "defenceLevel": 90,
        "rangedLevel": 80,
        "magicLevel": 80,
        "attackBonus": 45,
        "strengthBonus": 60,
        "defenceBonus": 60,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "dropCoins": [
            1,
            325
        ],
        "media": "assets/media/monsters/dragon_red.svg",
        "lootTable": [
            [
                295,
                1,
                10
            ]
        ],
        "bones": 440,
        "canSlayer": true
    },
    {
        "id": 66,
        "name": "Black Dragon",
        "hitpoints": 120,
        "attackLevel": 100,
        "strengthLevel": 100,
        "defenceLevel": 100,
        "rangedLevel": 90,
        "magicLevel": 90,
        "attackBonus": 60,
        "strengthBonus": 80,
        "defenceBonus": 80,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "dropCoins": [
            1,
            600
        ],
        "media": "assets/media/monsters/dragon_black.svg",
        "lootTable": [
            [
                296,
                1,
                10
            ]
        ],
        "lootQty": [
            5
        ],
        "bones": 440,
        "canSlayer": true
    },
    {
        "id": 67,
        "name": "Junior Farmer",
        "foundIn": 1,
        "hitpoints": 8,
        "attackLevel": 5,
        "strengthLevel": 5,
        "defenceLevel": 5,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 2400,
        "attackType": 0,
        "dropCoins": [
            1,
            5
        ],
        "lootTable": [
            [
                143,
                10,
                3
            ],
            [
                527,
                6,
                2
            ],
            [
                144,
                5,
                3
            ],
            [
                145,
                3,
                3
            ],
            [
                146,
                1,
                3
            ]
        ],
        "media": "assets/media/monsters/junior_farmer.svg",
        "bones": 439,
        "canSlayer": true
    },
    {
        "id": 68,
        "name": "Adult Farmer",
        "foundIn": 1,
        "hitpoints": 20,
        "attackLevel": 20,
        "strengthLevel": 20,
        "defenceLevel": 20,
        "rangedLevel": 20,
        "magicLevel": 1,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 2400,
        "attackType": 0,
        "dropCoins": [
            1,
            5
        ],
        "lootTable": [
            [
                144,
                180,
                5
            ],
            [
                145,
                140,
                5
            ],
            [
                146,
                110,
                5
            ],
            [
                528,
                105,
                2
            ],
            [
                529,
                90,
                2
            ],
            [
                147,
                80,
                5
            ],
            [
                148,
                50,
                5
            ],
            [
                149,
                20,
                5
            ],
            [
                159,
                20,
                5
            ],
            [
                150,
                10,
                5
            ],
            [
                160,
                20,
                5
            ]
        ],
        "media": "assets/media/monsters/adult_farmer.svg",
        "bones": 439,
        "canSlayer": true
    },
    {
        "id": 69,
        "name": "Master Farmer",
        "foundIn": 1,
        "hitpoints": 28,
        "attackLevel": 45,
        "strengthLevel": 45,
        "defenceLevel": 45,
        "rangedLevel": 30,
        "magicLevel": 20,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 2400,
        "attackType": 0,
        "dropCoins": [
            1,
            5
        ],
        "lootTable": [
            [
                146,
                110,
                8
            ],
            [
                147,
                80,
                8
            ],
            [
                148,
                50,
                8
            ],
            [
                530,
                60,
                2
            ],
            [
                531,
                50,
                2
            ],
            [
                149,
                20,
                8
            ],
            [
                159,
                20,
                8
            ],
            [
                150,
                10,
                8
            ],
            [
                160,
                80,
                8
            ],
            [
                161,
                30,
                8
            ],
            [
                162,
                15,
                8
            ],
            [
                163,
                5,
                8
            ],
            [
                164,
                1,
                8
            ],
            [
                811,
                1,
                1
            ]
        ],
        "media": "assets/media/monsters/master_farmer.svg",
        "bones": 439,
        "canSlayer": true
    },
    {
        "id": 70,
        "name": "Wizard",
        "foundIn": 1,
        "hitpoints": 30,
        "attackLevel": 20,
        "strengthLevel": 20,
        "defenceLevel": 20,
        "rangedLevel": 20,
        "magicLevel": 40,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "attackBonusMagic": 20,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "damageBonusMagic": 0,
        "attackSpeed": 2400,
        "attackType": 2,
        "selectedSpell": 7,
        "dropCoins": [
            10,
            50
        ],
        "lootTable": [
            [
                389,
                100,
                10
            ],
            [
                391,
                80,
                10
            ],
            [
                392,
                60,
                10
            ],
            [
                393,
                40,
                10
            ],
            [
                411,
                40,
                1
            ],
            [
                412,
                40,
                1
            ],
            [
                413,
                40,
                1
            ],
            [
                414,
                40,
                1
            ],
            [
                415,
                1,
                1
            ],
            [
                416,
                1,
                1
            ],
            [
                417,
                1,
                1
            ],
            [
                418,
                1,
                1
            ],
            [
                490,
                5,
                1
            ]
        ],
        "media": "assets/media/monsters/wizard.svg",
        "bones": 439,
        "canSlayer": true
    },
    {
        "id": 71,
        "name": "Steel Knight",
        "foundIn": 1,
        "hitpoints": 15,
        "attackLevel": 10,
        "strengthLevel": 10,
        "defenceLevel": 10,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 2600,
        "attackType": 0,
        "dropCoins": [
            1,
            10
        ],
        "lootTable": [
            [
                84,
                50,
                1
            ],
            [
                83,
                30,
                1
            ],
            [
                123,
                20,
                1
            ],
            [
                80,
                20,
                1
            ],
            [
                433,
                8,
                1
            ],
            [
                85,
                5,
                1
            ],
            [
                86,
                1,
                1
            ]
        ],
        "media": "assets/media/monsters/steel_knight.svg",
        "bones": 439,
        "canSlayer": true
    },
    {
        "id": 72,
        "name": "Mithril Knight",
        "foundIn": 1,
        "hitpoints": 25,
        "attackLevel": 30,
        "strengthLevel": 30,
        "defenceLevel": 30,
        "rangedLevel": 10,
        "magicLevel": 10,
        "attackBonus": 10,
        "attackBonusRanged": 0,
        "strengthBonus": 0,
        "defenceBonus": 20,
        "defenceBonusRanged": 20,
        "defenceBonusMagic": 0,
        "attackSpeed": 2600,
        "attackType": 0,
        "dropCoins": [
            10,
            50
        ],
        "lootTable": [
            [
                92,
                50,
                1
            ],
            [
                91,
                30,
                1
            ],
            [
                124,
                20,
                1
            ],
            [
                88,
                20,
                1
            ],
            [
                435,
                8,
                1
            ],
            [
                93,
                5,
                1
            ],
            [
                94,
                1,
                1
            ]
        ],
        "lootQty": [
            1
        ],
        "lootChance": 25,
        "media": "assets/media/monsters/mithril_knight.svg",
        "bones": 439,
        "canSlayer": true
    },
    {
        "id": 73,
        "name": "Adamant Knight",
        "foundIn": 1,
        "hitpoints": 60,
        "attackLevel": 60,
        "strengthLevel": 60,
        "defenceLevel": 60,
        "rangedLevel": 60,
        "magicLevel": 60,
        "attackBonus": 50,
        "attackBonusRanged": 0,
        "strengthBonus": 30,
        "defenceBonus": 70,
        "defenceBonusRanged": 70,
        "defenceBonusMagic": 0,
        "attackSpeed": 2600,
        "attackType": 0,
        "dropCoins": [
            30,
            100
        ],
        "lootTable": [
            [
                100,
                5,
                1
            ],
            [
                99,
                5,
                1
            ],
            [
                125,
                5,
                1
            ],
            [
                96,
                5,
                1
            ],
            [
                436,
                5,
                1
            ],
            [
                101,
                5,
                1
            ],
            [
                102,
                5,
                1
            ],
            [
                341,
                1,
                1
            ]
        ],
        "lootChance": 15,
        "media": "assets/media/monsters/adamant_knight.svg",
        "bones": 439,
        "canSlayer": true
    },
    {
        "id": 74,
        "name": "Rune Knight",
        "foundIn": 1,
        "hitpoints": 80,
        "attackLevel": 90,
        "strengthLevel": 90,
        "defenceLevel": 90,
        "rangedLevel": 90,
        "magicLevel": 90,
        "attackBonus": 80,
        "attackBonusRanged": 0,
        "strengthBonus": 60,
        "defenceBonus": 120,
        "defenceBonusRanged": 120,
        "defenceBonusMagic": 0,
        "attackSpeed": 2600,
        "attackType": 0,
        "dropCoins": [
            100,
            250
        ],
        "lootTable": [
            [
                108,
                1,
                1
            ],
            [
                107,
                1,
                1
            ],
            [
                126,
                1,
                1
            ],
            [
                104,
                1,
                1
            ],
            [
                437,
                1,
                1
            ],
            [
                109,
                1,
                1
            ],
            [
                110,
                1,
                1
            ],
            [
                249,
                1,
                1
            ]
        ],
        "lootQty": [
            1
        ],
        "lootChance": 5,
        "media": "assets/media/monsters/rune_knight.svg",
        "bones": 439,
        "canSlayer": true
    },
    {
        "id": 75,
        "name": "Bandit Trainee",
        "foundIn": 1,
        "hitpoints": 20,
        "attackLevel": 20,
        "strengthLevel": 20,
        "defenceLevel": 20,
        "rangedLevel": 20,
        "magicLevel": 1,
        "attackBonus": 0,
        "attackBonusRanged": 15,
        "strengthBonus": 0,
        "strengthBonusRanged": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 2000,
        "attackType": 1,
        "dropCoins": [
            1,
            30
        ],
        "lootTable": [
            [
                262,
                30,
                10
            ],
            [
                263,
                20,
                10
            ],
            [
                264,
                10,
                10
            ],
            [
                530,
                5,
                5
            ]
        ],
        "media": "assets/media/monsters/bandit_trainee.svg",
        "bones": 439,
        "canSlayer": true
    },
    {
        "id": 76,
        "name": "Bandit",
        "foundIn": 1,
        "hitpoints": 40,
        "attackLevel": 20,
        "strengthLevel": 20,
        "defenceLevel": 20,
        "rangedLevel": 60,
        "magicLevel": 10,
        "attackBonus": 0,
        "attackBonusRanged": 30,
        "strengthBonus": 0,
        "strengthBonusRanged": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 2000,
        "attackType": 1,
        "dropCoins": [
            1,
            30
        ],
        "lootTable": [
            [
                264,
                30,
                15
            ],
            [
                265,
                20,
                15
            ],
            [
                266,
                10,
                15
            ],
            [
                531,
                5,
                5
            ],
            [
                368,
                1,
                1
            ]
        ],
        "media": "assets/media/monsters/bandit.svg",
        "bones": 439,
        "canSlayer": true
    },
    {
        "id": 77,
        "name": "Bandit Leader",
        "hitpoints": 150,
        "attackLevel": 60,
        "strengthLevel": 60,
        "defenceLevel": 60,
        "rangedLevel": 130,
        "magicLevel": 30,
        "attackBonus": 0,
        "attackBonusRanged": 75,
        "strengthBonus": 0,
        "strengthBonusRanged": 10,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 2000,
        "attackType": 1,
        "dropCoins": [
            300,
            1000
        ],
        "lootTable": [
            [
                442,
                1,
                1
            ]
        ],
        "media": "assets/media/monsters/bandit.svg",
        "isBoss": true
    },
    {
        "id": 78,
        "name": "Dark Wizard",
        "foundIn": 1,
        "hitpoints": 110,
        "attackLevel": 90,
        "strengthLevel": 90,
        "defenceLevel": 90,
        "rangedLevel": 90,
        "magicLevel": 90,
        "attackBonus": 0,
        "attackBonusMagic": 50,
        "attackBonusRanged": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 70,
        "damageBonusMagic": 5,
        "attackSpeed": 2400,
        "attackType": 2,
        "selectedSpell": 15,
        "dropCoins": [
            100,
            250
        ],
        "lootTable": [
            [
                395,
                250,
                10
            ],
            [
                396,
                100,
                10
            ],
            [
                423,
                1,
                1
            ],
            [
                424,
                1,
                1
            ],
            [
                425,
                1,
                1
            ],
            [
                426,
                1,
                1
            ],
            [
                491,
                5,
                1
            ],
            [
                889,
                20,
                1
            ]
        ],
        "media": "assets/media/monsters/dark_wizard.svg",
        "bones": 441,
        "canSlayer": true
    },
    {
        "id": 79,
        "name": "Master Wizard",
        "foundIn": 1,
        "hitpoints": 60,
        "attackLevel": 20,
        "strengthLevel": 20,
        "defenceLevel": 20,
        "rangedLevel": 20,
        "magicLevel": 75,
        "attackBonus": 0,
        "attackBonusMagic": 40,
        "attackBonusRanged": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 40,
        "damageBonusMagic": 0,
        "attackSpeed": 2400,
        "attackType": 2,
        "selectedSpell": 12,
        "dropCoins": [
            100,
            250
        ],
        "lootTable": [
            [
                390,
                250,
                15
            ],
            [
                395,
                100,
                15
            ],
            [
                396,
                30,
                15
            ],
            [
                403,
                20,
                1
            ],
            [
                815,
                15,
                1
            ],
            [
                404,
                15,
                1
            ],
            [
                405,
                10,
                1
            ],
            [
                406,
                5,
                1
            ],
            [
                888,
                5,
                1
            ]
        ],
        "media": "assets/media/monsters/master_wizard.svg",
        "bones": 439,
        "canSlayer": true
    },
    {
        "id": 80,
        "name": "Elder Wizard",
        "hitpoints": 180,
        "attackLevel": 70,
        "strengthLevel": 70,
        "defenceLevel": 70,
        "rangedLevel": 70,
        "magicLevel": 120,
        "attackBonus": 0,
        "attackBonusMagic": 60,
        "attackBonusRanged": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 80,
        "damageBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 2,
        "selectedSpell": 16,
        "dropCoins": [
            1400,
            3500
        ],
        "lootTable": [
            [
                461,
                1,
                1
            ]
        ],
        "media": "assets/media/monsters/elder_wizard.svg",
        "isBoss": true
    },
    {
        "id": 81,
        "name": "Skeleton",
        "hitpoints": 10,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 1,
        "rangedLevel": 10,
        "magicLevel": 10,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "strengthBonus": 0,
        "strengthBonusRanged": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 2600,
        "attackType": 1,
        "dropCoins": [
            1,
            10
        ],
        "lootTable": [
            [
                277,
                1,
                5
            ]
        ],
        "lootChance": 50,
        "media": "assets/media/monsters/skeleton.svg",
        "bones": 439
    },
    {
        "id": 82,
        "name": "Leech",
        "hitpoints": 20,
        "attackLevel": 20,
        "strengthLevel": 20,
        "defenceLevel": 10,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "strengthBonus": 0,
        "strengthBonusRanged": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 2600,
        "attackType": 0,
        "dropCoins": [
            1,
            10
        ],
        "lootTable": [
            [
                527,
                100,
                1
            ],
            [
                622,
                1,
                1
            ]
        ],
        "media": "assets/media/monsters/leech.svg",
        "bones": 439
    },
    {
        "id": 83,
        "name": "Vicious Serpent",
        "hitpoints": 110,
        "attackLevel": 180,
        "strengthLevel": 240,
        "defenceLevel": 120,
        "rangedLevel": 260,
        "magicLevel": 120,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "attackBonusMagic": 0,
        "strengthBonus": 0,
        "strengthBonusRanged": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 2800,
        "attackType": 1,
        "dropCoins": [
            1,
            10
        ],
        "media": "assets/media/monsters/viscous_serpent.svg",
        "bones": 439
    },
    {
        "id": 84,
        "name": "Fire Spirit",
        "hitpoints": 140,
        "attackLevel": 180,
        "strengthLevel": 240,
        "defenceLevel": 120,
        "rangedLevel": 260,
        "magicLevel": 380,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "attackBonusMagic": 0,
        "strengthBonus": 0,
        "strengthBonusRanged": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "damageBonusMagic": 0,
        "attackSpeed": 3000,
        "setMaxHit": 34,
        "attackType": 2,
        "dropCoins": [
            1,
            10
        ],
        "media": "assets/media/monsters/fire_spirit.svg",
        "bones": 439
    },
    {
        "id": 85,
        "name": "Air Guard",
        "hitpoints": 150,
        "attackLevel": 120,
        "strengthLevel": 120,
        "defenceLevel": 120,
        "rangedLevel": 200,
        "magicLevel": 100,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "attackBonusMagic": 0,
        "strengthBonus": 0,
        "strengthBonusRanged": 35,
        "defenceBonus": 0,
        "defenceBonusRanged": 30,
        "defenceBonusMagic": 0,
        "damageBonusMagic": 0,
        "attackSpeed": 2400,
        "attackType": 1,
        "dropCoins": [
            1,
            10
        ],
        "media": "assets/media/monsters/air_guard.svg",
        "bones": 768,
        "boneQty": 1,
        "hasSpecialAttack": true,
        "specialAttackID": [
            3
        ]
    },
    {
        "id": 86,
        "name": "Air Monster",
        "hitpoints": 220,
        "attackLevel": 210,
        "strengthLevel": 280,
        "defenceLevel": 210,
        "rangedLevel": 100,
        "magicLevel": 100,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "attackBonusMagic": 0,
        "strengthBonus": 30,
        "strengthBonusRanged": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 30,
        "defenceBonusMagic": 0,
        "damageBonusMagic": 0,
        "attackSpeed": 2400,
        "attackType": 0,
        "dropCoins": [
            1,
            10
        ],
        "media": "assets/media/monsters/air_monster.svg",
        "bones": 768,
        "boneQty": 4,
        "hasSpecialAttack": true,
        "specialAttackID": [
            4
        ]
    },
    {
        "id": 87,
        "name": "Air Golem",
        "hitpoints": 300,
        "attackLevel": 300,
        "strengthLevel": 300,
        "defenceLevel": 300,
        "rangedLevel": 520,
        "magicLevel": 200,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "attackBonusMagic": 0,
        "strengthBonus": 0,
        "strengthBonusRanged": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 40,
        "defenceBonusMagic": 0,
        "damageBonusMagic": 0,
        "attackSpeed": 2600,
        "attackType": 1,
        "dropCoins": [
            1,
            10
        ],
        "media": "assets/media/monsters/air_golem.svg",
        "bones": 768,
        "boneQty": 8,
        "hasSpecialAttack": true,
        "specialAttackID": [
            5
        ]
    },
    {
        "id": 88,
        "name": "Aleron",
        "hitpoints": 500,
        "attackLevel": 500,
        "strengthLevel": 500,
        "defenceLevel": 500,
        "rangedLevel": 300,
        "magicLevel": 300,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "attackBonusMagic": 0,
        "strengthBonus": 22,
        "strengthBonusRanged": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 50,
        "defenceBonusMagic": -20,
        "damageBonusMagic": 0,
        "attackSpeed": 2700,
        "attackType": 0,
        "dropCoins": [
            1,
            10
        ],
        "media": "assets/media/monsters/air_guardian2.svg",
        "bones": 768,
        "boneQty": 15,
        "hasSpecialAttack": true,
        "specialAttackID": [
            6
        ]
    },
    {
        "id": 89,
        "name": "Voltaire",
        "hitpoints": 500,
        "attackLevel": 400,
        "strengthLevel": 400,
        "defenceLevel": 400,
        "rangedLevel": 670,
        "magicLevel": 300,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "attackBonusMagic": 0,
        "strengthBonus": 0,
        "strengthBonusRanged": 2,
        "defenceBonus": 0,
        "defenceBonusRanged": 50,
        "defenceBonusMagic": 0,
        "damageBonusMagic": 0,
        "attackSpeed": 2700,
        "attackType": 1,
        "dropCoins": [
            1,
            10
        ],
        "media": "assets/media/monsters/air_guardian1.svg",
        "bones": 768,
        "boneQty": 15,
        "hasSpecialAttack": true,
        "specialAttackID": [
            6
        ]
    },
    {
        "id": 90,
        "name": "Aeris",
        "hitpoints": 1000,
        "attackLevel": 500,
        "strengthLevel": 500,
        "defenceLevel": 450,
        "rangedLevel": 800,
        "magicLevel": 500,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "attackBonusMagic": 0,
        "strengthBonus": 0,
        "strengthBonusRanged": 2,
        "defenceBonus": -13,
        "defenceBonusRanged": 80,
        "defenceBonusMagic": 0,
        "damageBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 1,
        "dropCoins": [
            100000,
            150000
        ],
        "media": "assets/media/monsters/aeris.svg",
        "bones": 768,
        "isBoss": true,
        "hasSpecialAttack": true,
        "specialAttackID": [
            3,
            4,
            5,
            6,
            7
        ],
        "overrideSpecialChances": [
            30,
            25,
            20,
            15,
            10
        ],
        "lootTable": [
            [
                788,
                1,
                1
            ]
        ]
    },
    {
        "id": 91,
        "name": "Water Guard",
        "hitpoints": 180,
        "attackLevel": 120,
        "strengthLevel": 120,
        "defenceLevel": 120,
        "rangedLevel": 100,
        "magicLevel": 200,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "attackBonusMagic": 0,
        "strengthBonus": 0,
        "strengthBonusRanged": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 20,
        "damageBonusMagic": 0,
        "attackSpeed": 2400,
        "setMaxHit": 37,
        "attackType": 2,
        "dropCoins": [
            1,
            10
        ],
        "media": "assets/media/monsters/water_guard.svg",
        "bones": 769,
        "boneQty": 1,
        "hasSpecialAttack": true,
        "specialAttackID": [
            8,
            9
        ]
    },
    {
        "id": 92,
        "name": "Water Monster",
        "hitpoints": 240,
        "attackLevel": 200,
        "strengthLevel": 280,
        "defenceLevel": 200,
        "rangedLevel": 100,
        "magicLevel": 100,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "attackBonusMagic": 0,
        "strengthBonus": 18,
        "strengthBonusRanged": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 30,
        "defenceBonusMagic": 0,
        "damageBonusMagic": 0,
        "attackSpeed": 2600,
        "attackType": 0,
        "dropCoins": [
            1,
            10
        ],
        "media": "assets/media/monsters/water_monster.svg",
        "bones": 769,
        "boneQty": 4,
        "hasSpecialAttack": true,
        "specialAttackID": [
            8,
            10
        ]
    },
    {
        "id": 93,
        "name": "Water Golem",
        "hitpoints": 320,
        "attackLevel": 300,
        "strengthLevel": 300,
        "defenceLevel": 300,
        "rangedLevel": 200,
        "magicLevel": 520,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "attackBonusMagic": 0,
        "strengthBonus": 0,
        "strengthBonusRanged": 0,
        "defenceBonus": -10,
        "defenceBonusRanged": -10,
        "defenceBonusMagic": 40,
        "damageBonusMagic": 0,
        "attackSpeed": 2800,
        "setMaxHit": 57,
        "attackType": 2,
        "dropCoins": [
            1,
            10
        ],
        "media": "assets/media/monsters/water_golem.svg",
        "bones": 769,
        "boneQty": 8,
        "hasSpecialAttack": true,
        "specialAttackID": [
            11
        ]
    },
    {
        "id": 94,
        "name": "Lissia",
        "hitpoints": 550,
        "attackLevel": 480,
        "strengthLevel": 480,
        "defenceLevel": 480,
        "rangedLevel": 300,
        "magicLevel": 500,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "attackBonusMagic": 0,
        "strengthBonus": 0,
        "strengthBonusRanged": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": -20,
        "defenceBonusMagic": 40,
        "damageBonusMagic": 0,
        "attackSpeed": 3000,
        "setMaxHit": 72,
        "attackType": 2,
        "dropCoins": [
            1,
            10
        ],
        "media": "assets/media/monsters/water_guardian1.svg",
        "bones": 769,
        "boneQty": 15,
        "hasSpecialAttack": true,
        "specialAttackID": [
            8,
            12
        ]
    },
    {
        "id": 95,
        "name": "Murtia",
        "hitpoints": 550,
        "attackLevel": 420,
        "strengthLevel": 430,
        "defenceLevel": 420,
        "rangedLevel": 300,
        "magicLevel": 300,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "attackBonusMagic": 0,
        "strengthBonus": 0,
        "strengthBonusRanged": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 50,
        "defenceBonusMagic": -20,
        "damageBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "dropCoins": [
            1,
            10
        ],
        "media": "assets/media/monsters/water_guardian2.svg",
        "bones": 769,
        "boneQty": 15,
        "hasSpecialAttack": true,
        "specialAttackID": [
            8,
            12
        ]
    },
    {
        "id": 96,
        "name": "Glacia",
        "hitpoints": 1100,
        "attackLevel": 600,
        "strengthLevel": 600,
        "defenceLevel": 500,
        "rangedLevel": 300,
        "magicLevel": 600,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "attackBonusMagic": 0,
        "strengthBonus": 0,
        "strengthBonusRanged": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": -5,
        "defenceBonusMagic": 80,
        "damageBonusMagic": 0,
        "setMaxHit": 85,
        "attackSpeed": 3300,
        "attackType": 2,
        "dropCoins": [
            100000,
            150000
        ],
        "media": "assets/media/monsters/glacia.svg",
        "bones": 769,
        "isBoss": true,
        "hasSpecialAttack": true,
        "specialAttackID": [
            9,
            10,
            11,
            12,
            13
        ],
        "overrideSpecialChances": [
            30,
            25,
            20,
            15,
            10
        ],
        "lootTable": [
            [
                789,
                1,
                1
            ]
        ]
    },
    {
        "id": 97,
        "name": "Earth Guard",
        "hitpoints": 200,
        "attackLevel": 120,
        "strengthLevel": 120,
        "defenceLevel": 120,
        "rangedLevel": 200,
        "magicLevel": 100,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "attackBonusMagic": 0,
        "strengthBonus": 0,
        "strengthBonusRanged": 29,
        "defenceBonus": 0,
        "defenceBonusRanged": 20,
        "defenceBonusMagic": 0,
        "damageBonusMagic": 0,
        "attackSpeed": 2800,
        "attackType": 1,
        "dropCoins": [
            1,
            10
        ],
        "media": "assets/media/monsters/earth_guard.svg",
        "bones": 770,
        "boneQty": 1,
        "hasSpecialAttack": true,
        "specialAttackID": [
            14
        ]
    },
    {
        "id": 98,
        "name": "Earth Monster",
        "hitpoints": 240,
        "attackLevel": 200,
        "strengthLevel": 280,
        "defenceLevel": 200,
        "rangedLevel": 100,
        "magicLevel": 100,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "attackBonusMagic": 0,
        "strengthBonus": 28,
        "strengthBonusRanged": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 30,
        "defenceBonusMagic": 0,
        "damageBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "dropCoins": [
            1,
            10
        ],
        "media": "assets/media/monsters/earth_monster.svg",
        "bones": 770,
        "boneQty": 4,
        "hasSpecialAttack": true,
        "specialAttackID": [
            15
        ]
    },
    {
        "id": 99,
        "name": "Earth Golem",
        "hitpoints": 360,
        "attackLevel": 360,
        "strengthLevel": 380,
        "defenceLevel": 360,
        "rangedLevel": 250,
        "magicLevel": 300,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "attackBonusMagic": 0,
        "strengthBonus": 20,
        "strengthBonusRanged": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 40,
        "defenceBonusMagic": 0,
        "damageBonusMagic": 0,
        "attackSpeed": 3200,
        "attackType": 0,
        "dropCoins": [
            1,
            10
        ],
        "media": "assets/media/monsters/earth_golem.svg",
        "bones": 770,
        "boneQty": 8,
        "hasSpecialAttack": true,
        "specialAttackID": [
            16
        ]
    },
    {
        "id": 100,
        "name": "Mistral",
        "hitpoints": 600,
        "attackLevel": 480,
        "strengthLevel": 480,
        "defenceLevel": 480,
        "rangedLevel": 300,
        "magicLevel": 500,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "attackBonusMagic": 0,
        "strengthBonus": 0,
        "strengthBonusRanged": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": -20,
        "defenceBonusMagic": 40,
        "damageBonusMagic": 0,
        "attackSpeed": 3400,
        "setMaxHit": 68,
        "attackType": 2,
        "dropCoins": [
            1,
            10
        ],
        "media": "assets/media/monsters/earth_guardian1.svg",
        "bones": 770,
        "boneQty": 15,
        "hasSpecialAttack": true,
        "specialAttackID": [
            17
        ]
    },
    {
        "id": 101,
        "name": "Ophidia",
        "hitpoints": 600,
        "attackLevel": 420,
        "strengthLevel": 525,
        "defenceLevel": 420,
        "rangedLevel": 300,
        "magicLevel": 300,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "attackBonusMagic": 0,
        "strengthBonus": 18,
        "strengthBonusRanged": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 50,
        "defenceBonusMagic": -20,
        "damageBonusMagic": 0,
        "attackSpeed": 3400,
        "attackType": 0,
        "dropCoins": [
            1,
            10
        ],
        "media": "assets/media/monsters/earth_guardian2.svg",
        "bones": 770,
        "boneQty": 15,
        "hasSpecialAttack": true,
        "specialAttackID": [
            17
        ]
    },
    {
        "id": 102,
        "name": "Terran",
        "hitpoints": 1200,
        "attackLevel": 570,
        "strengthLevel": 570,
        "defenceLevel": 570,
        "rangedLevel": 300,
        "magicLevel": 300,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "attackBonusMagic": 0,
        "strengthBonus": 0,
        "strengthBonusRanged": 0,
        "defenceBonus": 50,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": -20,
        "damageBonusMagic": 0,
        "attackSpeed": 3900,
        "attackType": 0,
        "dropCoins": [
            100000,
            150000
        ],
        "media": "assets/media/monsters/terran.svg",
        "bones": 770,
        "isBoss": true,
        "hasSpecialAttack": true,
        "specialAttackID": [
            14,
            15,
            16,
            17,
            18
        ],
        "overrideSpecialChances": [
            30,
            25,
            20,
            15,
            10
        ],
        "lootTable": [
            [
                790,
                1,
                1
            ]
        ]
    },
    {
        "id": 103,
        "name": "Fire Guard",
        "hitpoints": 170,
        "attackLevel": 140,
        "strengthLevel": 160,
        "defenceLevel": 140,
        "rangedLevel": 100,
        "magicLevel": 100,
        "attackBonus": 10,
        "attackBonusRanged": 0,
        "attackBonusMagic": 0,
        "strengthBonus": 70,
        "strengthBonusRanged": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 20,
        "defenceBonusMagic": 0,
        "damageBonusMagic": 0,
        "attackSpeed": 2600,
        "attackType": 0,
        "dropCoins": [
            1,
            10
        ],
        "media": "assets/media/monsters/fire_guard.svg",
        "bones": 771,
        "boneQty": 1,
        "hasSpecialAttack": true,
        "specialAttackID": [
            19
        ]
    },
    {
        "id": 104,
        "name": "Fire Monster",
        "hitpoints": 230,
        "attackLevel": 200,
        "strengthLevel": 280,
        "defenceLevel": 200,
        "rangedLevel": 100,
        "magicLevel": 100,
        "attackBonus": 10,
        "attackBonusRanged": 0,
        "attackBonusMagic": 0,
        "strengthBonus": 40,
        "strengthBonusRanged": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 30,
        "defenceBonusMagic": 0,
        "damageBonusMagic": 0,
        "attackSpeed": 2800,
        "attackType": 0,
        "dropCoins": [
            1,
            10
        ],
        "media": "assets/media/monsters/fire_monster.svg",
        "bones": 771,
        "boneQty": 4,
        "hasSpecialAttack": true,
        "specialAttackID": [
            20
        ]
    },
    {
        "id": 105,
        "name": "Fire Golem",
        "hitpoints": 310,
        "attackLevel": 300,
        "strengthLevel": 300,
        "defenceLevel": 300,
        "rangedLevel": 200,
        "magicLevel": 500,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "attackBonusMagic": 0,
        "strengthBonus": 0,
        "strengthBonusRanged": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 20,
        "damageBonusMagic": 0,
        "attackSpeed": 3000,
        "setMaxHit": 58,
        "attackType": 2,
        "dropCoins": [
            1,
            10
        ],
        "media": "assets/media/monsters/fire_golem.svg",
        "bones": 771,
        "boneQty": 8,
        "hasSpecialAttack": true,
        "specialAttackID": [
            21
        ]
    },
    {
        "id": 106,
        "name": "Pyra",
        "hitpoints": 550,
        "attackLevel": 480,
        "strengthLevel": 480,
        "defenceLevel": 480,
        "rangedLevel": 300,
        "magicLevel": 500,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "attackBonusMagic": 0,
        "strengthBonus": 0,
        "strengthBonusRanged": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": -20,
        "defenceBonusMagic": 40,
        "damageBonusMagic": 0,
        "attackSpeed": 3300,
        "setMaxHit": 75,
        "attackType": 2,
        "dropCoins": [
            1,
            10
        ],
        "media": "assets/media/monsters/fire_guardian1.svg",
        "bones": 771,
        "boneQty": 15,
        "hasSpecialAttack": true,
        "specialAttackID": [
            22
        ]
    },
    {
        "id": 107,
        "name": "Ignis",
        "hitpoints": 550,
        "attackLevel": 480,
        "strengthLevel": 530,
        "defenceLevel": 480,
        "rangedLevel": 300,
        "magicLevel": 300,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "attackBonusMagic": 0,
        "strengthBonus": 25,
        "strengthBonusRanged": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": 50,
        "defenceBonusMagic": -20,
        "damageBonusMagic": 0,
        "attackSpeed": 3300,
        "attackType": 0,
        "dropCoins": [
            1,
            10
        ],
        "media": "assets/media/monsters/fire_guardian2.svg",
        "bones": 771,
        "boneQty": 15,
        "hasSpecialAttack": true,
        "specialAttackID": [
            22
        ]
    },
    {
        "id": 108,
        "name": "Ragnar",
        "hitpoints": 1100,
        "attackLevel": 600,
        "strengthLevel": 600,
        "defenceLevel": 600,
        "rangedLevel": 300,
        "magicLevel": 400,
        "attackBonus": 0,
        "attackBonusRanged": 0,
        "attackBonusMagic": 10,
        "strengthBonus": 0,
        "strengthBonusRanged": 0,
        "defenceBonus": 0,
        "defenceBonusRanged": -20,
        "defenceBonusMagic": 50,
        "damageBonusMagic": 0,
        "attackSpeed": 3600,
        "setMaxHit": 80,
        "attackType": 2,
        "dropCoins": [
            100000,
            150000
        ],
        "media": "assets/media/monsters/ragnar.svg",
        "bones": 771,
        "isBoss": true,
        "hasSpecialAttack": true,
        "specialAttackID": [
            19,
            20,
            21,
            22,
            23
        ],
        "overrideSpecialChances": [
            30,
            25,
            20,
            15,
            10
        ],
        "lootTable": [
            [
                791,
                1,
                1
            ]
        ]
    },
    {
        "id": 109,
        "name": "Elder Dragon",
        "hitpoints": 240,
        "attackLevel": 200,
        "strengthLevel": 300,
        "defenceLevel": 200,
        "rangedLevel": 180,
        "magicLevel": 180,
        "attackBonus": 60,
        "strengthBonus": 30,
        "defenceBonus": 40,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "dropCoins": [
            3000,
            10000
        ],
        "media": "assets/media/monsters/elder_dragon.svg",
        "lootTable": [
            [
                813,
                1,
                1
            ]
        ],
        "bones": 440,
        "isBoss": true
    },
    {
        "id": 110,
        "name": "Furious Horned Elite",
        "hitpoints": 300,
        "attackLevel": 170,
        "strengthLevel": 170,
        "defenceLevel": 170,
        "rangedLevel": 250,
        "magicLevel": 80,
        "attackBonus": 0,
        "attackBonusRanged": 60,
        "strengthBonus": 0,
        "strengthBonusRanged": 30,
        "defenceBonus": 0,
        "defenceBonusRanged": 70,
        "defenceBonusMagic": 70,
        "attackSpeed": 2600,
        "attackType": 1,
        "dropCoins": [
            250,
            1000
        ],
        "lootTable": [
            [
                712,
                400,
                30
            ],
            [
                704,
                300,
                30
            ],
            [
                619,
                100,
                4
            ],
            [
                807,
                1,
                1
            ]
        ],
        "lootChance": 75,
        "media": "assets/media/monsters/furious_horned_elite.svg",
        "bones": 506,
        "canSlayer": true,
        "slayerXP": 150
    },
    {
        "id": 111,
        "name": "Plant",
        "foundIn": 1,
        "hitpoints": 2,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 1,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": -47,
        "strengthBonus": -42,
        "defenceBonus": -42,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 2400,
        "attackType": 0,
        "dropCoins": [
            1,
            5
        ],
        "lootTable": [
            [
                151,
                1,
                1
            ]
        ],
        "lootChance": 75,
        "media": "assets/media/monsters/plant.svg",
        "bones": null,
        "canSlayer": true
    },
    {
        "name": "Miolite Sprig",
        "media": "assets/media/monsters/miolite_sprig.png",
        "hitpoints": 40,
        "attackLevel": 45,
        "strengthLevel": 50,
        "defenceLevel": 55,
        "rangedLevel": 1,
        "magicLevel": 30,
        "attackBonus": 40,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "attackBonusRanged": 0,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": 15,
        "attackBonusMagic": 0,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 2800,
        "attackType": 0,
        "setMaxHit": null,
        "dropCoins": [
            0,
            1
        ],
        "lootTable": [
            [
                681,
                1,
                1
            ]
        ],
        "lootChance": 100,
        "bones": 439,
        "canSlayer": false,
        "hasSpecialAttack": true,
        "specialAttackID": [
            24
        ]
    },
    {
        "name": "Miolite Trio",
        "media": "assets/media/monsters/miolite_trio.png",
        "hitpoints": 55,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 100,
        "rangedLevel": 1,
        "magicLevel": 130,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "attackBonusRanged": 0,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": -27,
        "attackBonusMagic": 0,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 10,
        "attackSpeed": 3000,
        "attackType": 2,
        "setMaxHit": 12.1,
        "dropCoins": [
            0,
            1
        ],
        "lootTable": [
            [
                681,
                1,
                1
            ]
        ],
        "lootChance": 100,
        "bones": 439,
        "canSlayer": false,
        "hasSpecialAttack": true,
        "specialAttackID": [
            24
        ]
    },
    {
        "name": "Miolite Warden",
        "media": "assets/media/monsters/miolite_warden.png",
        "hitpoints": 75,
        "attackLevel": 110,
        "strengthLevel": 130,
        "defenceLevel": 110,
        "rangedLevel": 1,
        "magicLevel": 50,
        "attackBonus": 29,
        "strengthBonus": 0,
        "defenceBonus": 35,
        "attackBonusRanged": 0,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": 12,
        "attackBonusMagic": 0,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 10,
        "attackSpeed": 2800,
        "attackType": 0,
        "setMaxHit": null,
        "dropCoins": [
            450,
            4000
        ],
        "lootTable": [
            [
                681,
                1,
                1
            ]
        ],
        "lootChance": 100,
        "bones": 439,
        "canSlayer": false,
        "hasSpecialAttack": true,
        "specialAttackID": [
            24
        ],
        "isBoss": true
    },
    {
        "name": "Miolite Monarch",
        "media": "assets/media/monsters/miolite_monarch.png",
        "hitpoints": 180,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 175,
        "rangedLevel": 1,
        "magicLevel": 185,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": -8,
        "attackBonusRanged": 0,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": -15,
        "attackBonusMagic": 20,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 28,
        "attackSpeed": 3000,
        "attackType": 2,
        "setMaxHit": 18.5,
        "dropCoins": [
            0,
            1
        ],
        "lootTable": [
            [
                939,
                1,
                1
            ]
        ],
        "lootChance": 100,
        "bones": 439,
        "canSlayer": false,
        "hasSpecialAttack": true,
        "specialAttackID": [
            25
        ],
        "isBoss": true
    },
    {
        "name": "Druid",
        "media": "assets/media/monsters/druid.svg",
        "hitpoints": 35,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 55,
        "rangedLevel": 1,
        "magicLevel": 85,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "attackBonusRanged": 0,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": 30,
        "attackBonusMagic": 5,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 40,
        "attackSpeed": 3000,
        "attackType": 2,
        "setMaxHit": 8.1,
        "dropCoins": [
            30,
            120
        ],
        "lootTable": [
            [
                519,
                8,
                3
            ],
            [
                520,
                6,
                3
            ],
            [
                521,
                3,
                3
            ],
            [
                522,
                2,
                3
            ],
            [
                523,
                1,
                3
            ],
            [
                821,
                8,
                10
            ]
        ],
        "lootChance": 100,
        "bones": 439,
        "canSlayer": true,
        "slayerXP": 17
    },
    {
        "name": "Thief",
        "media": "assets/media/monsters/thief.svg",
        "hitpoints": 55,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 105,
        "rangedLevel": 95,
        "magicLevel": 1,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "attackBonusRanged": 0,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": 11,
        "attackBonusMagic": 0,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 60,
        "attackSpeed": 1800,
        "attackType": 1,
        "setMaxHit": null,
        "dropCoins": [
            40,
            160
        ],
        "lootTable": [
            [
                913,
                1,
                1
            ],
            [
                705,
                100,
                8
            ],
            [
                706,
                80,
                8
            ],
            [
                707,
                50,
                8
            ],
            [
                708,
                30,
                8
            ],
            [
                709,
                20,
                8
            ],
            [
                710,
                10,
                8
            ]
        ],
        "lootChance": 100,
        "bones": 439,
        "canSlayer": true,
        "slayerXP": 27
    },
    {
        "name": "Shaman",
        "media": "assets/media/monsters/shaman.svg",
        "hitpoints": 75,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 85,
        "rangedLevel": 1,
        "magicLevel": 110,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "attackBonusRanged": 0,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": 20,
        "attackBonusMagic": 8,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 30,
        "attackSpeed": 3000,
        "attackType": 2,
        "setMaxHit": 13.7,
        "dropCoins": [
            45,
            190
        ],
        "lootTable": [
            [
                395,
                200,
                10
            ],
            [
                914,
                1,
                1
            ]
        ],
        "lootChance": 100,
        "bones": 439,
        "canSlayer": true,
        "slayerXP": 37
    },
    {
        "name": "Necromancer",
        "media": "assets/media/monsters/necromancer.svg",
        "hitpoints": 95,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 105,
        "rangedLevel": 1,
        "magicLevel": 125,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 10,
        "attackBonusRanged": 0,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": 10,
        "attackBonusMagic": 20,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 33,
        "attackSpeed": 3000,
        "attackType": 2,
        "setMaxHit": 16.3,
        "dropCoins": [
            55,
            220
        ],
        "lootTable": [
            [
                396,
                200,
                10
            ],
            [
                915,
                1,
                1
            ]
        ],
        "lootChance": 100,
        "bones": 439,
        "canSlayer": true,
        "slayerXP": 47
    },
    {
        "name": "Elementalist",
        "media": "assets/media/monsters/elementalist.svg",
        "hitpoints": 125,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 130,
        "rangedLevel": 1,
        "magicLevel": 220,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 16,
        "attackBonusRanged": 0,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": 10,
        "attackBonusMagic": 20,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 20,
        "attackSpeed": 3000,
        "attackType": 2,
        "setMaxHit": 24,
        "dropCoins": [
            85,
            340
        ],
        "lootTable": [
            [
                822,
                200,
                10
            ],
            [
                916,
                1,
                1
            ]
        ],
        "lootChance": 100,
        "bones": 439,
        "canSlayer": true,
        "slayerXP": 62
    },
    {
        "name": "Turkul Riders",
        "media": "assets/media/monsters/turkul_riders.svg",
        "hitpoints": 55,
        "attackLevel": 30,
        "strengthLevel": 60,
        "defenceLevel": 55,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 40,
        "strengthBonus": 0,
        "defenceBonus": 25,
        "attackBonusRanged": 0,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": 0,
        "attackBonusMagic": 0,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 15,
        "attackSpeed": 2800,
        "attackType": 0,
        "setMaxHit": null,
        "dropCoins": [
            25,
            110
        ],
        "lootTable": [
            [
                92,
                75,
                1
            ],
            [
                100,
                40,
                1
            ],
            [
                108,
                20,
                1
            ],
            [
                917,
                1,
                1
            ]
        ],
        "lootChance": 100,
        "bones": 439,
        "canSlayer": true,
        "slayerXP": 27
    },
    {
        "name": "Turkul Archers",
        "media": "assets/media/monsters/turkul_archers.svg",
        "hitpoints": 70,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 75,
        "rangedLevel": 90,
        "magicLevel": 1,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 15,
        "attackBonusRanged": 38,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": 60,
        "attackBonusMagic": 0,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 165,
        "attackSpeed": 2400,
        "attackType": 1,
        "setMaxHit": null,
        "dropCoins": [
            40,
            160
        ],
        "lootTable": [
            [
                465,
                75,
                1
            ],
            [
                466,
                50,
                1
            ],
            [
                467,
                20,
                1
            ],
            [
                918,
                1,
                1
            ]
        ],
        "lootChance": 100,
        "bones": 439,
        "canSlayer": true,
        "slayerXP": 35
    },
    {
        "name": "Turkul Throwers",
        "media": "assets/media/monsters/turkul_throwers.svg",
        "hitpoints": 80,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 80,
        "rangedLevel": 110,
        "magicLevel": 1,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 27,
        "attackBonusRanged": 18,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": 40,
        "attackBonusMagic": 0,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 130,
        "attackSpeed": 2000,
        "attackType": 1,
        "setMaxHit": null,
        "dropCoins": [
            45,
            180
        ],
        "lootTable": [
            [
                697,
                6,
                10
            ],
            [
                698,
                5,
                10
            ],
            [
                699,
                4,
                10
            ],
            [
                700,
                3,
                10
            ],
            [
                701,
                2,
                10
            ],
            [
                702,
                1,
                10
            ]
        ],
        "lootChance": 100,
        "bones": 439,
        "canSlayer": true,
        "slayerXP": 40
    },
    {
        "name": "Turkul Giant",
        "media": "assets/media/monsters/turkul_giant.svg",
        "hitpoints": 120,
        "attackLevel": 85,
        "strengthLevel": 135,
        "defenceLevel": 95,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 35,
        "strengthBonus": 15,
        "defenceBonus": 60,
        "attackBonusRanged": 0,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": 40,
        "attackBonusMagic": 0,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 20,
        "attackSpeed": 3200,
        "attackType": 0,
        "setMaxHit": null,
        "dropCoins": [
            60,
            250
        ],
        "lootTable": [
            [
                130,
                100,
                1
            ],
            [
                436,
                70,
                1
            ],
            [
                437,
                50,
                1
            ],
            [
                438,
                5,
                1
            ],
            [
                919,
                1,
                1
            ]
        ],
        "lootChance": 100,
        "bones": 506,
        "canSlayer": true,
        "slayerXP": 60
    },
    {
        "name": "Turkul General",
        "media": "assets/media/monsters/turkul_general.svg",
        "hitpoints": 145,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 160,
        "rangedLevel": 180,
        "magicLevel": 70,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 5,
        "attackBonusRanged": 10,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": 20,
        "attackBonusMagic": 0,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 40,
        "attackSpeed": 2800,
        "attackType": 1,
        "setMaxHit": null,
        "dropCoins": [
            80,
            320
        ],
        "lootTable": [
            [
                131,
                100,
                1
            ],
            [
                266,
                70,
                10
            ],
            [
                267,
                50,
                10
            ],
            [
                268,
                5,
                10
            ],
            [
                920,
                1,
                1
            ]
        ],
        "lootChance": 100,
        "bones": 439,
        "canSlayer": true,
        "slayerXP": 72
    },
    {
        "name": "Sand Beast",
        "media": "assets/media/monsters/sand_beast.svg",
        "hitpoints": 185,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 175,
        "rangedLevel": 220,
        "magicLevel": 100,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 5,
        "attackBonusRanged": 15,
        "strengthBonusRanged": 5,
        "defenceBonusRanged": 40,
        "attackBonusMagic": 0,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 40,
        "attackSpeed": 3000,
        "attackType": 1,
        "setMaxHit": null,
        "dropCoins": [
            95,
            380
        ],
        "lootTable": [
            [
                25,
                150,
                1
            ],
            [
                921,
                1,
                1
            ]
        ],
        "lootChance": 80,
        "bones": 506,
        "canSlayer": true,
        "slayerXP": 92,
        "hasSpecialAttack": true,
        "specialAttackID": [
            26
        ]
    },
    {
        "name": "Rancora Spider",
        "media": "assets/media/monsters/rancora_spider.svg",
        "hitpoints": 430,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 200,
        "rangedLevel": 290,
        "magicLevel": 130,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 15,
        "attackBonusRanged": 17,
        "strengthBonusRanged": 20,
        "defenceBonusRanged": 40,
        "attackBonusMagic": 0,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 55,
        "attackSpeed": 2600,
        "attackType": 1,
        "setMaxHit": null,
        "dropCoins": [
            150,
            550
        ],
        "lootTable": [
            [
                642,
                200,
                1
            ],
            [
                643,
                150,
                1
            ],
            [
                644,
                100,
                1
            ],
            [
                922,
                1,
                1
            ]
        ],
        "lootChance": 100,
        "bones": 506,
        "canSlayer": true,
        "slayerXP": 215,
        "hasSpecialAttack": true,
        "specialAttackID": [
            27
        ]
    },
    {
        "name": "Elder Vampire",
        "media": "assets/media/monsters/elder_vampire.svg",
        "hitpoints": 490,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 160,
        "rangedLevel": 305,
        "magicLevel": 160,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 20,
        "attackBonusRanged": 35,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": 80,
        "attackBonusMagic": 0,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 60,
        "attackSpeed": 2600,
        "attackType": 1,
        "setMaxHit": null,
        "dropCoins": [
            155,
            620
        ],
        "lootTable": [
            [
                28,
                200,
                1
            ],
            [
                503,
                200,
                20
            ],
            [
                923,
                1,
                1
            ]
        ],
        "lootChance": 100,
        "bones": 506,
        "canSlayer": true,
        "slayerXP": 245,
        "hasSpecialAttack": true,
        "specialAttackID": [
            28
        ]
    },
    {
        "name": "Cursed Maiden",
        "media": "assets/media/monsters/cursed_maiden.svg",
        "hitpoints": 540,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 160,
        "rangedLevel": 1,
        "magicLevel": 330,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 80,
        "attackBonusRanged": 0,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": 30,
        "attackBonusMagic": 15,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 35,
        "attackSpeed": 3000,
        "attackType": 2,
        "setMaxHit": 45,
        "dropCoins": [
            69,
            690
        ],
        "lootTable": [
            [
                823,
                200,
                20
            ],
            [
                821,
                250,
                20
            ],
            [
                492,
                2,
                1
            ],
            [
                924,
                1,
                1
            ]
        ],
        "lootChance": 100,
        "bones": 439,
        "canSlayer": true,
        "slayerXP": 270,
        "hasSpecialAttack": true,
        "specialAttackID": [
            29
        ]
    },
    {
        "name": "Bounty Hunter",
        "media": "assets/media/monsters/bounty_hunter.svg",
        "hitpoints": 580,
        "attackLevel": 255,
        "strengthLevel": 230,
        "defenceLevel": 185,
        "rangedLevel": 150,
        "magicLevel": 150,
        "attackBonus": 48,
        "strengthBonus": 20,
        "defenceBonus": 80,
        "attackBonusRanged": 0,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": 70,
        "attackBonusMagic": 0,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 25,
        "attackSpeed": 2400,
        "attackType": 0,
        "setMaxHit": null,
        "dropCoins": [
            170,
            700
        ],
        "lootTable": [
            [
                247,
                200,
                1
            ],
            [
                248,
                200,
                1
            ],
            [
                249,
                50,
                1
            ],
            [
                114,
                10,
                1
            ],
            [
                925,
                1,
                1
            ]
        ],
        "lootChance": 100,
        "bones": 439,
        "canSlayer": true,
        "slayerXP": 290,
        "hasSpecialAttack": true,
        "specialAttackID": [
            30
        ]
    },
    {
        "name": "Chaotic Greater Dragon",
        "media": "assets/media/monsters/chaotic_greater_dragon.png",
        "hitpoints": 710,
        "attackLevel": 295,
        "strengthLevel": 350,
        "defenceLevel": 240,
        "rangedLevel": 1,
        "magicLevel": 180,
        "attackBonus": 40,
        "strengthBonus": 20,
        "defenceBonus": 60,
        "attackBonusRanged": 0,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": 66,
        "attackBonusMagic": 0,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 20,
        "attackSpeed": 2800,
        "attackType": 0,
        "setMaxHit": null,
        "dropCoins": [
            190,
            800
        ],
        "lootTable": [
            [
                62,
                350,
                10
            ],
            [
                926,
                1,
                1
            ]
        ],
        "lootChance": 100,
        "bones": 440,
        "canSlayer": true,
        "slayerXP": 355,
        "hasSpecialAttack": true,
        "specialAttackID": [
            31,
            32
        ]
    },
    {
        "name": "Hunting Greater Dragon",
        "media": "assets/media/monsters/hunting_greater_dragon.png",
        "hitpoints": 680,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 215,
        "rangedLevel": 395,
        "magicLevel": 180,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 10,
        "attackBonusRanged": 30,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": 55,
        "attackBonusMagic": 0,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 30,
        "attackSpeed": 2600,
        "attackType": 1,
        "setMaxHit": null,
        "dropCoins": [
            69,
            420
        ],
        "lootTable": [
            [
                935,
                350,
                50
            ],
            [
                949,
                1,
                1
            ]
        ],
        "lootChance": 100,
        "bones": 440,
        "canSlayer": true,
        "slayerXP": 340,
        "hasSpecialAttack": true,
        "specialAttackID": [
            31,
            33
        ]
    },
    {
        "name": "Wicked Greater Dragon",
        "media": "assets/media/monsters/wicked_greater_dragon.png",
        "hitpoints": 650,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 215,
        "rangedLevel": 1,
        "magicLevel": 350,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 20,
        "attackBonusRanged": 0,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": 0,
        "attackBonusMagic": 20,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 25,
        "attackSpeed": 3000,
        "attackType": 2,
        "setMaxHit": 47.7,
        "dropCoins": [
            220,
            880
        ],
        "lootTable": [
            [
                704,
                350,
                25
            ],
            [
                62,
                100,
                25
            ],
            [
                927,
                1,
                1
            ]
        ],
        "lootChance": 100,
        "bones": 440,
        "canSlayer": true,
        "slayerXP": 325,
        "hasSpecialAttack": true,
        "specialAttackID": [
            31,
            34
        ]
    },
    {
        "name": "Umbora",
        "media": "assets/media/monsters/umbora.svg",
        "hitpoints": 780,
        "attackLevel": 380,
        "strengthLevel": 450,
        "defenceLevel": 380,
        "rangedLevel": 1,
        "magicLevel": 250,
        "attackBonus": 47,
        "strengthBonus": 40,
        "defenceBonus": 40,
        "attackBonusRanged": 17,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": 35,
        "attackBonusMagic": 0,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 2800,
        "attackType": 0,
        "setMaxHit": null,
        "dropCoins": [
            280,
            1100
        ],
        "lootTable": [
            [
                929,
                1,
                1
            ]
        ],
        "lootChance": 2,
        "bones": 441,
        "canSlayer": true,
        "slayerXP": 390,
        "hasSpecialAttack": true,
        "specialAttackID": [
            35,
            36
        ]
    },
    {
        "name": "Rokken",
        "media": "assets/media/monsters/rokken.svg",
        "hitpoints": 810,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 330,
        "rangedLevel": 600,
        "magicLevel": 250,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": -10,
        "attackBonusRanged": 14,
        "strengthBonusRanged": 15,
        "defenceBonusRanged": 80,
        "attackBonusMagic": 0,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 40,
        "attackSpeed": 3200,
        "attackType": 1,
        "setMaxHit": null,
        "dropCoins": [
            290,
            1300
        ],
        "lootTable": [
            [
                933,
                1,
                1
            ]
        ],
        "lootChance": 2,
        "bones": 441,
        "canSlayer": true,
        "slayerXP": 405,
        "hasSpecialAttack": true,
        "specialAttackID": [
            35,
            37
        ]
    },
    {
        "name": "Ku-tul",
        "media": "assets/media/monsters/ku-tul.svg",
        "hitpoints": 840,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 340,
        "rangedLevel": 1,
        "magicLevel": 650,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 30,
        "attackBonusRanged": 0,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": 0,
        "attackBonusMagic": -12,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 30,
        "attackSpeed": 3000,
        "attackType": 2,
        "setMaxHit": 1,
        "dropCoins": [
            310,
            1500
        ],
        "lootTable": [
            [
                931,
                1,
                1
            ]
        ],
        "lootChance": 2,
        "bones": 441,
        "canSlayer": true,
        "slayerXP": 420,
        "hasSpecialAttack": true,
        "specialAttackID": [
            35,
            38
        ]
    },
    {
        "name": "Paladin",
        "media": "assets/media/monsters/paladin.svg",
        "hitpoints": 120,
        "attackLevel": 120,
        "strengthLevel": 110,
        "defenceLevel": 150,
        "rangedLevel": 1,
        "magicLevel": 1,
        "attackBonus": 20,
        "strengthBonus": 16,
        "defenceBonus": 20,
        "attackBonusRanged": 0,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": 0,
        "attackBonusMagic": 0,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 57,
        "attackSpeed": 2800,
        "attackType": 0,
        "setMaxHit": null,
        "dropCoins": [
            70,
            300
        ],
        "lootTable": [
            [
                59,
                100,
                3
            ],
            [
                60,
                50,
                3
            ],
            [
                61,
                20,
                3
            ],
            [
                936,
                1,
                1
            ]
        ],
        "lootChance": 100,
        "bones": 500,
        "canSlayer": true,
        "slayerXP": 60
    },
    {
        "name": "Priest",
        "media": "assets/media/monsters/priest.svg",
        "hitpoints": 145,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 135,
        "rangedLevel": 1,
        "magicLevel": 175,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "attackBonusRanged": 0,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": 0,
        "attackBonusMagic": 0,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 10,
        "attackSpeed": 3000,
        "attackType": 2,
        "setMaxHit": 21.3,
        "dropCoins": [
            75,
            300
        ],
        "lootTable": [
            [
                820,
                150,
                10
            ],
            [
                937,
                1,
                1
            ]
        ],
        "lootChance": 100,
        "bones": 500,
        "canSlayer": true,
        "slayerXP": 72
    },
    {
        "name": "Wandering Bard",
        "media": "assets/media/monsters/wandering_bard.svg",
        "hitpoints": 50,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 90,
        "rangedLevel": 1,
        "magicLevel": 70,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "attackBonusRanged": 0,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": 0,
        "attackBonusMagic": 20,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 10,
        "attackSpeed": 3000,
        "attackType": 2,
        "setMaxHit": 11.8,
        "dropCoins": [
            69,
            690
        ],
        "lootTable": [
            [
                938,
                1,
                1
            ]
        ],
        "lootChance": 1,
        "bones": 439,
        "canSlayer": true,
        "slayerXP": 25
    },
    {
        "name": "Cerberus",
        "media": "assets/media/monsters/cerberus.svg",
        "hitpoints": 75,
        "attackLevel": 140,
        "strengthLevel": 140,
        "defenceLevel": 120,
        "rangedLevel": 1,
        "magicLevel": 0,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 5,
        "attackBonusRanged": 0,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": 5,
        "attackBonusMagic": 0,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 2600,
        "attackType": 0,
        "setMaxHit": null,
        "dropCoins": [
            0,
            1
        ],
        "lootTable": [
            [
                681,
                1,
                1
            ]
        ],
        "lootChance": 100,
        "bones": 439,
        "canSlayer": false
    },
    {
        "name": "Fearful Eye",
        "media": "assets/media/monsters/fearful_eye.svg",
        "hitpoints": 120,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 135,
        "rangedLevel": 1,
        "magicLevel": 220,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 12,
        "attackBonusRanged": 0,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": 0,
        "attackBonusMagic": -15,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 2,
        "setMaxHit": 23.6,
        "dropCoins": [
            0,
            1
        ],
        "lootTable": [
            [
                681,
                1,
                1
            ]
        ],
        "lootChance": 100,
        "bones": 439,
        "canSlayer": false
    },
    {
        "name": "Red Devil",
        "media": "assets/media/monsters/red_devil.svg",
        "hitpoints": 160,
        "attackLevel": 240,
        "strengthLevel": 270,
        "defenceLevel": 220,
        "rangedLevel": 1,
        "magicLevel": 50,
        "attackBonus": 0,
        "strengthBonus": 5,
        "defenceBonus": 12,
        "attackBonusRanged": 0,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": 0,
        "attackBonusMagic": 0,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "setMaxHit": null,
        "dropCoins": [
            0,
            1
        ],
        "lootTable": [
            [
                681,
                1,
                1
            ]
        ],
        "lootChance": 100,
        "bones": 439,
        "canSlayer": false
    },
    {
        "name": "Phoenix",
        "media": "assets/media/monsters/phoenix.svg",
        "hitpoints": 210,
        "attackLevel": 1,
        "strengthLevel": 1,
        "defenceLevel": 300,
        "rangedLevel": 1,
        "magicLevel": 350,
        "attackBonus": 0,
        "strengthBonus": 5,
        "defenceBonus": 12,
        "attackBonusRanged": 0,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": -20,
        "attackBonusMagic": -10,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 2800,
        "attackType": 2,
        "setMaxHit": 37.1,
        "dropCoins": [
            0,
            1
        ],
        "lootTable": [
            [
                681,
                1,
                1
            ]
        ],
        "lootChance": 100,
        "bones": 439,
        "canSlayer": false,
        "hasPassive": true,
        "passiveID": [
            1
        ]
    },
    {
        "name": "Incendius",
        "media": "assets/media/monsters/incendius.svg",
        "hitpoints": 270,
        "attackLevel": 400,
        "strengthLevel": 380,
        "defenceLevel": 300,
        "rangedLevel": 1,
        "magicLevel": 100,
        "attackBonus": 0,
        "strengthBonus": 5,
        "defenceBonus": 25,
        "attackBonusRanged": 0,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": 20,
        "attackBonusMagic": -10,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "setMaxHit": null,
        "dropCoins": [
            0,
            1
        ],
        "lootTable": [
            [
                681,
                1,
                1
            ]
        ],
        "lootChance": 100,
        "bones": 439,
        "canSlayer": false,
        "hasSpecialAttack": true,
        "specialAttackID": [
            39
        ]
    },
    {
        "name": "Prat, the Guardian of Secrets",
        "media": "assets/media/monsters/prat_leader.svg",
        "hitpoints": 420,
        "attackLevel": 320,
        "strengthLevel": 480,
        "defenceLevel": 400,
        "rangedLevel": 500,
        "magicLevel": 300,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": -24,
        "attackBonusRanged": 5,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": 0,
        "attackBonusMagic": 0,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 1,
        "setMaxHit": null,
        "dropCoins": [
            0,
            1
        ],
        "lootTable": [
            [
                681,
                1,
                1
            ]
        ],
        "lootChance": 100,
        "bones": 439,
        "canSlayer": false,
        "isBoss": true,
        "hasSpecialAttack": true,
        "specialAttackID": [
            0,
            40
        ]
    },
    {
        "name": "Malcs, the Leader of Dragons",
        "media": "assets/media/monsters/malcs_leader.svg",
        "hitpoints": 690,
        "attackLevel": 690,
        "strengthLevel": 700,
        "defenceLevel": 400,
        "rangedLevel": 500,
        "magicLevel": 540,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "attackBonusRanged": 0,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": 0,
        "attackBonusMagic": 0,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3200,
        "attackType": 0,
        "setMaxHit": null,
        "dropCoins": [
            100000,
            150000
        ],
        "lootTable": [
            [
                940,
                1,
                1
            ]
        ],
        "lootChance": 100,
        "bones": 441,
        "canSlayer": false,
        "isBoss": true,
        "hasSpecialAttack": true,
        "specialAttackID": [
            41,
            42,
            43,
            44
        ]
    },
    {
        "name": "Mysterious Figure - Phase 1",
        "media": "assets/media/monsters/ahrenia.svg",
        "hitpoints": 990,
        "attackLevel": 750,
        "strengthLevel": 750,
        "defenceLevel": 750,
        "rangedLevel": 750,
        "magicLevel": 750,
        "attackBonus": 4,
        "strengthBonus": 0,
        "defenceBonus": 0,
        "attackBonusRanged": 0,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": 5,
        "attackBonusMagic": 0,
        "damageBonusMagic": 0,
        "defenceBonusMagic": -37,
        "damageReduction": 40,
        "attackSpeed": 2600,
        "attackType": 0,
        "setMaxHit": null,
        "dropCoins": [
            0,
            1
        ],
        "lootTable": [
            [
                681,
                1,
                1
            ]
        ],
        "lootChance": 100,
        "bones": 439,
        "canSlayer": false,
        "isBoss": true,
        "hasSpecialAttack": true,
        "specialAttackID": [
            45,
            46,
            47
        ],
        "ignoreCompletion": true,
        "hasPassive": true,
        "passiveID": [
            0,
            2
        ]
    },
    {
        "name": "Mysterious Figure - Phase 2",
        "media": "assets/media/monsters/ahrenia.svg",
        "hitpoints": 990,
        "attackLevel": 750,
        "strengthLevel": 750,
        "defenceLevel": 750,
        "rangedLevel": 750,
        "magicLevel": 750,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": -27,
        "attackBonusRanged": 10,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": 0,
        "attackBonusMagic": 0,
        "damageBonusMagic": 0,
        "defenceBonusMagic": -20,
        "damageReduction": 40,
        "attackSpeed": 2200,
        "attackType": 1,
        "setMaxHit": null,
        "dropCoins": [
            0,
            1
        ],
        "lootTable": [
            [
                681,
                1,
                1
            ]
        ],
        "lootChance": 100,
        "bones": 439,
        "canSlayer": false,
        "isBoss": true,
        "hasSpecialAttack": true,
        "specialAttackID": [
            45,
            48,
            49
        ],
        "ignoreCompletion": true,
        "hasPassive": true,
        "passiveID": [
            0,
            3
        ]
    },
    {
        "name": "Ahrenia",
        "media": "assets/media/monsters/ahrenia_final.svg",
        "hitpoints": 990,
        "attackLevel": 750,
        "strengthLevel": 750,
        "defenceLevel": 750,
        "rangedLevel": 750,
        "magicLevel": 750,
        "attackBonus": 0,
        "strengthBonus": 0,
        "defenceBonus": -30,
        "attackBonusRanged": 0,
        "strengthBonusRanged": 0,
        "defenceBonusRanged": -26,
        "attackBonusMagic": -11,
        "damageBonusMagic": 0,
        "defenceBonusMagic": 10,
        "damageReduction": 40,
        "attackSpeed": 2200,
        "attackType": 2,
        "setMaxHit": 696.9,
        "dropCoins": [
            1000000,
            1000000
        ],
        "lootTable": [
            [
                952,
                1,
                1
            ]
        ],
        "lootChance": 100,
        "bones": 439,
        "canSlayer": false,
        "isBoss": true,
        "hasSpecialAttack": true,
        "specialAttackID": [
            50,
            51,
            52
        ],
        "hasPassive": true,
        "passiveID": [
            0,
            4
        ]
    },
    {
        "id": 150,
        "name": "Superior Eyed Monster",
        "hitpoints": 180,
        "attackLevel": 80,
        "strengthLevel": 90,
        "defenceLevel": 90,
        "rangedLevel": 60,
        "magicLevel": 160,
        "attackBonusMagic": 10,
        "attackBonus": 40,
        "strengthBonus": 40,
        "defenceBonus": 40,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 100,
        "damageBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 2,
        "setMaxHit": 22,
        "dropCoins": [
            120,
            240
        ],
        "lootTable": [
            [
                495,
                5,
                16
            ],
            [
                533,
                1,
                3
            ]
        ],
        "media": "assets/media/monsters/superior_eye_monster.svg",
        "bones": 439,
        "canSlayer": true,
        "slayerXP": 90
    },
    {
        "id": 151,
        "name": "Eye of Fear",
        "hitpoints": 330,
        "attackLevel": 260,
        "strengthLevel": 260,
        "defenceLevel": 260,
        "rangedLevel": 160,
        "magicLevel": 160,
        "attackBonus": 80,
        "strengthBonus": 40,
        "defenceBonus": 80,
        "defenceBonusRanged": 0,
        "defenceBonusMagic": 0,
        "attackSpeed": 3000,
        "attackType": 0,
        "dropCoins": [
            200,
            600
        ],
        "lootTable": [
            [
                495,
                5,
                24
            ],
            [
                534,
                1,
                3
            ]
        ],
        "media": "assets/media/monsters/eye_of_fear.svg",
        "bones": 439,
        "canSlayer": true,
        "slayerXP": 165
    }
];

class Monster {
    static STYLE_NAMES = [
        'melee',
        'ranged',
        'magic'
    ];

    constructor(config) {
        this.name = config.name;
        this.combatLevel = Monster._getCombatLevel(config);
        this.hp = config.hitpoints * 10;

        this.style = Monster.STYLE_NAMES[config.attackType];
        this.speed = config.attackSpeed / 1000;
        this.maxHit = Monster._getMaxHit(config);

        this.ratings = {
            melee: {
                accuracy: (config.attackLevel + 8) * (config.attackBonus + 64),
                evasion: (config.defenceLevel + 8) * (config.defenceBonus + 64),
            },
            ranged: {
                accuracy: (config.rangedLevel + 8) * (config.attackBonus + 64),
                evasion: (config.defenceLevel + 9) * (config.defenceBonusRanged + 64),
            },
            magic: {
                accuracy: (config.magicLevel + 8) * (config.attackBonus + 64),
                evasion: (config.magicLevel * 0.7 + config.defenceLevel * 0.3 + 9) * (config.defenceBonusMagic + 64),
            },
        };

        this.includeInSearch = (! config.isBoss);
    }

    toString() {
        return `${this.name} (Level ${this.combatLevel})`;
    }

    static _getCombatLevel(config) {
        const meleeCombatLevel = 13 / 40 * (config.attackLevel + config.strengthLevel);
        const rangedCombatLevel = 39 / 80 * config.rangedLevel;
        const magicCombatLevel = 39 / 80 * config.magicLevel;
        
        const baseCombatLevel = (config.defenceLevel + config.hitpoints) / 4;
        const roleCombatLevel = Math.max(meleeCombatLevel, rangedCombatLevel, magicCombatLevel);

        return Math.floor(baseCombatLevel + roleCombatLevel);
    }

    static _getMaxHit(config) {
        switch(config.attackType) {
            case 0: // melee
                const strength = config.strengthLevel + 9;
                return 22 + config.strengthLevel +
                    (17 + config.strengthLevel) * config.strengthBonus / 64;

            case 1: // ranged
                return 14 + config.rangedLevel +
                    (config.rangedLevel + 9) * config.strengthBonusRanged / 64;

            case 2: // magic
                let spellBaseDamage;
                if(config.selectedSpell) {
                    spellBaseDamage = SPELLS[config.selectedSpell].maxHit;
                } else {
                    spellBaseDamage = config.setMaxHit;
                }
                return spellBaseDamage * (1 + config.damageBonusMagic / 100);

            default:
                const error = new Error(`Unknown attackType: ${config.attackType}`);
                console.error(config);
                throw error;
        }
    }
}

MONSTERS = MONSTERS.map(config =>
    new Monster(config)
).sort((a, b) =>
    a.combatLevel - b.combatLevel
);

const MONSTERS_BY_NAME = {};
for(const monster of MONSTERS)
    MONSTERS_BY_NAME[monster.name] = monster;

export { MONSTERS, MONSTERS_BY_NAME };