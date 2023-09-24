// assertEqual.js
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  // checks to make sure both arrays are the same length
  if (arr1.length !== arr2.length) {
    return false;
  }
  // iterates through array 1, comparing each element to array 2
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  // If all elements are equal, return true
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  // runs eqArrays function. If true, areEqual === true. 
  const areEqual = eqArrays(arr1, arr2);
  if (areEqual) {
    console.log(`Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
 
}

// TEST CASES. assertEqual needs a "true" arg for it's assertion process
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([6, 8, 1], [11, 8, 6]), true);
assertEqual(eqArrays(['a', 'b', 'c'], ['a', 'b', 'c']), true);
assertEqual(eqArrays(['b', 'c', 'a'], ['b', 'c']), true);