"use strict";
// sayHello.test.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.SayHello = void 0;
// Function definition
function SayHello(name) {
    return `Hello ${name}`;
}
exports.SayHello = SayHello;
// Jest test for the function
test('SayHello function', () => {
    const result = SayHello('John');
    expect(result).toBe('Hello John');
});
//# sourceMappingURL=sayHello.test.js.map