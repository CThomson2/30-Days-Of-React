function solveQuadratic(a, b, c) {
    const rootPos = (-b + Math.sqrt(b**2 - 4 * a * c)) / (2 * a);
    const rootNeg = (-b - Math.sqrt(b**2 - 4 * a * c)) / (2 * a);
    if (isNaN(rootPos)) {
        console.log("This function cannot work with complex numbers");
        return;
    }
    return [rootPos, rootNeg];
}
console.log(solveQuadratic(1, -1, 0));

function printArray(arr) {
    arr.forEach(el => {
        console.log(el)
    });
}
printArray([5, 2, 'dog', true])

function showDateTime() {
    const date = new Date();
    const dateConfig = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    }
    return date.toLocaleString('en-US', dateConfig)
}
console.log(showDateTime());

function swapVals(a, b) {
    const temp = a;
    a = b;
    b = temp;
    console.log(`a = ${a}, b = ${b}`);
    return [a, b];
}
let a = 4, b = 7;
console.log(`swapVals(a = 4, b = 7)`);
a, b = swapVals(a, b);
console.log("global var change: ", a, b);

function reverseArray(arr) {
    revArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        revArr.push(arr[i]);
    }
    return revArr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

function capitaliseArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase();
    }
    return arr;
}
console.log(capitaliseArray(['dog', 'eat', 'food']));

const addItem = (arr, item) => arr.concat([item]);
console.log(addItem([1, 3, 5], 7));

const removeItem = (arr, index) => arr.slice(0, index).concat(arr.slice(index + 1));
console.log(removeItem([1, 2, 3, 4, 5], 3));

function countEvensAndOdds(n) {
    if (n % 2 != 0) {
        console.log(`The number of odds is ${(n + 1)/2}`);
        console.log(`The number of odds is ${(n + 1)/2}`);
    } else {
        console.log(`The number of odds is ${n/2}`);
        console.log(`The number of odds is ${n/2 + 1}`);
    }
}
console.log('100:', countEvensAndOdds(100));
console.log('57:', countEvensAndOdds(57));

function sumNums() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
    // arguments is not an array, it's technically an object, so array methods cannot be used
    // return arguments.forEach(el => console.log(el));
    // return arguments.reduce( (acc, i) => acc + i );
}
const sumNumsArrow = (...args) => args.reduce( (acc, i) => acc + i )
console.log(sumNums(6, 3, 2, 1));
console.log(sumNumsArrow(6, 3, 2, 1));

function userIdGenerator() {
    let id = '';
    const numCharCodes = [...Array(10).keys()].map(n => n + 48);
    const lowerCharCodes = [...Array(26).keys()].map(n => n + 65);
    const upperCharCodes = [...Array(26).keys()].map(n => n + 97);
    const idCharCodes = numCharCodes.concat(lowerCharCodes).concat(upperCharCodes);
    for (let i = 0; i < 7; i++) {
        id += String.fromCharCode(
            idCharCodes[Math.floor(Math.random() * idCharCodes.length)]
        );
    }
    return id;
}

// console.log(userIdGenerator())
// console.log(userIdGenerator())
// console.log(userIdGenerator())

console.log('\nLevel3\n');

function idCharCodeArray() {
    const numCharCodes = [...Array(10).keys()].map(n => n + 48);
    const lowerCharCodes = [...Array(26).keys()].map(n => n + 65);
    const upperCharCodes = [...Array(26).keys()].map(n => n + 97);
    return numCharCodes.concat(lowerCharCodes).concat(upperCharCodes);
}

function idGeneratorByUser() {
    const idCharCodes = idCharCodeArray();
    const ids = [];
    const numChars = prompt('Enter the length of the user IDs: ');
    const numIds = prompt('Enter the number of user IDs desired: ');
    for (let i = 0; i < numIds; i++) {
        let id = '';
        for (let i = 0; i < numChars; i++) {
            id += String.fromCharCode(
                idCharCodes[Math.floor(Math.random() * idCharCodes.length)]
            );
        }
        ids.push(id);
    }
    return ids.join('\n');
    // return ids.toString();
}
// console.log(idGeneratorByUser())


function generateColors(type, amt) {
    const colors = [];
    const randCode = function() {
        return type == 'rgb' 
            ? Math.floor(Math.random() * 256)
            : Math.floor(Math.random() * 16);
    }
    for (let i = 0; i < amt; i++) {
        if (type == 'hex') {
            let color = '#';
            const hexCodes = [...Array(10).keys()].concat(['a', 'b', 'c', 'd', 'e', 'f']);
            for (let i = 0; i < 6; i++) {
                color += hexCodes[randCode()];
            }
            colors.push(color);
        } else if (type == 'rgb') {
            colors.push(`rgb(${randCode()}, ${randCode()}, ${randCode()})`);
        } else {
            return 'Invalid color scheme. Please input "hex" or "rgb".'
        }
    }
    return colors.join('\n');
}
console.log(generateColors('rgb', 4))
console.log(generateColors('hex', 4))

console.log('\n');

function shuffleArray(arr) {
    // const newArr = Array(arr.length).fill(0);
    const newArr = [];
    // const len = arr.length;
    while (arr.length) {
        let i = Math.floor(Math.random() * arr.length);
        newArr.push(arr[i]);
        arr = arr.slice(0,i).concat(arr.slice(i+1));
    }
    return newArr;
}
console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8]));
console.log('\n');

function factorial(n) {
    let res = 1;
    while (n > 1) {
        res *= n;
        n--;
    }
    return res;
}
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(6));
console.log('\n');

function isEmpty(param) {
    if (typeof param != 'object' || param == null) { return; }
    console.log(Object.keys(param));
    return Object.keys(param).length ? false : true;
    // try {
    //     return param.length ? false : true;
    // } catch (e) {
    //     console.log(e)
    //     return [...param.keys().length] ? false : true
    // }
}
console.log(isEmpty(null));
console.log(isEmpty({a: 2}));
console.log(isEmpty({}));
console.log(isEmpty([1, 2]));
console.log(isEmpty([]));
console.log(isEmpty(true));
console.log('\n');

function average(arr) {
    if (arr.some( el => typeof el != 'number')) {
        console.log('Please input an array solely consisting on numerical values.');
        return;
    }
    return arr.reduce( (acc, i) => acc + i ) / arr.length;
}
console.log("average: ", average([2, 5, 53]));
console.log('\n');