// title: Object Equality #
// language: js #
// dificulty: ** #
// topic: functions conditions #

// taskdescription: write two funtions that check two object user1 and user2 is eqal or same #

// code:
function createUser(username, email, password){
  return {
    username,
    email,
    password
  };
}
let user1 = createUser('a', 'a@mail.com', 123)
let user2 = createUser('a', 'a@mail.com', 123)

function areEqual(user1, user2){
  // your code
}

function areSame(user1, user2){
  // your code
}

console.log(areEqual(user1, user2));
console.log(areSame(user1, user2));
// #