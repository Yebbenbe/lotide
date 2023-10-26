// without.js should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

const without = function(numArray, itemsToRemove) {
  const result = [];
  // iterates through the source items, checking if they are found in "items to remove"
  for (const item of numArray) {
    let found = false;
    // iterates through itemsToRemove, checking them against each source item
    for (const removeItem of itemsToRemove) {
      if (item === removeItem) {
        // updates found to true if done
        found = true;
      } else {
        // pushes to 'result' otherwise
        result.push(item);
      }
    }

  }
  return result;
};

module.exports = without;