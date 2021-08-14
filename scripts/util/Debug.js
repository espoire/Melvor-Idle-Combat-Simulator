export function expose(key, value) {
    if(value === undefined) {
        value = key;
        key = 'exposed';
    }

    console.log(`Exposing to global scope: window.${key} =`);
    console.log(value);

    window[key] = value;
}