/*

    Coordinates Validator

    You need to create a function that will validate if given parameters are valid geographical coordinates.

    Valid coordinates look like the following: "23.32353342, -32.543534534". The return value should be either true or false.

    Latitude (which is first float) can be between 0 and 90, positive or negative. Longitude (which is second float) can be between 0 and 180, positive or negative.

    Coordinates can only contain digits, or one of the following symbols (including space after comma) __ -, . __

    There should be no space between the minus "-" sign and the digit after it.

    Here are some valid coordinates:

    -23, 25
    24.53525235, 23.45235
    04, -23.234235
    43.91343345, 143
    4, -3
    And some invalid ones:

    23.234, - 23.4234
    2342.43536, 34.324236
    N23.43345, E32.6457
    99.234, 12.324
    6.325624, 43.34345.345
    0, 1,2
    0.342q0832, 1.2324

*/

export function isValidCoordinates(coordinates: string): boolean {

    const parts = coordinates
        .split(',')
        .map(p => p.trim());

    if (parts.length !== 2) return false; // two parts

    if (parts[0].split('.').length > 2 || parts[1].split('.').length > 2) 
        return false // have none or one decimal point

    if (parts[0].split('-').length > 2 || parts[1].split('-').length > 2)
        return false // have none or one minus sign

    if (parts[0].indexOf('-') > 0 || parts[1].indexOf('-') > 0)
        return false // the negative sign is only at the start

    const lat = parseFloat(parts[0]);
    const lon = parseFloat(parts[1]);

    if (isNaN(lat) || isNaN(lon)) return false; // are float numbers

    if (Math.abs(lat) > 90 || Math.abs(lon) > 180) return false // have valid values

    // Contain only valid characters
    const validChars = '0123456789.-';
    for (const c of parts.join('')) 
        if (!validChars.includes(c)) return false;

    return true; // do your thing!
}

describe('isValidCoordinates', () => {
    test('should return true for valid coordinates', () => {
        expect(isValidCoordinates('-23, 25')).toBe(true);
        expect(isValidCoordinates('24.53525235, 23.45235')).toBe(true);
        expect(isValidCoordinates('04, -23.234235')).toBe(true);
        expect(isValidCoordinates('43.91343345, 143')).toBe(true);
        expect(isValidCoordinates('4, -3')).toBe(true);
    });

    test('should return false for invalid coordinates', () => {
        expect(isValidCoordinates('23.234, - 23.4234')).toBe(false);
        expect(isValidCoordinates('2342.43536, 34.324236')).toBe(false);
        expect(isValidCoordinates('N23.43345, E32.6457')).toBe(false);
        expect(isValidCoordinates('99.234, 12.324')).toBe(false);
        expect(isValidCoordinates('6.325624, 43.34345.345')).toBe(false);
        expect(isValidCoordinates('0, 1,2')).toBe(false);
        expect(isValidCoordinates('0.342q0832, 1.2324')).toBe(false);
    });
});