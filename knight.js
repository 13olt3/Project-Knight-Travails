function knightMoves(startPos, endPos) {}
function buildBoard(x, y) {
  if (x > 7 || x < 0) {
    throw new Error("Out of board range.");
  }
  if (y > 7 || y < 0) {
    throw new Error("Out of board range.");
  }
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
  console.log(`From position ${x},${y}, possible moves are:`);
  console.log(board[x][y]);
}

buildBoard(3, 4);
