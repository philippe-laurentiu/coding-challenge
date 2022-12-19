const f = require('./solution.js');
const x = [1, 2, 1, 4];
test('searchElements 1 is 2 times', () => {
  expect(f(x, 1)).toBe(2);
})

test('searchElements 20 cannot find in the array', () => {
  expect(f(x, 20)).toBe(0);
})