// takeUntil.js should take in an array to work with and a callback function. The function will return a slice of the array with elements taken from the beginning. It should keep going until the callback/predicate returns a truthy value.

const takeUntil = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array.slice(0, i);
    }
  }
};

module.exports = takeUntil;