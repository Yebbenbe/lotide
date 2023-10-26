const assert = require('chai').assert;
const _ = require('../index');

describe("#without", () => {
  it('returns ["hello", "world"] for (["hello", "world", "lighthouse"], ["lighthouse"])', () => {
    assert.deepEqual(_.without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);
  });

  it('returns [1, 3] for ([1, 2, 3], [2])', () => {
    assert.deepEqual(_.without([1, 2, 3], [2]), [1, 3]);
  });

    it('returns [] for ([1], [1])', () => {
    assert.deepEqual(_.without([1], [1]), []);
  });

});