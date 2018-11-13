import findDuplicates from './find-duplicates';

describe(('findDuplicates'), () => {
  it('should return empty array if there is no duplicate numbers in array', () => {
    expect(findDuplicates([1, 2, 4])).toEqual([]);
  });

  it('should return array with duplicate numbers if there are any', () => {
    expect(findDuplicates([1, 2, 4, 5, 5, 1])).toEqual([5, 1]);
  });

  it('should return duplicate numbers only once if they are duplicated multple times', () => {
    expect(findDuplicates([1, 2, 4, 5, 5, 5, 1])).toEqual([5, 1]);
  });
});
