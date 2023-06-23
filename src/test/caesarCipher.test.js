import caesarCipher from '../caesarCipher';

describe('Caesar Cipher', () => {
  test('Encryption with Shift greater than 26', () => {
    expect(caesarCipher('hello', 30)).toBe('lipps');
  });

  test('Encryption with Shift less than 0', () => {
    expect(caesarCipher('hello', -3)).toBe('ebiil');
  });

  test('Encryption with Shift equal to 0', () => {
    expect(caesarCipher('hello', 0)).toBe('hello');
  });

  test('Encryption with mixed-case plaintext', () => {
    expect(caesarCipher('HeLLo WoRLd', 3)).toBe('KhOOr ZrUOg');
  });

  test('Encryption with special characters and spaces', () => {
    expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
  });
});
