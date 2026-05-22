let board = "";
const size = 8;
for (let i = 0; i < size; i++) {
  let row = "";
  let currentSquare = i % 2 == 0 ? " " : "#";
  for (let j = 0; j < size; j++) {
    row += currentSquare;
    currentSquare = currentSquare == " " ? "#" : " ";
  }
  row += "\n";
  board += row;
}

console.log(board);
