function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
const _fullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log('\nfullName');
console.log(_fullName('Abel', 'Stanford'));

function addNumbers(n1, n2) {
    return n1 + n2;
}
const _addNumbers = (n1, n2) => n1 + n2;
console.log('\naddNumbers(5, 12):')
console.log(_addNumbers(5, 12));

function areaOfCircle(r) {
    const PI = Math.PI
    return PI * r ** 2;
}
const _areaOfCircle = r => Math.round(Math.PI * r**2 * 100) / 100;
console.log('\nareaOfCircle(4):')
console.log(_areaOfCircle(4));

// From now on we'll use either declarations or arrow funcs
const celsiusToFahrenheit = c => c * (9 / 5) + 32;
console.log(`\n25˚C is equal to ${celsiusToFahrenheit(25)}˚F`)

function bmi(weight, height) {
    res = Math.round((weight / height**2) * 100) / 100;
    // console.log(res);
    if (res < 18.5) {return [res, "Underweight"];}
    else if (res < 24.9) {return [res, "Normal Weight"];}
    else if (res < 29.9) {return [res, "Overweight"];}
    else {return [res, "Obese"];}
}
console.log(`With a body weight of 78kg and a height of 1.88m, your BMI is ${bmi(78, 1.88)[0]}m2, which is classed as ${bmi(72, 1.85)[1]}.`);

function checkSeason(month) {
    const year = {
        winter: ['dec', 'jan', 'feb'],
        spring: ['mar', 'apr', 'may'],
        summer: ['jun', 'jul', 'aug'],
        autumn: ['sep', 'oct', 'nov']
    }
    const season = Object.entries(year).filter( season => season[1].includes(month.toLowerCase().slice(0,3)) )[0]
    // console.log(season);
    // console.log(season[0]);
    return `${season[0][0].toUpperCase()}${season[0].slice(1)}`
}
console.log(checkSeason('June'));
console.log(checkSeason('November'));