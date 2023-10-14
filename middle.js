const middle = function(arr) {
  const length = arr.length;

  if (length <= 2) {
    // no middle for arrays with one or two elements
    return [];
  }

  if (length % 2 === 1) {
    // odd number of elements, return a single middle element
    const middleIndex = Math.floor(length / 2);
    return [arr[middleIndex]];
  } else {
    // even number of elements, return two middle elements
    const middleIndex1 = length / 2 - 1;
    const middleIndex2 = length / 2;
    return [arr[middleIndex1], arr[middleIndex2]];
  }
};

module.exports = middle;