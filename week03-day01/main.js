console.log('in main.js');
var o = {}; // o for object
var s = ''; // s for string
var b = true; // b for boolean
var n = 1; // n for number
var a = []; // a for array (but it is actually an object)
console.log(typeof o);
console.log(typeof s);
console.log(typeof b);
console.log(typeof n);
console.log(typeof a);

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
