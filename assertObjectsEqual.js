// dependencies
// assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
// eqArrays
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
// assertArraysEqual
const assertArraysEqual = function (arr1, arr2) {
  // runs eqArrays function. If true, areEqual === true. 
  const areEqual = eqArrays(arr1, arr2);
  if (areEqual) {
    console.log(`Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
 
}
// eqObjects
const eqObjects = function(object1, object2) {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  // checks to ensure both objects have the same number of keys
  if (arr1.length === arr2.length) {
    // for each key of arr1/object 1
    for (let key of arr1) {
      // checks to see if either key points to an array. The OR operator cannot be within Array.isArray()
      if ((Array.isArray(object1[key])) || (Array.isArray(object2[key]))) {
        // if TRUE, runs eqArrays against them, and if unequal (NOT operator), returns false
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
        // otherwise, continues
      }
      // if object2 at 'key' doesn't match object1 at 'key'
      else if (object2[key] !== object1[key]) {
        return false; // returns false
      }
    }
    // if all loops complete without returning false, return true
    return true;
  } else {
    return false; // returns false if different numbers of keys
  }
};


// new function assertObjectsEqual.js
const assertObjectsEqual = function(actual, expected) {
  const assertObjectsEqual = function(actual, expected) {
    // imports the 'util' module
    const inspect = require('util').inspect;
    // uses eqObjects function to test if they are equal
    if (eqObjects(actual, expected) === true) {
      // if yes, return string with inspected objects
      return console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      // if no, return string with inspected objects
      return console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  };
};