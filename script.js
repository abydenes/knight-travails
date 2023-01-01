class Gameboard {
  constructor() {
    this.board = [
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "c", "", "", "", ""],
      ["", "", "", "d", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "e", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
    ];
  }
}

class Knight {
  constructor() {}

  knightMoves(start, end) {}
}

let gameBoard = new Gameboard();
