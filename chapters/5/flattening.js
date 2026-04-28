let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(
  arrays.reduce((flattenedArray, array) => {
    for (let n of array) {
      flattenedArray.push(n);
    }
    return flattenedArray;
  }, []),
);
// → [1, 2, 3, 4, 5, 6]
