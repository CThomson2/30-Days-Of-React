console.log('Q1');
// let age = prompt('Enter your age: ');
let age = 15;
console.log(age >= 18 ? "You are old enough to drive" : `You have ${18 - age} year(s) left before you can drive.`);
console.log('\n');

console.log('Q2');
const myAge = 21;
// let yourAge = prompt('Enter your age: ');
let yourAge = 25
if (myAge > yourAge) {
  console.log(`I am older than you by ${Math.abs(myAge - yourAge)} years.`);
} else if (yourAge > myAge) {
  console.log(`You are older than me by ${Math.abs(myAge - yourAge)} years.`);
} else {
  console.log('We are the same age!');
}
console.log('\n');

console.log('Q3');
let a = 5, b = 5;
if (a > b) {
  console.log('a is greater than b');
} else if (a < b) {
  console.log('a is less than b');
} else {
  console.log('a is equal to b');
}
// OR, using the ternary operator...
a > b
  ? console.log('a is greater than b')
  : a < b
    ? console.log('a is less than b')
    : console.log('a is equal to b');

console.log('\n');

console.log('Q4');
console.log('In JS, one can check the parity of a number by using the modulus operator to check if it is divisible by two.');
console.log('E.g. let us see if A) 7 and B) 20 are even or odd numbers');
console.log('_num_ % 2 == 0 ? console.log("EVEN") : console.log("ODD")');
console.log('Checking 7 % 2 == 0?:', 7 % 2 == 0)
console.log('Checking 20 % 2 == 0?:', 20 % 2 == 0)
console.log('\n');