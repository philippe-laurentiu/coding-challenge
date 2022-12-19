const f = require('./solution.js');

user1 = {username: 'a', email: 'a@mail.com',password: 123}
user2 = {username: 'a', email: 'a@mail.com',password: 123}

test('those objects are equality value', () => {
  expect(f.areEqual(user1, user2)).toBe(true);
});

test('those objects are not same', () => {
  expect(f.areSame(user1, user2)).toBe(false);
});