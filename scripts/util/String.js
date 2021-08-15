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

export function nullSafeToString(o) {
    if (!o || typeof o.toString != 'function')
        return '';
    return o.toString();
}