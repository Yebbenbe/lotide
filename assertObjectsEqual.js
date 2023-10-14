const eqObjects = require('./eqObjects')


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

//TESTING
assertObjectsEqual({a: 'a', b: 'b'}, {a: 'a', b: "b"});
assertObjectsEqual({a: '1', b: '2'}, {a: '1', b: "2"});
assertObjectsEqual({a: 'one', b: '3'}, {a: 'one', b: "2"});
assertObjectsEqual({a: '1', b: 'five'}, {a: 'one', b: "5"});