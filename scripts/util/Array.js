export function average(array) {
    return array.reduce(
        (element, total) => element + total
    ) / array.length;
}