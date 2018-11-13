import generateNumbers from './src/generate-numbers';
import findDuplicates from './src/find-duplicates';
import printNumbers from './src/print-numbers';

const start = (n = 1000000) => {
  const numbers = global.parseInt(n, 10);

  if (Number.isNaN(numbers) || numbers < 1) {
    console.error('Provided argument is not a valid');
    process.exit(1);
  }
  console.info('generated numbers: ');
  const generatedNumbers = generateNumbers(numbers);
  printNumbers(generatedNumbers);
  console.info('--------------------');

  console.info('duplicates: ');
  const duplicates = findDuplicates(generatedNumbers);
  printNumbers(duplicates);
};

start(process.argv[2]);
