import analyzeArray from '../analyzeArray';

describe('analyzeArray', () => {
  test('returns correct object for array of positive numbers', () => {
    const arr = [1, 2, 3, 4, 5];
    const expected = {
      average: 3,
      min: 1,
      max: 5,
      length: 5,
    };

    const result = analyzeArray(arr);

    expect(result).toEqual(expected);
  });

  test('returns correct object for array of negative numbers', () => {
    const arr = [-1, -2, -3, -4, -5];
    const expected = {
      average: -3,
      min: -5,
      max: -1,
      length: 5,
    };

    const result = analyzeArray(arr);

    expect(result).toEqual(expected);
  });

  test('returns correct object for array of mixed positive and negative numbers', () => {
    const arr = [-1, 2, -3, 4, -5];
    const expected = {
      average: -0.6,
      min: -5,
      max: 4,
      length: 5,
    };

    const result = analyzeArray(arr);

    expect(result).toEqual(expected);
  });

  test('returns correct object for empty array', () => {
    const arr = [];
    const expected = {
      average: null,
      min: null,
      max: null,
      length: 0,
    };

    const result = analyzeArray(arr);

    expect(result).toEqual(expected);
  });
});
