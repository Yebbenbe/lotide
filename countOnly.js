
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let results = {};
  for (let item of allItems) {  // for each name in the array
    if (itemsToCount[item]) { // if itemsToCount is TRUTHY at the key matching current item
      results[item] = (results[item] || 0) + 1; // better way of doing this. This catches the FALSEY (0) scenario from an uninit key
    }
  }
  return results;
};




// if (item === itemsToCount[count]) { // if the name === object@key
// console.log(item, count, itemsToCount[count]);
//  results[item] ++; // add to results object @ item key
// }

// Test code
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];


// how the function is called
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// checks to ensure the object matches necessary result
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
