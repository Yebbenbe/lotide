const assert = require('chai').assert;
const _ = require('../index');

describe("#countLetters", () => {
  it("returns { s: 3, u: 1, n: 2, h: 2, i: 1, e: 2, o: 1 } for 'sunshine shoe'", () => {
    assert.deepEqual(_.countLetters("sunshine shoe"), { s: 3, u: 1, n: 2, h: 2, i: 1, e: 2, o: 1 });
  });

  it("returns {3: 1, 2: 2, 1: 3} for '111223'", () => {
    assert.deepEqual(_.countLetters("111223"), { '3': 1, '2': 2, '1': 3 });
  });

  it("returns empty object when passed empty string", () => {
    assert.deepEqual(_.countLetters(""), {});
  });
});