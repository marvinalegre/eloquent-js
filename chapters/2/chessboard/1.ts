const size = 8;

let evenRow = "";
let oddRow = "";
for (let i = 0; i < size; i++) {
  if (i % 2 === 0) {
    evenRow += " ";
    oddRow += "#";
  } else {
    evenRow += "#";
    oddRow += " ";
  }
}
evenRow += "\n";
oddRow += "\n";

let board = "";
for (let i = 0; i < size; i++) {
  if (i % 2 === 0) {
    board += evenRow;
  } else {
    board += oddRow;
  }
}

console.log(board);
