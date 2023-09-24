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

const assertArraysEqual = function(arr1, arr2) {
  // runs eqArrays function. If true, areEqual === true.
  const areEqual = eqArrays(arr1, arr2);
  if (areEqual) {
    console.log(`Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
 
};

const flatten = function(arr) {
  const result = []; // final array 'result'
  
  for (let element of arr) { // for each element of the array
    if (Array.isArray(element)) { // if the element is an array,
      for (const subElement of element) { // for each subelement of this array
        result.push(subElement); // push this subelement to 'result'
      }
    } else { // if the element is NOT an array
      result.push(element); // just push it to 'result'
    }
  }
  
  return result;
};