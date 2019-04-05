// 3 -> 4 -> 2 -> 1
// index -> user -> store -> order -> pizza  

let User = require('./user');

function createUser (name, address) {
  let u = new User.User();

  u.id = name;
  u.address = address;

  console.log(u);
}

createUser('fred', 'UT Arlington');
