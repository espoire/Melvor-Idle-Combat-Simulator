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