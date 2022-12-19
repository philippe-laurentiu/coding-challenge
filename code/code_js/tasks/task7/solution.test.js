const f = require('./solution.js');

test('knowing how to access key and value in the object', () => {
  const logSpy = jest.spyOn(console, 'log');
  const movie = {
    title: "a",
    releaseYear: 2022,
    rating: 4.5,
    director: "b"
  };
  f(movie)
  expect(logSpy).toHaveBeenCalledWith('title', 'a');
  expect(logSpy).toHaveBeenCalledWith('director', 'b');
});

