const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// Test cases using assertArraysEqual
assertArraysEqual(middle([1, 2, 3]), [1, 2, 3]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2]);
assertArraysEqual(middle([1, 2]), [1, 2]);