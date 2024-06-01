// import { webTechs } from './ex2.js/webTechs';
// import { countries } from './ex2.js/countries';
// ^^ modules don't work on local host, needs http server

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]

console.log('Q1-2');
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text)
const words = text
  .split(' ')
  .map(word => {
    if (word.includes('.') || word.includes(',')) {
      word = word.substring(0, word.length - 1);
    }
    return word;
  })
console.log(words);
console.log(words.length);
console.log('\n');

console.log('Q3');
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart);
shoppingCart.includes('Meat') || shoppingCart.unshift('Meat');
shoppingCart.includes('Sugar') || shoppingCart.push('Sugar');
// if (prompt("Are you allergic to honey? (y/n)") === 'y') {
//   shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
// }
shoppingCart.splice(shoppingCart.indexOf('Honey'), 1); // changed to avoid prompting every time

shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
console.log(shoppingCart);
console.log('\n');

console.log('Q4');
countries.includes('Ethiopia') ? console.log('ethiopia'.toUpperCase()) : countries.push('Ethiopia');
console.log(countries);
console.log('\n');

console.log('Q5');
webTechs.includes('Sass') ? console.log('Sass is a CSS preprocess') : webTechs.push('Sass') & console.log(webTechs);
console.log('\n');

console.log('Q6');
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
console.log('\n');