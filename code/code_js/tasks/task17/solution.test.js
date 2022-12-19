const o = require('./solution.js');

test('two movie title need to show', () => {
  expect(o[0].title).toBe('Creed')
  expect(o[1].title).toBe('Django')
});

