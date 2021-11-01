const Time = {
    millis: 1,
    seconds: 1000,
    minutes: 60 * 1000,
    hours: 60 * 60 * 1000,
    days: 24 * 60 * 60 * 1000,
    months: 365 / 12 * 24 * 60 * 60 * 1000,
    years: 365 * 24 * 60 * 60 * 1000,
    decades: 10 * 365 * 24 * 60 * 60 * 1000,
    minDate() {
        return new Date(-8640000000000000);
    },
    maxDate() {
        return new Date(8640000000000000);
    },
    fromNow(deltaMillis) {
        const nowMillis = this.now().getTime();
        return new Date(nowMillis + deltaMillis);
    },
    now() {
        return this.syncedNow ?
            new Date(this.syncedNow) :
            new Date();
    },
    syncedNow: null,
    sync() {
        this.syncedNow = new Date();
    },
};

export default Time;