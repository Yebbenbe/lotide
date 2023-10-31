
const _ = require('./index');
const eqArrays = require('./eqArrays');

const eqObjects = function (object1, object2) {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  // checks to ensure both objects have the same number of keys
  if (arr1.length === arr2.length) {
    // for each key of arr1/object 1
    for (let key of arr1) {
      // checks to see if either key points to an array. The OR operator cannot be within Array.isArray()
      if ((Array.isArray(object1[key])) || (Array.isArray(object2[key]))) {
        // if TRUE, runs eqArrays against them, and if unequal (NOT operator), returns false
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
        // otherwise, continues
        // if object2 at 'key' doesn't match object1 at 'key'
      } else if (object2[key] !== object1[key]) {
        return false; // returns false
      }
    }
    // if all loops complete without returning false, return true
    return true;
  } else {
    return false; // returns false if different numbers of keys
  }
};

module.exports = eqObjects;