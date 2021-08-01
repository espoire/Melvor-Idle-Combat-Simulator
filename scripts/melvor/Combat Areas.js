const BASIC_COMBAT_AREAS = [
    {
        "areaName": "Farmlands",
        "type": "combat",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/farmlands.svg",
        "monsters": [
            111,
            37,
            38,
            67,
            68,
            69
        ],
        "difficulty": [
            0,
            2
        ],
        "slayerItem": 0
    },
    {
        "areaName": "Dragon Valley",
        "type": "combat",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/dragon_valley.svg",
        "monsters": [
            63,
            64,
            65,
            66
        ],
        "difficulty": [
            3,
            4
        ],
        "slayerItem": 0
    },
    {
        "areaName": "Wet Forest",
        "type": "combat",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/wet_forest.svg",
        "monsters": [
            82,
            14,
            12,
            13
        ],
        "difficulty": [
            1,
            2
        ],
        "slayerItem": 0
    },
    {
        "areaName": "Wizard Tower",
        "type": "combat",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/wizard_tower.svg",
        "monsters": [
            70,
            79,
            78
        ],
        "difficulty": [
            2,
            4
        ],
        "slayerItem": 0
    },
    {
        "areaName": "Castle of Kings",
        "type": "combat",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/castle_of_kings.svg",
        "monsters": [
            71,
            0,
            72,
            73,
            74
        ],
        "difficulty": [
            1,
            3
        ],
        "slayerItem": 0
    },
    {
        "areaName": "Bandit Hideout",
        "type": "combat",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/bandit_hideout.svg",
        "monsters": [
            75,
            76
        ],
        "difficulty": [
            1,
            2
        ],
        "slayerItem": 0
    },
    {
        "areaName": "Giant Dungeon",
        "type": "combat",
        "media": "https://cdn.melvor.net/core/v018/assets/media/monsters/hill_giant.svg",
        "monsters": [
            1,
            2
        ],
        "difficulty": [
            1,
            2
        ],
        "slayerItem": 0
    },
    {
        "areaName": "Sandy Shores",
        "type": "combat",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/sandy_shores.svg",
        "monsters": [
            5,
            4,
            3,
            6
        ],
        "difficulty": [
            0,
            2
        ],
        "slayerItem": 0
    },
    {
        "areaName": "Icy Hills",
        "type": "combat",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/icy_hills.svg",
        "monsters": [
            8,
            7,
            54
        ],
        "difficulty": [
            1,
            3
        ],
        "slayerItem": 0
    },
    {
        "areaName": "Golbin Village",
        "type": "combat",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/goblin_village.svg",
        "monsters": [
            35,
            36
        ],
        "difficulty": [
            0
        ],
        "slayerItem": 0
    },
    {
        "areaName": "Graveyard",
        "type": "combat",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/death.svg",
        "monsters": [
            81,
            59,
            60,
            62
        ],
        "difficulty": [
            0,
            2
        ],
        "slayerItem": 0
    }
];

const SLAYER_AREAS = [
    {
        "areaName": "Penumbra",
        "type": "slayer",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/penumbra.svg",
        "monsters": [
            9,
            10,
            11,
            15,
            16,
            17
        ],
        "difficulty": [
            1,
            3
        ],
        "slayerLevel": 1,
        "slayerItem": 0,
        "dungeonCompleted": -1
    },
    {
        "areaName": "Strange Cave",
        "type": "slayer",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/strange_cave.svg",
        "monsters": [
            20,
            18,
            19,
            21,
            150,
            151
        ],
        "difficulty": [
            2,
            4
        ],
        "slayerLevel": 10,
        "dungeonCompleted": -1,
        "slayerItem": 494
    },
    {
        "areaName": "High Lands",
        "type": "slayer",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/high_lands.svg",
        "monsters": [
            22,
            23
        ],
        "difficulty": [
            4
        ],
        "slayerLevel": 60,
        "dungeonCompleted": -1,
        "slayerItem": 502
    },
    {
        "areaName": "Holy Isles",
        "type": "slayer",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/holy_isles.svg",
        "monsters": [
            24,
            25,
            26,
            27,
            137,
            138
        ],
        "difficulty": [
            2,
            3
        ],
        "slayerLevel": 30,
        "slayerItem": 0,
        "dungeonCompleted": -1
    },
    {
        "areaName": "Forest of Goo",
        "type": "slayer",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/forest_of_goo.svg",
        "monsters": [
            28,
            29,
            30,
            31
        ],
        "difficulty": [
            1,
            3
        ],
        "slayerLevel": 1,
        "slayerItem": 0,
        "dungeonCompleted": -1
    },
    {
        "areaName": "Desolate Plains",
        "type": "slayer",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/desolate_plains.svg",
        "monsters": [
            32,
            33,
            34,
            110
        ],
        "difficulty": [
            4,
            5
        ],
        "slayerLevel": 70,
        "slayerItem": 0,
        "dungeonCompleted": -1
    },
    {
        "areaName": "Runic Ruins",
        "type": "slayer",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/runic_ruins.svg",
        "monsters": [
            116,
            117,
            118,
            119,
            120
        ],
        "difficulty": [
            3
        ],
        "slayerLevel": 45,
        "slayerItem": 0,
        "dungeonCompleted": -1,
        "areaEffect": true,
        "areaEffectDescription": "-40% Magic Evasion if your Attack Style is not Magic.",
        "areaEffectValue": 40
    },
    {
        "areaName": "Arid Plains",
        "type": "slayer",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/arid_plains.svg",
        "monsters": [
            121,
            122,
            123,
            124,
            125,
            126
        ],
        "difficulty": [
            3,
            4
        ],
        "slayerLevel": 50,
        "dungeonCompleted": -1,
        "slayerItem": 904,
        "areaEffect": true,
        "areaEffectDescription": "-40% Food Efficiency.",
        "areaEffectValue": 40
    },
    {
        "areaName": "Shrouded Badlands",
        "type": "slayer",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/shrouded_badlands.svg",
        "monsters": [
            127,
            128,
            129,
            130
        ],
        "difficulty": [
            5
        ],
        "slayerLevel": 80,
        "dungeonCompleted": -1,
        "slayerItem": 905,
        "areaEffect": true,
        "areaEffectDescription": "-40% Accuracy Rating.",
        "areaEffectValue": 40
    },
    {
        "areaName": "Perilous Peaks",
        "type": "slayer",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/perilous_peaks.svg",
        "monsters": [
            133,
            132,
            131
        ],
        "difficulty": [
            5
        ],
        "slayerLevel": 85,
        "dungeonCompleted": -1,
        "slayerItem": 906,
        "areaEffect": true,
        "areaEffectDescription": "-40% Evasion Ratings.",
        "areaEffectValue": 40
    },
    {
        "areaName": "Dark Waters",
        "type": "slayer",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/dark_waters.svg",
        "monsters": [
            134,
            135,
            136
        ],
        "difficulty": [
            5
        ],
        "slayerLevel": 90,
        "slayerItem": 0,
        "dungeonCompleted": 15,
        "areaEffect": true,
        "areaEffectDescription": "Permanent 40% Slow applied.",
        "areaEffectValue": 40
    }
];

const DUNGEONS = [
    {
        "name": "Chicken Coop",
        "media": "https://cdn.melvor.net/core/v018/assets/media/monsters/mumma_chicken.svg",
        "type": "<small class=\"badge badge-pill badge-warning\">Dungeon</small>",
        "difficulty": [
            1
        ],
        "recommendedStats": [
            20,
            20,
            20
        ],
        "monsters": [
            37,
            37,
            37,
            37,
            39,
            40
        ],
        "rewardCount": 1,
        "rewards": [
            346
        ],
        "slayerItem": 0,
        "petID": 25
    },
    {
        "name": "Undead Graveyard",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/graveyard.svg",
        "type": "<small class=\"badge badge-pill badge-warning\">Dungeon</small>",
        "difficulty": [
            2
        ],
        "recommendedStats": [
            40,
            40,
            40
        ],
        "monsters": [
            59,
            59,
            59,
            60,
            60,
            60,
            62,
            61
        ],
        "rewardCount": 1,
        "rewards": [
            382
        ],
        "slayerItem": 0,
        "petID": 26
    },
    {
        "name": "Spider Forest",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/spider_forest.svg",
        "type": "<small class=\"badge badge-pill badge-warning\">Dungeon</small>",
        "difficulty": [
            3
        ],
        "recommendedStats": [
            60,
            60,
            60
        ],
        "monsters": [
            50,
            51,
            50,
            51,
            50,
            52,
            52,
            53
        ],
        "rewardCount": 1,
        "rewards": [
            363
        ],
        "slayerItem": 0,
        "petID": 29
    },
    {
        "name": "Frozen Cove",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/frozen_cove.svg",
        "type": "<small class=\"badge badge-pill badge-warning\">Dungeon</small>",
        "difficulty": [
            4
        ],
        "recommendedStats": [
            70,
            70,
            70
        ],
        "monsters": [
            54,
            54,
            54,
            55,
            55,
            55,
            56,
            57
        ],
        "rewardCount": 1,
        "rewards": [
            381
        ],
        "slayerItem": 0,
        "petID": 32
    },
    {
        "name": "Deep Sea Ship",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/ship.svg",
        "type": "<small class='badge badge-pill badge-warning'>Dungeon</small>",
        "difficulty": [
            4
        ],
        "recommendedStats": [
            80,
            80,
            80
        ],
        "monsters": [
            41,
            41,
            41,
            41,
            41,
            41,
            41,
            58,
            42,
            43
        ],
        "rewardCount": 1,
        "rewards": [
            360
        ],
        "slayerItem": 0,
        "petID": 31
    },
    {
        "name": "Volcanic Cave",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/volcanic_cave.svg",
        "type": "<small class=\"badge badge-pill badge-danger\">Elite Dungeon</small>",
        "difficulty": [
            5
        ],
        "recommendedStats": [
            90,
            90,
            90
        ],
        "monsters": [
            44,
            45,
            46,
            47,
            83,
            84,
            48,
            49
        ],
        "rewardCount": 1,
        "rewards": [
            362,
            361
        ],
        "slayerItem": 0,
        "petID": 34
    },
    {
        "name": "Bandit Base",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/bandit_base.svg",
        "type": "<small class=\"badge badge-pill badge-warning\">Dungeon</small>",
        "difficulty": [
            2
        ],
        "monsters": [
            75,
            75,
            75,
            76,
            76,
            76,
            77
        ],
        "rewardCount": 1,
        "rewards": [
            442
        ],
        "slayerItem": 0,
        "petID": 27
    },
    {
        "name": "Hall of Wizards",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/hall_of_wizards.svg",
        "type": "<small class=\"badge badge-pill badge-warning\">Dungeon</small>",
        "difficulty": [
            3
        ],
        "monsters": [
            70,
            70,
            70,
            79,
            79,
            79,
            78,
            78,
            80
        ],
        "rewardCount": 1,
        "rewards": [
            461
        ],
        "slayerItem": 0,
        "petID": 28
    },
    {
        "name": "Air God Dungeon",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/air_god_dungeon.svg",
        "type": "<small class=\"badge badge-pill badge-warning\">Dungeon</small>",
        "difficulty": [
            5
        ],
        "monsters": [
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            86,
            86,
            86,
            86,
            86,
            86,
            87,
            87,
            87,
            87,
            88,
            89,
            90
        ],
        "rewardCount": 1,
        "rewards": [
            788
        ],
        "slayerItem": 0,
        "requiresCompletion": 5,
        "petID": 36
    },
    {
        "name": "Water God Dungeon",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/water_god_dungeon.svg",
        "type": "<small class=\"badge badge-pill badge-warning\">Dungeon</small>",
        "difficulty": [
            5
        ],
        "monsters": [
            91,
            91,
            91,
            91,
            91,
            91,
            91,
            91,
            92,
            92,
            92,
            92,
            92,
            92,
            93,
            93,
            93,
            93,
            94,
            95,
            96
        ],
        "rewardCount": 1,
        "rewards": [
            789
        ],
        "slayerItem": 0,
        "requiresCompletion": 8,
        "petID": 37
    },
    {
        "name": "Earth God Dungeon",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/earth_god_dungeon.svg",
        "type": "<small class=\"badge badge-pill badge-warning\">Dungeon</small>",
        "difficulty": [
            5
        ],
        "monsters": [
            97,
            97,
            97,
            97,
            97,
            97,
            97,
            97,
            98,
            98,
            98,
            98,
            98,
            98,
            99,
            99,
            99,
            99,
            100,
            101,
            102
        ],
        "rewardCount": 1,
        "rewards": [
            790
        ],
        "slayerItem": 0,
        "requiresCompletion": 9,
        "petID": 38
    },
    {
        "name": "Fire God Dungeon",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/fire_god_dungeon.svg",
        "type": "<small class=\"badge badge-pill badge-warning\">Dungeon</small>",
        "difficulty": [
            5
        ],
        "monsters": [
            103,
            103,
            103,
            103,
            103,
            103,
            103,
            103,
            104,
            104,
            104,
            104,
            104,
            104,
            105,
            105,
            105,
            105,
            106,
            107,
            108
        ],
        "rewardCount": 1,
        "rewards": [
            791
        ],
        "slayerItem": 0,
        "requiresCompletion": 10,
        "petID": 39
    },
    {
        "name": "Dragons Den",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/dragons_den.svg",
        "type": "<small class=\"badge badge-pill badge-warning\">Dungeon</small>",
        "difficulty": [
            4
        ],
        "monsters": [
            63,
            63,
            64,
            64,
            65,
            65,
            66,
            66,
            109
        ],
        "rewardCount": 1,
        "rewards": [
            813
        ],
        "slayerItem": 0,
        "petID": 33
    },
    {
        "name": "Miolite Caves",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/isolite_caves.svg",
        "monsters": [
            112,
            112,
            113,
            113,
            114,
            114,
            115
        ],
        "difficulty": [
            3
        ],
        "slayerLevel": 40,
        "slayerItem": 0,
        "rewardCount": 1,
        "rewards": [
            939
        ],
        "petID": 30
    },
    {
        "name": "Infernal Stronghold",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/infernal_stronghold.svg",
        "monsters": [
            140,
            140,
            140,
            140,
            140,
            141,
            141,
            141,
            141,
            142,
            142,
            142,
            143,
            143,
            144,
            145,
            146
        ],
        "difficulty": [
            5
        ],
        "slayerLevel": 75,
        "slayerItem": 0,
        "rewardCount": 1,
        "rewards": [
            940,
            941
        ],
        "requiresCompletion": 5,
        "requiresCompletionCount": 100,
        "petID": 35
    },
    {
        "name": "Into the Mist",
        "media": "https://cdn.melvor.net/core/v018/assets/media/skills/combat/into_the_mist.svg",
        "monsters": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            147,
            148,
            149
        ],
        "difficulty": [
            6
        ],
        "slayerLevel": 90,
        "slayerItem": 0,
        "rewardCount": 1,
        "rewards": [
            952
        ],
        "requiresCompletion": 11,
        "petID": 40
    }
];

export function decorateMonsterConfigWithLocationInfo(config) {
    const id = config.id;

    const basicArea = BASIC_COMBAT_AREAS.find(area =>
        area.monsters.includes(id)
    );
    
    if(basicArea) {
        config.location = {
            name: basicArea.areaName,
            type: 'basic',
        };

        return;
    }

    const slayerArea = SLAYER_AREAS.find(area =>
        area.monsters.includes(id)
    );
    
    if(slayerArea) {
        config.location = {
            name: slayerArea.areaName,
            type: 'slayer',
        };
        config.slayerLevel = slayerArea.slayerLevel;

        return;
    }

    const dungeon = DUNGEONS.find(dungeon =>
        dungeon.monsters.includes(id)
    );

    if(dungeon) {
        config.location = {
            name: dungeon.name,
            type: 'dungeon',
        };
        config.isDungeonOnly = true;

        return;
    }

    config.location = {
        name: '❓ Unknown',
        type: 'unknown',
    };
}