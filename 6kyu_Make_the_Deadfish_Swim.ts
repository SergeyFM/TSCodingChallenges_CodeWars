/*

    Make the Deadfish Swim

    Write a simple parser that will parse and run Deadfish.

    Deadfish has 4 commands, each 1 character long:

    i increments the val (initially 0)
    d decrements the val
    s squares the val
    o outputs the val into the return array
    Invalid characters should be ignored.

    parse("iiisdoso") => [8, 64]

*/

export function parse(data: string): number[] {

    let val = 0
    const res: number[] = []

    const oper: { [key: string]: () => void } = {
        'i': () => val++,
        'd': () => val--,
        's': () => val *= val,
        'o': () => res.push(val)
    }

    for (const c of data)
        if (oper[c]) oper[c]();

    return res;
}

describe('deadfishSwimParse', () => {
    test('should return a correct result', () => {
        expect(parse("iiisdoso")).toEqual([8, 64]);
        expect(parse("iiisxxxdoso")).toEqual([8, 64]);
    });
});