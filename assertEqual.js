// console.assert(1 === 1); // => nothing happens because true
// console.assert(1 === 1.1); // => prints out "Assertion failed" to the terminal

// // FUNCTION IMPLEMENTATION
// const sum = function(a, b) {
//   return a + b;
// }

// // TEST CODE
// console.log("Testing 1 + 2")
// console.assert(sum(1, 2) === 3, "Should be 3");
// console.log("Testing 1 + 20")
// console.assert(sum(1, 20) === 3, "Should be 3"); // bad / incorrect assertion, and we see it fail!

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} is equal that ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} is different that ${expected}`);

  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);