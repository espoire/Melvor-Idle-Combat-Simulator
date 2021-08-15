import { nullSafeToString } from './String.js';

export function average(array) {
    return sum(array) / array.length;
}

export function sum(array) {
    return array.reduce(
        (element, total) => element + total
    );
}

/**
 * @param {*[]} array
 *      The input array.
 * @return {*[]}
 *      A new array containing only the unique elements from the input array.
 */
export function unique(array) {
    return [...new Set(array)];
}

const sort = {
    alphabetize(a, b) {
        a = nullSafeToString(a).toLowerCase();
        b = nullSafeToString(b).toLowerCase();

        for (let i = 0; i <= a.length && i <= b.length; i++) {
            if (a.length == i) {
                if (b.length == i) {
                    return 0;
                } else {
                    return -1;
                }
            } else if (b.length == i) {
                return 1;
            } else {
                if (a[i] < b[i]) {
                    return -1;
                } else if (a[i] > b[i]) {
                    return 1;
                }
            }
        }

        return 0;
    },
};

export { sort };