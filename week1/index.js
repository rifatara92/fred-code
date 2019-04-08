// variables

// var firstName = 'fred'; //string
// firstName = 10; //number

// let lastName = "belotte";

// let fullName = `{firstName} {lastName}`;
// fullName = String(firstName) + ' ' + lastName; // concatenation, add, type coercion
// fullName = `${firstName} ${lastName} ${firstName}`; // string interpolation

// const middleName = 'troubleMaker';
// //middleName = 20;

// console.log(firstName);
// console.log(typeof(firstName));

// console.log(lastName);
// console.log(typeof(lastName));

// console.log(fullName);
// console.log(middleName);

// // challenge - print all types
// let aString = 'string';
// let aNumber = 2019;
// let aBoolean = false;
// let aNull = null;
// let aUndefined = undefined;
// let aObject = {};

// console.log(typeof(aString));
// console.log(typeof(aNumber));
// console.log(typeof(aBoolean));
// console.log(typeof(aNull));
// console.log(typeof(aUndefined));
// console.log(typeof(aObject));

// functions
// function print2 (message) { //statement function
//   console.log(message);
//   console.log(arguments[1]);
// }

// let add; // undefined

// add(4,5); // undefined
// print2('before');

// function print () { //statement function
//   console.log(arguments[0]);
// }

// let add = function (a, b) { 
//   return a + b;
// };

// function log2 (data) {
//   print2(data);
// }

// print('goodbye');
// print2(undefined, 'hello');

// objects

// object literal
let person = {
  gender: null,
  name: null,
  address: null,
  talk: function (say) {
    console.log(say);
  }
};

// object constructor
function Person () {
  this.gender = null;
  //this.name = 'THE ONE';
  this.address = null;

  return this;
}

// object creator
let person5 = Object.create(person);
let person6 = Object.create({
  gender: null,
  name: null,
  address: null
});

let person2 = person; // shallow copy
let person3 = new Person();
let person4 = Person();

person.gender = 'alien';
person2.gender = 'zoiberg';
person.gender = 'me';
person3.gender = 'texan';
person4.gender = "'murican";
person5.gender = "marsian";

// console.log(person.gender);
// console.log(person2.gender);
// console.log(person3.gender);
// console.log(person4.gender);
// console.log(person5.gender);
// console.log(person5.talk('magic'));

// prototypal inheritance
let admin = {
  role: 'it'
};

function Admin () {
  this.role = 'it';
  //this.name = 'KC HALL';
}

admin.constructor = Person; // cannot dynamically change a constructor definition
Admin.prototype = new Person();

let fred = Object.create(admin);
let fred2 = new Admin();
let fred3 = new Admin();

//fred2.name = 'UTA';
fred3.name = 'UTD';

//fred.name = 'sir';
// console.log(fred.name);
// console.log(fred.role);

//console.log(person3.name);
//console.log(fred2.constructor);
//console.log(fred2.prototype.constructor);
//console.log(fred2.name);
//console.log(fred.prototype.name);
// console.log(fred2.role);
// console.log(fred3.name);
// console.log(fred3.role);
// console.log(fred2);

// scopes
// (function defaultFunc () {
//   var firstVar = 'firstVar';
//   let firstVarLet = 'firstVarLet';

//   function firstFunc () {
//     //var firstVar = 'second from the top';
//     var secondVar = 'secondVar';
//     let secondVarLet = 'secondVarLet';

//     console.log(firstVar); // 
//     console.log(secondVar);
//     console.log(firstVarLet);
//     console.log(secondVarLet);

//     return;
//     defaultFunc();
//   }

//   (firstFunc)();

//   console.log(firstVar); //
//   console.log(secondVar); // undefined
//   console.log(firstVarLet);
//   console.log(secondVarLet); // undefined
// })();

//(function () { console.log('i am a function-object calling a function'); })();

// conditionals, loops
// falsy = false, 0, '', NaN, null, undefined
if (person) {
  console.log('person.address');
}

if (1 === '1') {
  console.log('second');
}
