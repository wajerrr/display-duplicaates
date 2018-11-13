const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateNumbers = (n) => {
  const generatedNumbers = [];
  for (let i = 0; i < n + 1; i += 1) {
    generatedNumbers.push(getRandomInt(1, n));
  }
  return generatedNumbers;
};

export default generateNumbers;
