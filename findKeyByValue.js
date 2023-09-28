// assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// findKeybyValue

const findKeyByValue = function(object, check) {
  // creates an array of the keys, as specified in challenge
  const keysArray = Object.keys(object);
  // loops through each key in the array of keys
  for (let key of keysArray) {
    if (object[key] === check) {
      return key;
    }
  }
  return undefined;
  /* FOR IN method, not wanted by challenge
  for (let key in object) {
  if (object[key] === value) {
  return key; }} */
};

// Test case
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Passion of the Christ"), "Fantasy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Passion of the Christ"), undefined);