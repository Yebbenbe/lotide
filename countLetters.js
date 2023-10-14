
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
  return resultsObj;
};

console.log(countLetters("abcddfj"));