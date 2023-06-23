import calculator from '../calculator';

test('adds 2 + 4 to be 6', () => {
  expect(calculator.add(2, 4)).toBe(6);
});

test('subtracts 2 - 4 to be -2', () => {
  expect(calculator.subtract(2, 4)).toBe(-2);
});

test('divides 2 / 4 to be 0.5', () => {
  expect(calculator.divide(2, 4)).toBe(0.5);
});

test('multiplies 2 * 4 to be 8', () => {
  expect(calculator.multiply(2, 4)).toBe(8);
});
