function createUser(username, email, password){
  return {
    username,
    email,
    password
  };
}
let user1 = createUser('a', 'a@mail.com', '123')
let user2 = createUser('a', 'a@mail.com', '123')

function areEqual(user1, user2){
  if(user1.username === user2.username && user1.email === user2.email && user1.password === user2.password){
    return true
  }
  return false
};

function areSame(user1, user2){
if(user1 === user2){
  return true
}
  return false
}

console.log(areEqual(user1, user2));
console.log(areSame(user1, user2));

// export
module.exports = {}
module.exports.areEqual = areEqual;
module.exports.areSame = areSame;