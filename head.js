const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} is equal that ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} is different that ${expected}`);

  }
};

const head = function(array) {
  return array[0];
};

console.log(head(["A","B","C"]));

assertEqual(head([5,6,7]), 5);
assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");