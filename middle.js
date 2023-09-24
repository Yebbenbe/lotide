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

const middle = function(arr) {
  const length = arr.length;

  if (length <= 2) {
    return []; // No middle for arrays with one or two elements
  }

  if (length % 2 === 1) {
    // Odd number of elements, return a single middle element
    const middleIndex = Math.floor(length / 2);
    return [arr[middleIndex]];
  } else {
    // Even number of elements, return two middle elements
    const middleIndex1 = length / 2 - 1;
    const middleIndex2 = length / 2;
    return [arr[middleIndex1], arr[middleIndex2]];
  }
};


assertArraysEqual(middle([1, 2, 3]), [1, 2, 3]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2]);
assertArraysEqual(middle([1, 2]), [1, 2]);