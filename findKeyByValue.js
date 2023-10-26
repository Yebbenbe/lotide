// findKeybyValue.js should take in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

const findKeyByValue = function(object, check) {
  // creates an array of the keys, as specified in challenge
  const keysArray = Object.keys(object);
  // loops through each key in the array of keys
  for (let key of keysArray) {
    if (object[key] === check) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;
