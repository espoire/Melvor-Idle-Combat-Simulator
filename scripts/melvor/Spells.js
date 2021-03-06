const SPELLS = [
    {
        'name': 'Wind Strike',
        'media': 'assets/media/skills/magic/wind_strike.svg',
        'magicLevelRequired': 1,
        'runesRequired': [
            {
                'id': 389,
                'qty': 1,
            },
            {
                'id': 390,
                'qty': 1,
            },
        ],
        'maxHit': 2,
        'spellType': 0,
    },
    {
        'name': 'Water Strike',
        'media': 'assets/media/skills/magic/water_strike.svg',
        'magicLevelRequired': 3,
        'runesRequired': [
            {
                'id': 389,
                'qty': 1,
            },
            {
                'id': 390,
                'qty': 1,
            },
            {
                'id': 391,
                'qty': 1,
            },
        ],
        'runesRequiredAlt': [
            {
                'id': 824,
                'qty': 1,
            },
            {
                'id': 390,
                'qty': 1,
            },
        ],
        'maxHit': 4,
        'spellType': 1,
    },
    {
        'name': 'Earth Strike',
        'media': 'assets/media/skills/magic/earth_strike.svg',
        'magicLevelRequired': 6,
        'runesRequired': [
            {
                'id': 389,
                'qty': 1,
            },
            {
                'id': 390,
                'qty': 1,
            },
            {
                'id': 392,
                'qty': 1,
            },
        ],
        'runesRequiredAlt': [
            {
                'id': 825,
                'qty': 1,
            },
            {
                'id': 390,
                'qty': 1,
            },
        ],
        'maxHit': 6,
        'spellType': 2,
    },
    {
        'name': 'Fire Strike',
        'media': 'assets/media/skills/magic/fire_strike.svg',
        'magicLevelRequired': 10,
        'runesRequired': [
            {
                'id': 389,
                'qty': 1,
            },
            {
                'id': 390,
                'qty': 1,
            },
            {
                'id': 393,
                'qty': 1,
            },
        ],
        'runesRequiredAlt': [
            {
                'id': 827,
                'qty': 1,
            },
            {
                'id': 390,
                'qty': 1,
            },
        ],
        'maxHit': 8,
        'spellType': 3,
    },
    {
        'name': 'Wind Bolt',
        'media': 'assets/media/skills/magic/wind_bolt.svg',
        'magicLevelRequired': 14,
        'runesRequired': [
            {
                'id': 389,
                'qty': 2,
            },
            {
                'id': 395,
                'qty': 1,
            },
        ],
        'maxHit': 9,
        'spellType': 0,
    },
    {
        'name': 'Water Bolt',
        'media': 'assets/media/skills/magic/water_bolt.svg',
        'magicLevelRequired': 16,
        'runesRequired': [
            {
                'id': 389,
                'qty': 2,
            },
            {
                'id': 395,
                'qty': 1,
            },
            {
                'id': 391,
                'qty': 2,
            },
        ],
        'runesRequiredAlt': [
            {
                'id': 824,
                'qty': 2,
            },
            {
                'id': 395,
                'qty': 1,
            },
        ],
        'maxHit': 10,
        'spellType': 1,
    },
    {
        'name': 'Earth Bolt',
        'media': 'assets/media/skills/magic/earth_bolt.svg',
        'magicLevelRequired': 19,
        'runesRequired': [
            {
                'id': 389,
                'qty': 2,
            },
            {
                'id': 395,
                'qty': 1,
            },
            {
                'id': 392,
                'qty': 3,
            },
        ],
        'runesRequiredAlt': [
            {
                'id': 825,
                'qty': 2,
            },
            {
                'id': 395,
                'qty': 1,
            },
        ],
        'maxHit': 11,
        'spellType': 2,
    },
    {
        'name': 'Fire Bolt',
        'media': 'assets/media/skills/magic/fire_bolt.svg',
        'magicLevelRequired': 23,
        'runesRequired': [
            {
                'id': 389,
                'qty': 3,
            },
            {
                'id': 395,
                'qty': 1,
            },
            {
                'id': 393,
                'qty': 4,
            },
        ],
        'runesRequiredAlt': [
            {
                'id': 827,
                'qty': 3,
            },
            {
                'id': 395,
                'qty': 1,
            },
        ],
        'maxHit': 12,
        'spellType': 3,
    },
    {
        'name': 'Wind Blast',
        'media': 'assets/media/skills/magic/wind_blast.svg',
        'magicLevelRequired': 28,
        'runesRequired': [
            {
                'id': 389,
                'qty': 3,
            },
            {
                'id': 396,
                'qty': 1,
            },
        ],
        'maxHit': 13,
        'spellType': 0,
    },
    {
        'name': 'Water Blast',
        'media': 'assets/media/skills/magic/water_blast.svg',
        'magicLevelRequired': 30,
        'runesRequired': [
            {
                'id': 389,
                'qty': 3,
            },
            {
                'id': 396,
                'qty': 1,
            },
            {
                'id': 391,
                'qty': 4,
            },
        ],
        'runesRequiredAlt': [
            {
                'id': 824,
                'qty': 3,
            },
            {
                'id': 396,
                'qty': 1,
            },
        ],
        'maxHit': 14,
        'spellType': 1,
    },
    {
        'name': 'Earth Blast',
        'media': 'assets/media/skills/magic/earth_blast.svg',
        'magicLevelRequired': 33,
        'runesRequired': [
            {
                'id': 389,
                'qty': 3,
            },
            {
                'id': 396,
                'qty': 1,
            },
            {
                'id': 392,
                'qty': 4,
            },
        ],
        'runesRequiredAlt': [
            {
                'id': 825,
                'qty': 3,
            },
            {
                'id': 396,
                'qty': 1,
            },
        ],
        'maxHit': 15,
        'spellType': 2,
    },
    {
        'name': 'Fire Blast',
        'media': 'assets/media/skills/magic/fire_blast.svg',
        'magicLevelRequired': 37,
        'runesRequired': [
            {
                'id': 389,
                'qty': 4,
            },
            {
                'id': 396,
                'qty': 1,
            },
            {
                'id': 393,
                'qty': 5,
            },
        ],
        'runesRequiredAlt': [
            {
                'id': 827,
                'qty': 4,
            },
            {
                'id': 396,
                'qty': 1,
            },
        ],
        'maxHit': 16,
        'spellType': 3,
    },
    {
        'name': 'Wind Wave',
        'media': 'assets/media/skills/magic/wind_wave.svg',
        'magicLevelRequired': 43,
        'runesRequired': [
            {
                'id': 389,
                'qty': 5,
            },
            {
                'id': 397,
                'qty': 1,
            },
        ],
        'maxHit': 17,
        'spellType': 0,
    },
    {
        'name': 'Water Wave',
        'media': 'assets/media/skills/magic/water_wave.svg',
        'magicLevelRequired': 45,
        'runesRequired': [
            {
                'id': 389,
                'qty': 5,
            },
            {
                'id': 397,
                'qty': 1,
            },
            {
                'id': 391,
                'qty': 7,
            },
        ],
        'runesRequiredAlt': [
            {
                'id': 824,
                'qty': 5,
            },
            {
                'id': 397,
                'qty': 1,
            },
        ],
        'maxHit': 18,
        'spellType': 1,
    },
    {
        'name': 'Earth Wave',
        'media': 'assets/media/skills/magic/earth_wave.svg',
        'magicLevelRequired': 48,
        'runesRequired': [
            {
                'id': 389,
                'qty': 5,
            },
            {
                'id': 397,
                'qty': 1,
            },
            {
                'id': 392,
                'qty': 7,
            },
        ],
        'runesRequiredAlt': [
            {
                'id': 825,
                'qty': 5,
            },
            {
                'id': 397,
                'qty': 1,
            },
        ],
        'maxHit': 19,
        'spellType': 2,
    },
    {
        'name': 'Fire Wave',
        'media': 'assets/media/skills/magic/fire_wave.svg',
        'magicLevelRequired': 52,
        'runesRequired': [
            {
                'id': 389,
                'qty': 5,
            },
            {
                'id': 397,
                'qty': 1,
            },
            {
                'id': 393,
                'qty': 7,
            },
        ],
        'runesRequiredAlt': [
            {
                'id': 827,
                'qty': 5,
            },
            {
                'id': 397,
                'qty': 1,
            },
        ],
        'maxHit': 20,
        'spellType': 3,
    },
    {
        'name': 'Wind Surge',
        'media': 'assets/media/skills/magic/wind_surge.svg',
        'magicLevelRequired': 57,
        'runesRequired': [
            {
                'id': 389,
                'qty': 5,
            },
            {
                'id': 398,
                'qty': 1,
            },
        ],
        'maxHit': 21,
        'spellType': 0,
    },
    {
        'name': 'Water Surge',
        'media': 'assets/media/skills/magic/water_surge.svg',
        'magicLevelRequired': 61,
        'runesRequired': [
            {
                'id': 389,
                'qty': 7,
            },
            {
                'id': 398,
                'qty': 1,
            },
            {
                'id': 391,
                'qty': 10,
            },
        ],
        'runesRequiredAlt': [
            {
                'id': 824,
                'qty': 7,
            },
            {
                'id': 398,
                'qty': 1,
            },
        ],
        'maxHit': 22,
        'spellType': 1,
    },
    {
        'name': 'Earth Surge',
        'media': 'assets/media/skills/magic/earth_surge.svg',
        'magicLevelRequired': 64,
        'runesRequired': [
            {
                'id': 389,
                'qty': 7,
            },
            {
                'id': 398,
                'qty': 1,
            },
            {
                'id': 392,
                'qty': 10,
            },
        ],
        'runesRequiredAlt': [
            {
                'id': 825,
                'qty': 7,
            },
            {
                'id': 398,
                'qty': 1,
            },
        ],
        'maxHit': 23,
        'spellType': 2,
    },
    {
        'name': 'Fire Surge',
        'media': 'assets/media/skills/magic/fire_surge.svg',
        'magicLevelRequired': 68,
        'runesRequired': [
            {
                'id': 389,
                'qty': 7,
            },
            {
                'id': 398,
                'qty': 1,
            },
            {
                'id': 393,
                'qty': 10,
            },
        ],
        'runesRequiredAlt': [
            {
                'id': 827,
                'qty': 7,
            },
            {
                'id': 398,
                'qty': 1,
            },
        ],
        'maxHit': 24,
        'spellType': 3,
    },
];

export default SPELLS;