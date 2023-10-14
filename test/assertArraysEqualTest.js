const assertArraysEqual = require('../assertArraysEqual');

// test cases
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([6, 8, 1], [11, 8, 6]);
assertArraysEqual(['a', 'b', 'c'], ['a', 'b', 'c']);
assertArraysEqual(['b', 'c', 'a'], ['b', 'c']);
