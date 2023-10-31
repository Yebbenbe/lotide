const assert = require('chai').assert;
const _ = require('../index');

describe("#findKeyByValue", () => {

  it("returns 'sci_fi' when offered ({sci_fi: 'Star Trek', comedy: 'American Dad', drama: 'The Wire'},  'Star Trek')", () => {
    assert.deepEqual(_.findKeyByValue({ sci_fi: 'Star Trek', comedy: 'American Dad', drama: 'The Wire' }, "Star Trek"), "sci_fi");
  });

  it("returns 'undefined' when offered ({sci_fi: 'Star Trek', comedy: 'American Dad', drama: 'The Wire'}, 'Banana')", () => {
    assert.deepEqual(_.findKeyByValue({ sci_fi: 'Star Trek', comedy: 'American Dad', drama: 'The Wire' }, "Banana"), undefined);
  });

  it("returns 'undefined' when offered ({sci_fi: 'Star Trek', comedy: 'American Dad', drama: 'The Wire'}, '')", () => {
    assert.deepEqual(_.findKeyByValue({ sci_fi: 'Star Trek', comedy: 'American Dad', drama: 'The Wire' }, ""), undefined);
  });

  it("returns 'undefined' when offered ({}, 'Star Trek')", () => {
    assert.deepEqual(_.findKeyByValue({}, "Star Trek"), undefined);
  });

  it("returns 'undefined' when offered ({}, '')", () => {
    assert.deepEqual(_.findKeyByValue({}, ""), undefined);
  });
});
