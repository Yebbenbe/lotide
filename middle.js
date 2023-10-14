const middle = function(arr) {
  const length = arr.length;

  if (length <= 2) {
    return []; // No middle for arrays with one or two elements
  }

  if (length % 2 === 1) {
    // Odd number of elements, return a single middle element
    const middleIndex = Math.floor(length / 2);
    return [arr[middleIndex]];
  } else {
    // Even number of elements, return two middle elements
    const middleIndex1 = length / 2 - 1;
    const middleIndex2 = length / 2;
    return [arr[middleIndex1], arr[middleIndex2]];
  }
};

module.exports = middle;