// findKey.js should take in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

// findKey scans obj and returns key matching the callback
const findKey = function(obj, callback) {
  // creates an array of the object's keys
  const keys = Object.keys(obj);
  for (let key of keys) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

module.exports = findKey;