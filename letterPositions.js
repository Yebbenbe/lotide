// letterPositions.js should take in a sentence (as a string) and then return all the indices (zero-based positions) in the string where each character is found.

const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (sentence[i] === " ") {
      // do nothing
    } else if (results[letter]) {
      results[letter].push(i);
      // set results at this letter to the array of indexes
    } else {
      results[letter] = [i];
      // create array at results[letter];
    }

  }
  return results;
};

module.exports = letterPositions;