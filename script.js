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

class Tree {
  constructor(params) {
    
  }
}

class Node {
  constructor(params) {
    
  }
}