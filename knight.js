function knightMoves(startPos, endPos) {}

function adjacentCheck(startPos, endPos) {
  let board = buildBoard();
  let startString = startPos[0].toString().concat(startPos[1].toString());
  console.log(startString);
  console.log(positionIntoString(board[endPos[0]][endPos[1]]));
  console.log(
    positionIntoString(board[endPos[0]][endPos[1]]).includes(startString)
  );
}

function positionIntoString(boardArray) {
  let myString = "";
  for (let i = 0; i < boardArray.length; ++i) {
    for (let j = 0; j < 2; ++j) {
      myString = myString.concat(boardArray[i][j].toString());
    }
    myString = myString.concat(", ");
  }
  return myString;
}
function buildBoard() {
  let board = [
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
  ];

  for (let i = 0; i <= 7; ++i) {
    for (let j = 0; j <= 7; ++j) {
      let a = i,
        b = j;

      if (a + 2 <= 7 && b + 1 <= 7) {
        board[i][j].push([a + 2, b + 1]);
      }
      if (a + 1 <= 7 && b + 2 <= 7) {
        board[i][j].push([a + 1, b + 2]);
      }
      if (a + 2 <= 7 && b - 1 >= 0) {
        board[i][j].push([a + 2, b - 1]);
      }
      if (a + 1 <= 7 && b - 2 >= 0) {
        board[i][j].push([a + 1, b - 2]);
      }
      if (a - 1 >= 0 && b - 2 >= 0) {
        board[i][j].push([a - 1, b - 2]);
      }
      if (a - 2 >= 0 && b - 1 >= 0) {
        board[i][j].push([a - 2, b - 1]);
      }
      if (a - 1 >= 0 && b + 2 <= 7) {
        board[i][j].push([a - 1, b + 2]);
      }
      if (a - 2 >= 0 && b + 1 <= 7) {
        board[i][j].push([a - 2, b + 1]);
      }
    }
  }
  return board;
}

adjacentCheck([0, 0], [7, 7]);
