// flatten.js should take in an array of arrays and return a "flattened" version of the array.

const flatten = function (arr) {
  const result = []; // final array 'result'

  for (let element of arr) { // for each element of the array
    if (Array.isArray(element)) { // if the element is an array,
      for (const subElement of element) { // for each subelement of this array
        result.push(subElement); // push this subelement to 'result'
      }
    } else { // if the element is NOT an array
      result.push(element); // just push it to 'result'
    }
  }

  return result;
};

module.exports = flatten;