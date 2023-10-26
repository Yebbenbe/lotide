// eqArrays.js

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
  // if all elements are equal, return true
  return true;
};

module.exports = eqArrays;