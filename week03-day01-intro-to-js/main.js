console.log('in main.js');
var o = {}; // o for object
var s = ''; // s for string
var b = true; // b for boolean
var n = 1; // n for number
var a = []; // a for array (but it is actually an object)

// the 'typeof' method print in the console the type of datatype

console.log(typeof o);
console.log(typeof s);
console.log(typeof b);
console.log(typeof n);
console.log(typeof a);

//######################## play with concatenation ##################################

console.log('Playing with different types:');
var numberAsString = '5';
var number1 = 3;
var number2 = 7;
console.log(numberAsString + number1);
console.log(typeof (numberAsString + number1));
console.log(number1 + numberAsString );
console.log(number1 + number2);
console.log('Harry' + 'Potter');
console.log('Harry' - 'Potter');

console.log(parseInt(numberAsString) + number1 + number2)
console.log(parseInt(3.1415927));
console.log(parseInt('4.1415927'));
console.log(parseInt(3.9));
console.log(parseFloat(3.1415927));
console.log(parseFloat('3.1415927'));
console.log(parseFloat('blah'));

//######################### if statement ############################
console.log('Control flow');
var moneyInPocket = 20;

if (moneyInPocket > 10){
  console.log('Another drink please!');
} else {
  console.log('Time to go home');
}

//#################### switch statment #################
var countryOfOrigin = 'France';
var greeting = '';

switch(countryOfOrigin){
  case 'France':
    greeting = 'BonJour';
    break;
  case 'Spain':
    greeting = 'Hola!';
    break;

  case 'Indonesia':
    greeting = 'Selamat sore';
    break;

  case 'Kenya':
    greeting ='Jambo'
    break;

  default:
    greeting = 'Well hello there';
    break;
}

console.log(greeting);

//################### logical ##################

var dayOfWeek = 'Thusrday';
//logical AND
if (moneyInPocket > 10 && dayOfWeek.toUpperCase() === 'Friday'){
  console.log('Pub thisarvo!');
}else{
  console.log('Bummer :-( ');
}

//################### for loop  ##########################
// a way of debugging
console.log('---truthy/false');
var truthyThings = [1, 0, 'something', '', -1, {}]

for (var i = 0; i < truthyThings.length; i++ ){
  if (truthyThings[i]) {
    console.log(' ', truthyThings[i],  ' --> truthy');
  }else{
    console.log('',  truthyThings[i],  ' --> falsey');
  }
}

//################### prompt and alert ##########################
// var yourName = prompt('What is your name?');
//
// if(yourName){
//   alert ('Nice one, ' + yourName);
// } else {
//   alert ('Not sure what your name is!')
// }
//################### loop with prompt and alert ##########################

var yourName = prompt('What is your name?');

if(yourName){
  alert ('Nice one, ' + yourName);
} else {
  alert ('Not sure what your name is!')
}

console.log('--- Loops:');
var question = 'Second time... What is your name?';
yourName = prompt(question);
while (!yourName){
  alert ('Not sure your name is!');
  yourName = prompt ('Second time... what is your name? ');
}
alert ('Nice one, '+ yourName);


do {
  prompt ('Now using a do/while loop. What is your name?');
  if(!yourName){
    alert ('Not sure what your name is!');
  }
} while(!yourName);
alert ('Nice one, ' + yourName)
