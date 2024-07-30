// sayHello.test.ts

// Function definition
function SayHello(name: string): string {
    return `Hello ${name}`;
}

// Jest test for the function
test('SayHello function', () => {
    const result = SayHello('Sergey');
    expect(result).toBe('Hello Sergey');
});

// Export the function if needed elsewhere
export { SayHello };
