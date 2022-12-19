const f = require('./solution.js');
const y = [1, 4, 3, 2];


test('what is biggest number?', () => {
  expect(f(y)).toBe(4);
});

