const countBs = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "B") count++;
  }
  return count;
};

const countChar = function (str, c) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === c) count++;
  }
  return count;
};

console.log(countBs("BOB"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
