const assertEqual = require('./assertEqual');

// returns last value of array
const tail = function(array) {
  const tailVal = array[array.length - 1];
  return tailVal;
};

module.exports = tail;

