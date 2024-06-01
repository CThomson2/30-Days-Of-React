// Simple callback function, the function could be any name
const square = (n) => {
  return n ** 2;
}

// function take callback function as param
function exponentiate(callback, n) {
  return callback(n) * n
}

const cube = exponentiate(square, 3);
console.log(cube); // 27

// Higher order function returning an other function
const higherOrder = n => {
    const doSomething = m => {
      const doWhatEver = t => {
        return 2 * n + 3 * m + t
      }
      return doWhatEver
    }
    return doSomething
  }

// assigns the function doSomething to new var, with parameter n preset to 5
const singleNestedFunc = higherOrder(5)
// calls f1 with n = 5, returns nested f2 and immediately calls it with m = -2
//  then assigns new var below to final nested function returned by doSomething
//  with paramaters n = 5 and m = -2 preset
const lowerNestedFunc = higherOrder(5)(-2)
console.log(lowerNestedFunc) // function statement
console.log(lowerNestedFunc(1)) // return value with t = 1, should be 5

console.log(higherOrder(2)(3)(10)) // calls all funcs in one line, returning 23