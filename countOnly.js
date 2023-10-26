// countOnly.js should take in a collection of items and return counts for a specific subset of those items.

const countOnly = function(allItems, itemsToCount) {
  let results = {};
  for (let item of allItems) {
     // if itemsToCount is TRUTHY at the key matching current item
    if (itemsToCount[item]) {
      results[item] = (results[item] || 0) + 1;
    }
  }
  return results;
};

module.exports = countOnly;