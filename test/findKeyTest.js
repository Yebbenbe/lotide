const assert = require('chai').assert;
const _ = require('../index');

describe("#findKey", () => {
  it("returns `noma` when entering {`Blue Hill`: { stars: 1 },`Akaleri`: { stars: 3 },`noma`: { stars: 2 }} and (x => x.stars === 2)", () => {
    assert.equal(_.findKey({ "Blue Hill": { stars: 1 }, "Akaleri": { stars: 3 }, "noma": { stars: 2 } }, x => x.stars === 2), "noma");
  });

  it("returns undefined when entering { `Blue Hill`: { stars: 1 }, `Akaleri`: { stars: 3 },`noma`: { stars: 23 } } and (x => x.stars === 2)", () => {
    assert.equal(_.findKey({ "Blue Hill": { stars: 1 }, "Akaleri": { stars: 3 }, "noma": { stars: 23 } }, x => x.stars === 2), undefined);
  });

  it("returns `Shirt` when entering { Shirt: { color: `red`, size: 5}, Pants: { color: `blue`, size: 7} } and (x => x.size === 5)", () => {
    assert.equal(_.findKey({ Shirt: { color: "red", size: 5 }, Pants: { color: "blue", size: 7 } }, x => x.size === 5), "Shirt");
  });

  it("returns undefined when entering { Shirt: { color: `red`, size: 5}, Pants: { color: `blue`, size: 7} } and (x => x.color === `black`)", () => {
    assert.equal(_.findKey({ Shirt: { color: "red", size: 5 }, Pants: { color: "blue", size: 7 } }, x => x.color === "black"), undefined);
  });
});