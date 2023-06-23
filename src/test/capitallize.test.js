import capitalize from '../capitalize';

test('capitalizes "The king" to be "THE KING"', () => {
  expect(capitalize('The king')).toBe('THE KING');
});
