console.log('### Level 1 ###');

const dog = {};
dog.name = 'Rover';
dog.legs = 4;
dog.color = 'tan';
dog.age = 8;
dog.bark = function () {
  return "woof woof!";
};

// const entries = Object.entries(dog);
// console.log(entries);
// for (const e of entries) {
//   console.log(e[0], e[1], endline = '');
// }
for ([key, val] of Object.entries(dog)) {
  console.log(`${key}: ${typeof val != 'function' ? val : val()}`);
}
dog.breed = 'Labrador';
dog.getDogInfo = function () {
  const statement = `I am a ${this.color} ${this.breed} called ${this.name}! At ${this.age} years old, I still have ${this.legs} legs. I love my life! ${this.bark()}`;
  return statement;
}
console.log(dog.getDogInfo());
console.log('\n');


console.log('### Level 2 ###');

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

console.log('Q1');
let mostSkilledUser, skillCount = 0;
for (const user in users) {
  mostSkilledUser = users[user].skills.length > skillCount ? user : mostSkilledUser;
}
console.log(`The user ${mostSkilledUser} has the most skills, with a total of ${users[mostSkilledUser].skills.length}`);
console.log('\n');


console.log('Q2');
// console.log(Object.entries(users))
const activeUsers = Object.values(users).filter(val => val.isLoggedIn);
console.log(`There are currently ${activeUsers.length} users logged in.`);
const usersWith50PlusPts = Object.values(users).filter(val => val.points >= 50);
console.log(`There are ${usersWith50PlusPts.length} users with 50 points or more.`);
console.log('\n');

console.log('Q3')
const mernUsers = [];
Object.entries(users).forEach(user => {
  if (user[1].skills.includes('MongoDB', 'Express', 'React', 'Node')) {
    console.log(user[0]);
    mernUsers.push(user[0])
  }
})
console.log(`The MERN developers consist of: ${mernUsers.splice(0, mernUsers.length - 1).join(', ')} and ${mernUsers}`);
console.log('\n');

console.log('Q4');
const myObj = Object.assign({
  Conrad: {
    email: 'conrad@thomson.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'React', 'C++'],
    age: 21,
    isLoggedIn: true,
    points: 45
  }
}, users)
console.log(myObj);
console.log('\n');

console.log('Q5 & Q6');
console.log("All object keys:", Object.keys(users));
console.log("All object values:", Object.values(users));
console.log('\n')


console.log('Q7');

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


