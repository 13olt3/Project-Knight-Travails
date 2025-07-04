function knightMoves(startPos, endPos) {
  let start = new Node(startPos[0], startPos[1]);
  if (start.nextTo(endPos)) {
    let output = `You made it in 1 move! Here's your path: \n`;
    output = output + JSON.stringify(startPos) + `\n`;
    output = output + JSON.stringify(endPos);
    console.log(output);
  } else {
    let path = start.path(endPos);
    let output = `You made it in ${
      path.length + 1
    } moves! Here's your path: \n`;

    output = output + JSON.stringify(startPos) + `\n`;
    for (let i = 0; i < path.length; ++i) {
      output = output + JSON.stringify(path[i]) + `\n`;
    }
    output = output + JSON.stringify(endPos);
    console.log(output);
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
  movesString() {
    let moves = this.possibleMoves();
    let output = "";
    for (let i = 0; i < moves.length; ++i) {
      output = output + moves[i].position + " ";
    }
    return output;
  }
  nextTo(inputNode) {
    // Checks if this node is connected to the input node.
    // Takes input of an array position [x, y]
    let targetNode = inputNode[0].toString() + "," + inputNode[1].toString();
    if (this.movesString().includes(targetNode)) return true;
    else return false;
  }
  path(inputNode, pathway = []) {
    let endNode = new Node(inputNode[0], inputNode[1]);
    let connections = endNode.possibleMoves();
    let queue = [];
    let checkedMoves = "";
    outerLoop: while (connections[0] !== undefined) {
      if (checkedMoves.includes(connections[0].position)) {
        connections.shift();
      } else {
        checkedMoves = checkedMoves + " " + connections[0].position;
        queue.push(connections.shift());

        // if it finds a node that is next to starting position, it runs this block of code
        if (this.nextTo(queue[0].position)) {
          pathway.push(queue[0].position);

          let nextStartingPoint = new Node(
            queue[0].position[0],
            queue[0].position[1]
          );

          // if the found node is NOT next to end node, recursively run pathTwo() of newly created node after adding this node to the pathway
          if (!nextStartingPoint.nextTo(inputNode)) {
            nextStartingPoint.path(inputNode, pathway);
          }
          break outerLoop;
        }

        //if the node is not next to starting position, it adds the next set of knight moves to connections and deletes the first item in the queue
        let nextNode = queue[0].possibleMoves();
        for (let i = 0; i < nextNode.length; ++i) {
          connections.push(nextNode[i]);
        }
        queue.shift();
      }
    }

    return pathway;
  }
}

knightMoves([0, 0], [4, 2]);
