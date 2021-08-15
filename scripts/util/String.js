export function camelCaseToTitleCase(string) {
    let ret = string[0].toUpperCase();

    for (const char of string.substring(1)) {
        if (isUpperCase(char)) {
            ret += ` ${char}`;
        } else {
            ret += char;
        }
    }

    return ret;
}

function isUpperCase(char) {
    return (char == char.toUpperCase() && char != char.toLowerCase());
}

export function capitalize(string) {
    return string[0].toUpperCase() + string.substring(1);
}

export function formatPercent(percentage) {
    return formatProbability(percentage / 100);
}

export function formatProbability(probability) {
    probability = Number.parseFloat(probability);
    if (!probability || probability <= 0) return '0%';

    if (probability >= 1) return '100%';

    if (probability < 0.02) {
        const inverse = Math.round(1 / probability);

        return `1 in ${inverse}`;
    }

    return `${(probability * 100).toPrecision(2)}%`;
}

const TIME_UNITS = {
    hour: 3600,
    minute: 60,
    second: 1,
};

export function formatTime(inputUnits, time) {
    if (isNaN(time)) return '--';

    const seconds = TIME_UNITS[inputUnits] * time;

    let units, unit;
    for (unit in TIME_UNITS) {
        units = seconds / TIME_UNITS[unit];

        if (units >= 1) break;
    }

    if (units >= 10) {
        return `${units.toFixed(0)} ${unit}s`;
    } else if (units >= 1) {
        return `${units.toFixed(1)} ${unit}s`;
    } else {
        return `${units.toPrecision(2)} ${unit}s`;
    }
}