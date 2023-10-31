const assert = require('chai').assert;
const _ = require('../index');


describe("#letterPositions", () => {
  it("returns {h: [0], i: [i]} for 'hi'", () => {
    assert.deepEqual(_.letterPositions("hi"), { h: [0], i: [1] });
  });

  it("returns {l: [0, 11], i: [1], g: [2], h: [3, 5], t: [4], o: [6], u: [7], s: [8, 14], e: [9], a: [12], b:[13]} for 'lighthouse labs'", () => {
    assert.deepEqual(_.letterPositions("lighthouse labs"), { l: [0, 11], i: [1], g: [2], h: [3, 5], t: [4], o: [6], u: [7], s: [8, 14], e: [9], a: [12], b: [13] });
  });

  it("returns {} for ''", () => {
    assert.deepEqual(_.letterPositions(""), {});
  });
});