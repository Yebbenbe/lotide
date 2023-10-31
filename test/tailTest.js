const assert = require('chai').assert;
const _ = require('../index');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(_.tail([1, 2, 3]), [2, 3]);
  });

  it("returns [b, c] for [a, b, c]", () => {
    assert.deepEqual(_.tail(["a", "b", "c"]), ['b', 'c']);
  });

});