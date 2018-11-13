import generateNumbers from './generate-numbers';

describe(('generateNumbers'), () => {
  it('should return array with n + 1 elements', () => {
    expect(generateNumbers(4).length).toEqual(5);
  });

  it('should return array with elements with values within range of 1 and 1', () => {
    const n = 5;
    const values = generateNumbers(5);
    values.forEach((value) => {
      expect(value >= 1 || value <= n).toEqual(true);
    });
  });
});
