const f = require('./solution.js');

test('get the avarage and check the grade', () => {
  const marks = [90, 80, 50];
  expect(f(marks)).toBe('C');
});

