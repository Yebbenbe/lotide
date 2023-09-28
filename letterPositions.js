// FUNCTION IMPLEMENTATION
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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    //console.log(sentence[i]);  // WORKS
    // if is space, skip
    if (sentence[i] === " ") {
    // console.log(i);  // WORKS
    // this block does nothing
    // ESLINT is forcing the below curly brackets, idk why
    } else if (results[letter]) { // if results contains letter already, push i to array
      results[letter].push(i); // set results at this letter to the array of indexes
    } else {  // if no letter in results
      results[letter] = [i]; // create array at results[letter];
    }
    
  }
  return results;
};

console.log(letterPositions("my sentencce"));
