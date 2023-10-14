const assertEqual = require('./assertEqual');

// returns all element of array after the first
const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;

