function knightMoves(startPos, endPos) {
  let moveOne = new Node(startPos[0], startPos[1]);
  let path = [startPos];
  if (moveOne.position === endPos) {
    path.push(moveOne.position);
    return path;
  } else {
    let moveTwo = moveOne.possibleMoves();

    for (let i = 0; i < moveTwo.length; ++i) {
      console.log(moveTwo[i].possibleMoves());
    }
  }
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
      let a = j,
        b = i;

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
  console.log(board[3][3]);
}

buildBoard();
