import printNumbers from './print-numbers';

describe('printNumbers', () => {
  let consoleTemp;
  beforeEach(() => {
    consoleTemp = console;
    console = { log: jest.fn() };
  });
  afterEach(() => {
    console = consoleTemp;
  });
  it('should print all elements from provided array', () => {
    const args = [1, 2, 3, 4];
    printNumbers(args);
    expect(console.log.mock.calls.length).toEqual(args.length);
    args.forEach((arg, index) => {
      expect(console.log.mock.calls[index]).toEqual([args[index]]);
    });
  });
});
