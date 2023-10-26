// assertObjectsEqual.js should take in two objects and console.log an appropriate message to the console.
const _ = require('./index');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const assertObjectsEqual = function(actual, expected) {
    // imports the 'util' module
    const inspect = require('util').inspect;
    // uses eqObjects function to test if they are equal
    if (_.eqObjects(actual, expected) === true) {
      // if yes, return string with inspected objects
      return console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      // if no, return string with inspected objects
      return console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  };
};

module.exports = assertObjectsEqual;