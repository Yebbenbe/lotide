const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION
const tail = function(array) {
  const newArray = array[array.length - 1];
  return newArray;
};

module.exports = tail;