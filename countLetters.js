// countLetters.js should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

const countLetters = function(sentence) {
  const resultsObj = {};
  for (let letter of sentence) {
  // if the letter already exists in resultsObj, add 1 to it
    if (resultsObj[letter]) {
      resultsObj[letter] += 1;
    } else {
    // initialize / create a key in resultsObj for that letter, set to 1
      resultsObj[letter] = 1;
    }
  }
  delete resultsObj[" "];
  return resultsObj;
};

module.exports = countLetters;