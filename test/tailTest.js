const tail = require('../tail');
// const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), 3);
  });

  it("returns [c] for [a, b, c]", () => {
    assert.deepEqual(tail(["a", "b", "c"]), 'c'); 
  });

});

