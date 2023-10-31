// assertArraysEqual.js should take in two arrays and console.log an appropriate message to the console.
const _ = require('./index');
const eqArrays = require('./eqArrays');

const assertArraysEqual = function (arr1, arr2) {
  // runs eqArrays function. If true, areEqual === true.
  const areEqual = eqArrays(arr1, arr2);
  if (areEqual) {
    console.log(`Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`Assertion Failed: [${arr1}] !== [${arr2}]`);
  }

};

module.exports = assertArraysEqual;