import generateNumbers from './src/generate-numbers';
import findDuplicates from './src/find-duplicates';
import printNumbers from './src/print-numbers';

const start = (n = 1000000) => {
  const numbers = global.parseInt(n, 10);
  if (Number.isNaN(numbers) || numbers === 0) {
    console.error('Provided argument is not a valid');
    process.exit(1);
  }

  const generatedNumbers = generateNumbers(numbers);
  const duplicates = findDuplicates(generatedNumbers);
  printNumbers(duplicates);
};

start(process.argv[2]);
