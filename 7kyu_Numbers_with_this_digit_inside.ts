/*

    Numbers with this digit inside

    You have to search all numbers from inclusive 1 to inclusive a given number x, that have the given digit d in it.
    The value of d will always be 0 - 9.
    The value of x will always be greater than 0.

    You have to return as an array

    the count of these numbers,
    their sum
    and their product.

    For example:
    x = 11
    d = 1
    ->
    Numbers: 1, 10, 11
    Return: [3, 22, 110]

    If there are no numbers, which include the digit, return [0,0,0].

*/

export function numbersWithDigitInside(x: number, d: number): number[] {
    let count = 0;
    let sum = 0;
    let product = 1;
    let found = false;
    const strD = `${d}`;

    for (let i = 1; i <= x; i++) {
        if (`${i}`.includes(strD)) {
            count++;
            sum += i;
            product *= i;
            found = true;
        }
    }

    return found ? [count, sum, product] : [0, 0, 0];
}


describe('numbersWithDigitInside', () => {
    test('should return [0, 0, 0] for numbersWithDigitInside(5, 6)', () => {
        expect(numbersWithDigitInside(5, 6)).toEqual([0, 0, 0]);
    });

    test('should return [0, 0, 0] for numbersWithDigitInside(1, 0)', () => {
        expect(numbersWithDigitInside(1, 0)).toEqual([0, 0, 0]);
    });

    test('should return [1, 6, 6] for numbersWithDigitInside(7, 6)', () => {
        expect(numbersWithDigitInside(7, 6)).toEqual([1, 6, 6]);
    });

    test('should return [3, 22, 110] for numbersWithDigitInside(11, 1)', () => {
        expect(numbersWithDigitInside(11, 1)).toEqual([3, 22, 110]);
    });

    test('should return [2, 30, 200] for numbersWithDigitInside(20, 0)', () => {
        expect(numbersWithDigitInside(20, 0)).toEqual([2, 30, 200]);
    });

    test('should return [9, 286, 5955146588160] for numbersWithDigitInside(44, 4)', () => {
        expect(numbersWithDigitInside(44, 4)).toEqual([9, 286, 5955146588160]);
    });
});
