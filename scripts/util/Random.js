export function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function random(min, max) {
    return Math.random() * (max - min) + min;
}

export function randomFromArray(array) {
    const roll = randInt(0, array.length - 1);
    return array[roll];
}