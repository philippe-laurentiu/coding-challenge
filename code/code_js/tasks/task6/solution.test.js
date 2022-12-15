const f = require('./solution.js');

test('what value is truthy?', () => {
  const array = [0, null, undefined, "", 2, ,'hello',[1,2]];
  expect(f(array)).toBe(3);
});

