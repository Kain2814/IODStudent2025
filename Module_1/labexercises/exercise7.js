const greeting = "What's up ";
const name = "Rene";

console.log(greeting + name);

const sumgreeting = "this is the sum function"
console.log(sumgreeting);

/** Sum specification test
@param {number} a - first number
@param {number} b - second number
@returns {number} - the sum of a and b
*/
// this function adds two numbers
function sum(a, b) {
  return a + b;
}
// Simple test helper
function test(name, result, expected) {
  if (result === expected) {
    console.log(`passed`);
  } else {
    console.error('error');
  }
}

// Add tests
test("sum(2, 3) → 5", sum(2, 2), 5);
test("sum(0, 7) → 7", sum(0, 7), 7);
test("sum(-2, -4) → -6", sum(-2, -4), -6);


// specification test for sum
console.log(sum(2, 4)); // expected output: 6 (true)
console.log(sum(0,10)); // this has a zero (Should be true)
console.log(sum(-5, 3)); // This has a negative number (should be true...hopefully)





const subtractgreeting = "this is the subtract function"
console.log(subtractgreeting);


/** subtract specification test template
@param {number} a - first number
@param {number} b - second number
@param {number} c - third number
@returns {number} - the total of a, b, and c
*/

// this function subtracts three numbers
function subtract(a, b, c) {
  return a - b - c;
}

// specification test for subtract
console.log(subtract(6, 2, 2)); // expected output: 2
console.log(subtract(100, 30, 70)); // expected output: 70
console.log(subtract(-400, -100, 80)); // expected output: 420



const multigreeting = "this is the multiply function"
console.log(multigreeting);

/** multiply specification test template
@param {number} a - first number
@param {number} b - second number
@returns {number} - the total of a and b
*/

// this function multiplies two numbers
function multiply(a, b) {
  return a * b;
}

// specification test for multiply
console.log(multiply(10, 5)); // expected output: 50
console.log(multiply(-12, 80)); // expected output: -960
console.log(multiply(0, 100000000)); // expected output: 0



const divgreeting = "this is the divide function"
console.log(divgreeting);

/** multiply specification test template
@param {number} a - first number
@param {number} b - second number
@returns {number} - the total of a and b
*/


// this little piggy went all the way home
function divide(a, b) {
  return a / b;
}


// specification test for divide
console.log(divide(40, 2)); // expected output: 20
console.log(divide(-55, 24)); // expected output: -2.2916666666666665
console.log(divide(280, 0)); // expected output: 0







