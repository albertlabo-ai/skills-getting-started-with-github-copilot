const { add, subtract, multiply, divide, calculate } = require('../calculator');

describe('Calculator operations', () => {
  test('addition: 8 + 2 = 10', () => {
    expect(add(8, 2)).toBe(10);
  });

  test('subtraction: 10 - 3 = 7', () => {
    expect(subtract(10, 3)).toBe(7);
  });

  test('multiplication: 4 * 7 = 28', () => {
    expect(multiply(4, 7)).toBe(28);
  });

  test('division: 12 / 3 = 4', () => {
    expect(divide(12, 3)).toBe(4);
  });

  test('calculate with + operator returns same result as add', () => {
    expect(calculate(8, 2, '+')).toBe(10);
  });

  test('calculate with - operator returns same result as subtract', () => {
    expect(calculate(10, 3, '-')).toBe(7);
  });

  test('calculate with * operator returns same result as multiply', () => {
    expect(calculate(4, 7, '*')).toBe(28);
  });

  test('calculate with / operator returns same result as divide', () => {
    expect(calculate(12, 3, '/')).toBe(4);
  });

  test('division by zero should throw an error', () => {
    expect(() => divide(8, 0)).toThrow('Division by zero is not allowed.');
  });

  test('calculate with division by zero should throw an error', () => {
    expect(() => calculate(8, 0, '/')).toThrow('Division by zero is not allowed.');
  });

  test('unsupported operator should throw an error', () => {
    expect(() => calculate(5, 5, '^')).toThrow("Unsupported operator '^'.");
  });
});
