const assertArraysEqual = require('../assertArraysEqual');

const assert = require('chai').assert;
describe("#head", () => {
  it("returns equal", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });
  it("returns not-equal", () => {
    assert.strictEqual(assertArraysEqual([6, 8, 1], [11, 8, 6])); 
  });
  it("returns equal", () => {
    assert.strictEqual(assertArraysEqual(['a', 'b', 'c'], ['a', 'b', 'c']));
  });
  it("returns not equal", () => {
    assert.strictEqual(assertArraysEqual(['b', 'c', 'a'], ['b', 'c'])); 
  });
});

/*  test cases
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([6, 8, 1], [11, 8, 6]);
assertArraysEqual(['a', 'b', 'c'], ['a', 'b', 'c']);
assertArraysEqual(['b', 'c', 'a'], ['b', 'c']);
*/ 