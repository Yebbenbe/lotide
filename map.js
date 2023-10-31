// map.js should take an array to map and a callback function. It should return a new array based on the results of the callback function.

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;