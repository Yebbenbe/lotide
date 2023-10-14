// const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns 'true' if input arrays are equal", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns 'false' if input arrays are not equal", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("returns 'false' if input arrays differ by data type", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "dog"]), false);
  });
  it("returns 'true' if both arrays are empty", () => {
    assert.deepEqual(eqArrays([], []), true);
  });

});

/* test cases, assertEqual needs a "true" arg for it's assertion process
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([6, 8, 1], [11, 8, 6]), true);
assertEqual(eqArrays(['a', 'b', 'c'], ['a', 'b', 'c']), true);
assertEqual(eqArrays(['b', 'c', 'a'], ['b', 'c']), true);
*/