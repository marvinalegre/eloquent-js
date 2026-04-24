function range(start, end, step = 1) {
  const output = [];
  if (step > 0) {
    for (let n = start; n <= end; n += step) {
      output.push(n);
    }
    return output;
  } else {
    for (let n = start; n >= end; n += step) {
      output.push(n);
    }
    return output;
  }
}

function sum(range) {
  let output = 0;
  for (let n of range) {
    output += n;
  }
  return output;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
