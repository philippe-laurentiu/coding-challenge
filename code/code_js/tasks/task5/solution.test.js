const f = require('./solution.js');

test('until 5, show odd and even ', () => {
  const logSpy = jest.spyOn(console, 'log');
  f(5)
  for (let i = 0; i <= 5; i++) {
    if (i % 2 === 0) {
      expect(logSpy).toHaveBeenCalledWith((i + ' EVEN'));
    } else expect(logSpy).toHaveBeenCalledWith(i + ' ODD');
  }
});

