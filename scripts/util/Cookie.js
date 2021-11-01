import Time from './Time.js';

const Cookie = {
    // Adds a key-value pair to the cookie.
    bake(key, value, expiry = Time.maxDate(), path = '/') {
        if (value == null) value = '';

        document.cookie = `${key}=${value};${expiry};path=${path}`;

        if (expiry >= Time.now()) {
            this.jar[`${key}`] = `${value}`;
        } else {
            delete this.jar[`${key}`];
        }
    },

    // Adds ALL key-value pairs in the pojo to the cookie.
    bakeAll(pojo, expiry, path) {
        for (const key in pojo)
            this.bake(key, pojo[key], expiry, path);
    },

    // Cached cookie object, to simplify access to multiple keys.
    jar: {},

    // Gets the cookie data, converts it to a pojo,
    // and stores a reference to this object in the Cookie.jar.
    have() {
        const ret = {};

        if (document.cookie) {
            const tokens = document.cookie.split('; ');
            for (const token of tokens) {
                const subtokens = token.split('=');
                ret[subtokens[0]] = subtokens[1];
            }
        }

        this.jar = ret;
        return ret;
    },

    // Removes a data key from the cookie
    // by setting it to expire at a prior date.
    //
    // Note: Chrome will not un-set the key
    // until the browser closes.
    eat(key, path = '/') {
        this.bake(key, null, new Date(0));
    },

    // Removes ALL data keys from the cookie
    // by setting them to expire at a prior date.
    //
    // Note: Chrome will not un-set the key
    // until the browser closes.
    eatAll(path) {
        for (const key in this.jar)
            this.eat(key, path);
    },
};

// Pre-load the cookie data.
Cookie.have();

export default Cookie;