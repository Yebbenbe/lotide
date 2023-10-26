// findKey.js   

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