const f = require('./solution.js');
const array = [1, 2, 3, 4, 1];

test('showing except 1 and 2', () => {
  expect(f(array, [1, 2])).toStrictEqual([3, 4]);
});

