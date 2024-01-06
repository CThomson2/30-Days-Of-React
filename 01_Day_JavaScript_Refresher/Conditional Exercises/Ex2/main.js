console.log('Q1');
let grade = parseInt(prompt('What was your grade as a percentage?'));
console.log(grade);
switch (grade) {
  case grade >= 80:
    console.log('A');
    break;
  case grade >= 70:
    console.log('B');
    break;
  case grade >= 60:
    console.log('C');
    break;
  case grade >= 50:
    console.log('D');
    break;
  case grade >= 0:
    console.log('F');
    break;
  default:
    console.log('Invalid grade, must be between 0 and 100');
}

console.log('\n');


console.log('Q2');
let month = prompt('What is the current month?').slice(0, 3).toLowerCase();
switch (month) {
  case ['dec', 'jan', 'feb'].includes(month):
    console.log('The season is Winter');
    break;
  case ['mar', 'apr', 'may'].includes(month):
    console.log('The season is Spring');
    break;
  case ['june', 'jul', 'aug'].includes(month):
    console.log('The season is Summer');
    break;
  case ['sep', 'oct', 'nov'].includes(month):
    console.log('The season is Autumn');
    break;
  default:
    console.log('Invalid input');
    break;
}