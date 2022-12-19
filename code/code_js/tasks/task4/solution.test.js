const f = require('./solution.js');

test('speed is under 70', () => {
  expect(f(50)).toBe('OK');
});

test('expect see the points', () => {
  expect(f(97)).toBe(5);
});

test('over 12 points', () => {
  expect(f(200)).toBe('Licence suspended');
});