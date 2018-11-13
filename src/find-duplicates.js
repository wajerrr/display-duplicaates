const findDuplicates = (numbers) => {
  const set = {};
  const duplicates = [];

  numbers.forEach((number) => {
    if (set[number] === undefined) {
      set[number] = 1;
    // I have assumed we will return duplicate number only once
    // i.e if input [3,3,3] output will be [3] not [3,3]
    } else if (set[number] === 1) {
      set[number] = 2;
      duplicates.push(number);
    }
  });

  return duplicates;
};

export default findDuplicates;
