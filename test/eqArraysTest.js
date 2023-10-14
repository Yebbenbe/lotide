const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// test cases, assertEqual needs a "true" arg for it's assertion process
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([6, 8, 1], [11, 8, 6]), true);
assertEqual(eqArrays(['a', 'b', 'c'], ['a', 'b', 'c']), true);
assertEqual(eqArrays(['b', 'c', 'a'], ['b', 'c']), true);