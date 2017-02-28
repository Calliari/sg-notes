console.log('in main.js');
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

var people = [ person1, person2, person3 ];

for (var i = 0; i < people.length; i++ ){
  console.log(people[i].firstName, people[i].age)
};

var a = {};
if (a === {}){
  console.log('Yeah they are equal!');
}else{
  console.log('NOT! They are not equal!');
};

//############# This is an Array #######
// var ages[
//   24,
//   23,
//   29,
//   32
// ];
