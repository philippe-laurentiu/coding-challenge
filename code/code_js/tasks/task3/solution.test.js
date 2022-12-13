const f = require('./solution.js');

test('divisible by 3', () => {
  expect(f(3)).toBe('Fizz');
});

test('divisible by 5', () => {
  expect(f(10)).toBe('Buzz');
});

test('divisible by 3 and 5', () => {
  expect(f(30)).toBe('FizzBuzz');
});

test('input is not number', () => {
  expect(f(null)).toBe('Not a number');
});