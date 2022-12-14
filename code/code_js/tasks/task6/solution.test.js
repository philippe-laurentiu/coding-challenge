const f = require('./solution.js');

test('add 2 + 2 expect 4', () => {
  expect(f(2, 2)).toBe(4);
});

test('add 1 + 3 expect 4', () => {
  expect(f(1, 3)).toBe(4);
});