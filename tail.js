const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} is equal that ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} is different that ${expected}`);

  }
};

const tail = function(array) {
  return array.slice(1);
};

console.log(tail(["A","B","C"]));
// Comparing two arrays always will be false because they are different objects. Workaround 1) compare strings instead. 2) Compare item by item
assertEqual(JSON.stringify(tail(["A","B","C"])), JSON.stringify(["B","C"]));
assertEqual((tail(["A","B","C"])[0]),"B");
assertEqual(tail([]), undefined);
