function formatPercent(percentage) {
    return formatProbability(percentage / 100);
}

function formatProbability(probability) {
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

function formatTime(inputUnits, time) {
    if (isNaN(time)) return '--';

    const seconds = TIME_UNITS[inputUnits] * time;

    let units, unit;
    for (unit in TIME_UNITS) {
        units = seconds / TIME_UNITS[unit];
        if (units >= 1) break;
    }

    return `${formatNumber(units)} ${unit}s`;
}

function formatNumber(n) {
    if (n >= 10) {
        return n.toFixed(0);
    } else if (n >= 1) {
        return n.toFixed(1);
    } else {
        return n.toPrecision(2);
    }
}

const format = {
    percent: formatPercent,
    probability: formatProbability,
    time: formatTime,
    number: formatNumber,
};

export default format;