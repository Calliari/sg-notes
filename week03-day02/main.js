console.log('in main.js');

var capitalCityParam = 'London'; // global variable

//############# This is an Array #######
// var ages[
//   24,
//   23,
//   29,
//   32
// ];

//############# This is a object ##########
console.log('--- Objects');
var person1 = {
  firstName: 'Bob',
  lastName: 'le Plant',
  email: 'bob@spartaglobal.com',
  age: 12.5
};
var person2 = {
  firstName: 'Aretha',
  lastName: 'Franklin',
  email: 'ms.legend@example.com',
  age: 29
};
var person3 = {
  firstName: 'Joe',
  email: 4,
  hobbies: ['boxing','hitting']
};

//################## loop trhough the Objects with a specific property
var people = [ person1, person2, person3 ];

for (var i = 0; i < people.length; i++ ){
  console.log(people[i].firstName, people[i].age)
};

//################## comparison between empties Objects
var a = {};
if (a === {}){
  console.log('Yeah they are equal!');
}else{
  console.log('NOT! They are not equal!');
};

console.log('--- Functions:');
//################## functions with perameters
function createPerson( firstNameParam, lastNameParam, emailParam, ageParam){
  var newPerson = {
    firstName: firstNameParam,
    lastName: lastNameParam,
    email: emailParam,
    age: ageParam,
    capitalCity: capitalCityParam, // access global variable from within function
    fullName: function(){
      return firstNameParam + ' ' + lastNameParam + ' from ' + capitalCityParam +'.';

    }
  };

  return newPerson;
}

var harald = createPerson('Harald', 'Kumar', 'h.kumar@exaple.com', 15);
console.log('newPerson\'s full name:', harald.fullName());

var tola = createPerson('Tola', 'Olaoke', 'tolaoke@spartaglobal.co', 21);
var asma = createPerson('Asma', 'Chaima', 'achaima@spartaglobal.co', 23 );

var people = [];
  people.push(harald, tola, asma);

// for (i = 0; i < people.length ; i++){
// console.log( people[i].fullName() );
//   if (isOldEnough(people[i].age)){
//     console.log(people[i].fullName(), ' is old enough');
//   }else{
//     console.log(people[i].fullName(), ' is NOT old enough');
//   };
// }

// the '?' is a short way of doing a if statment with ternary
for (i = 0; i < people.length ; i++){
  oldEnoughComment = (isOldEnough(people[i].age))
  ? 'is old enough'
  : 'is NOT old enough'
  console.log(oldEnoughComment);
  //  console.log(people[i].fullName(), (isOldEnough(people[i].age)) ? ' is old enough' : 'is NOT old enough');
}


//####################################### function with a boolean expresion
function isOldEnough(age){
  return (age >= 16);
}

if (isOldEnough(harald.age)){
  console.log('Came in');
} else {
  console.log('Come back when you are older.');
}

// TODO:
// - scope
