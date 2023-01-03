let testArr = possibleMovesFrom([4, 3]);

function knightMoves(from, to, depth = 0, path = []) {
  let queue = [{ position: from, depth: depth, path: path }];
  let visited = new Set();

  while (queue.length > 0) {
    let current = queue.shift();
    let currentPosition = current.position;
    let currentDepth = current.depth;
    let currentPath = current.path;

    if (areArraysEqual(currentPosition, to)) {
      console.log(`You made it in ${currentDepth} moves! Here's your path:`);
      console.log(currentPath);
      return currentDepth;
    }

    let possibleMoves = possibleMovesFrom(currentPosition);
    for (let move of possibleMoves) {
      if (!visited.has(JSON.stringify(move))) {
        visited.add(JSON.stringify(move));
        let newPath = [...currentPath, move];
        queue.push({ position: move, depth: currentDepth + 1, path: newPath });
      }
    }
  }
}

function possibleMovesFrom(start) {
  let arr = [];
  arr.push([start[0] - 1, start[1] - 2]);
  arr.push([start[0] + 1, start[1] - 2]);

  arr.push([start[0] - 1, start[1] + 2]);
  arr.push([start[0] + 1, start[1] + 2]);

  arr.push([start[0] - 2, start[1] - 1]);
  arr.push([start[0] - 2, start[1] + 1]);

  arr.push([start[0] + 2, start[1] - 1]);
  arr.push([start[0] + 2, start[1] + 1]);

  arr = arr.filter((move) => move.every((coord) => coord >= 0 && coord <= 7));
  return arr;
}

function searchMove(arr, to) {
  for (let element of arr) {
    if (areArraysEqual(element, to)) {
      return true;
    }
  }
}

function areArraysEqual(array1, array2) {
  return JSON.stringify(array1) === JSON.stringify(array2);
}
