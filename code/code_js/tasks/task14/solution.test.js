const f = require('./solution.js');
const numbers= [1, 2, 3, 4];

test('index 0 -> index 1', () => {
  expect(f(numbers, 0, 1)).toStrictEqual([2, 1, 3 ,4]);
});

test('out of range', () => {
  const logSpy = jest.spyOn(global.console, 'error').mockImplementation(() => {});
  expect(f(logSpy)).toBe(undefind);
});

test('out of range', () => {
  expect(f(numbers, 3, 3)).toBe(undefind);
});

