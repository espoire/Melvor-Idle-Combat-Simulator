import { randomArrayIndex } from './Random.js';

const SAMPLE_SIZE = 2000;
const VALUES = Array(SAMPLE_SIZE);

for (let i = 0; i < SAMPLE_SIZE; i++)
    VALUES[i] = i / SAMPLE_SIZE;

const SAMPLE_VALUES = Array(SAMPLE_SIZE);
for (let i = 0; i < SAMPLE_SIZE; i++) {
    const index = randomArrayIndex(VALUES);
    SAMPLE_VALUES[i] = VALUES[index];
    VALUES.splice(index, 1);
}

let pointer = -1;
// Not exactly random, but good enough for our purposes,
// and it's twice as fast as Math.random().
export default function fastRandom() {
    pointer = (pointer + 1) % SAMPLE_SIZE;
    return SAMPLE_VALUES[pointer];
}