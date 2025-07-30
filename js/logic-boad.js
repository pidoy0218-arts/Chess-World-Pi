document.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("board");

  const initialBoard = [
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"]
  ];

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement("div");
      square.classList.add("square");

      const isWhite = (row + col) % 2 === 0;
      square.classList.add(isWhite ? "white" : "black");

      square.textContent = initialBoard[row][col];

      square.addEventListener("click", () => {
        document.getElementById("tapSound").play();
      });

      board.appendChild(square);
    }
  }
});
