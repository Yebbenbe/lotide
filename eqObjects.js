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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

/* process
check that both objects have the same number of keys
use Object.keys() to create arrays, then compare .length property
check that the value of each key is the same between object 1 and 2

*/
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


// Test cases

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

// eqObjects(shirtObject , anotherShirtObject); // => true
// assertEqual(shirtObject, anotherShirtObject); // fails, can't compare obj
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // WORKS


// eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // WORKS
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // WORKS
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // WORKS
assertEqual(eqObjects(shirtObject, multiColorShirtObject), false); //  WORKS