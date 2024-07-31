/*

    Collatz Conjecture Length

    The Collatz Conjecture states that for any positive natural number n, this process:

    if n is even, divide it by 2
    if n is odd, multiply it by 3 and add 1
    repeat
    will eventually reach n = 1.

    For example, if n = 20, the resulting sequence will be:

    [ 20, 10, 5, 16, 8, 4, 2, 1 ]
    Write a program that will output the length of the Collatz Conjecture for any given n.
    In the example above, the output would be 8.

*/

export function collatz(n: number): number {
    let steps = 0;
    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
        steps++;
    }
    return steps + 1; // including the initial number itself
}

// Jest test cases for the collatz function
describe("collatz function", () => {
    it("Basic Tests", () => {
        expect(collatz(20)).toBe(8);
        expect(collatz(15)).toBe(18);
    });

    it("Additional Tests", () => {
        expect(collatz(1)).toBe(1); // Already at 1, so length is 1
        expect(collatz(2)).toBe(2); // Sequence: [2, 1], length is 2
        expect(collatz(3)).toBe(8); // Sequence: [3, 10, 5, 16, 8, 4, 2, 1], length is 8
    });
});