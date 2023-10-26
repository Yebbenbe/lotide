// tail.js should take in an array and return everything except for the first item (head) of the provided array.

const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;

