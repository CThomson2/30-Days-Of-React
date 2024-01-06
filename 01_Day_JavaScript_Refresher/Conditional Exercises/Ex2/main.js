console.log('Q1');
let grade = parseInt(prompt('What was your grade as a percentage?'));
console.log(grade);

if (grade >= 80) {
  console.log('A');
} else if (grade >= 70) {
  console.log('B');
} else if (grade >= 60) {
  console.log('C');
} else if (grade >= 50) {
  console.log('D');
} else if (grade >= 0) {
  console.log('F');
} else {
  console.log('Invalid grade, must be between 0 and 100');
}

console.log('\n');


console.log('Q2');
let month = prompt('What is the current month?').slice(0, 3).toLowerCase();
console.log(month);
if (['dec', 'jan', 'feb'].includes(month)) {
  console.log('The season is Winter');
} else if (['mar', 'apr', 'may'].includes(month)) {
  console.log('The season is Spring');
} else if (['june', 'jul', 'aug'].includes(month)) {
  console.log('The season is Summer');
} else if (['sep', 'oct', 'nov'].includes(month)) {
  console.log('The season is Autumn');
} else {
  console.log('Invalid input');
}