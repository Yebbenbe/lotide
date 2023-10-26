const assert = require('chai').assert;
const _ = require('../index');


describe("#countOnly", () => {
  it("returns { `Alice`: 2 } for [`Alice`, `Bob`, `Alice`, `Eve`] and { `Alice`: true, `Bob`: false, `Eve`: false}", () => {
    assert.deepEqual(_.countOnly(["Alice", "Bob", "Alice", "Eve"], { "Alice": true, "Bob": false, "Eve": false}), { "Alice": 2 });
  });

  it("returns {} for [] and { `David`: true, `Emma`: true, `Frank`: true}", () => {
    assert.deepEqual(_.countOnly([], { "David": true, "Emma": true, "Frank": true}), {});
  });

  it("returns { `Sarah`: 2, `John`: 3 } for [`Sarah`, `John`, `Sarah`, `John`, `John`] and { `Sarah`: true, `John`: true }", () => {
    assert.deepEqual(_.countOnly(["Sarah", "John", "Sarah", "John", "John"], { "Sarah": true, "John": true }), { "Sarah": 2, "John": 3 });
  });

});