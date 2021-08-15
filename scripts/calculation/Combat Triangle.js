const COMBAT_TRIANGLE = {
    'melee': {
        'melee': '😐',
        'ranged': '😁',
        'magic': '😰',
    },
    'ranged': {
        'melee': '😰',
        'ranged': '😐',
        'magic': '😁',
    },
    'magic': {
        'melee': '😁',
        'ranged': '😰',
        'magic': '😐',
    },
};

export default COMBAT_TRIANGLE;

const STYLE_NAME_TO_EMOJI = {
    melee: '🗡',
    ranged: '🏹',
    magic: '🧙‍♂️',
};

export { STYLE_NAME_TO_EMOJI };