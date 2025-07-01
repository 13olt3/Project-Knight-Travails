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

class Node {
  constructor(a, b) {
    this.position = [a, b];
  }
  possibleMoves() {
    let a = this.position[0];
    let b = this.position[1];
    let possibleMoves = [];
    if (a + 1 <= 7 && b + 2 <= 7) {
      possibleMoves.push(new Node(a + 1, b + 2));
    }
    if (a + 1 <= 7 && b - 2 >= 0) {
      possibleMoves.push(new Node(a + 1, b - 2));
    }
    if (a + 2 <= 7 && b + 1 <= 7) {
      possibleMoves.push(new Node(a + 2, b + 1));
    }
    if (a + 2 <= 7 && b - 1 >= 0) {
      possibleMoves.push(new Node(a + 2, b - 1));
    }
    if (a - 1 >= 0 && b + 2 <= 7) {
      possibleMoves.push(new Node(a - 1, b + 2));
    }
    if (a - 1 >= 0 && b - 2 >= 0) {
      possibleMoves.push(new Node(a - 1, b - 2));
    }
    if (a - 2 >= 0 && b + 1 <= 7) {
      possibleMoves.push(new Node(a - 2, b + 1));
    }
    if (a - 2 >= 0 && b - 1 >= 0) {
      possibleMoves.push(new Node(a - 2, b - 1));
    }
    return possibleMoves;
  }
}

knightMoves([5, 5], [1, 3]);
