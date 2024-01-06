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

const mernUsers = [];
Object.entries(users).forEach( user => {
    if (user[1].skills.includes('MongoDB', 'Express', 'React', 'Node')) {
        console.log(user[0]);
        mernUsers.push(user[0])
    }
} )
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
