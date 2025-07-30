// logic/logic-board.js
document.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("board");
  if (!board) return;

  const tiles = [];
  const pieces = [
    "♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜",
    "♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙",
    "♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"
  ];

  for (let i = 0; i < 64; i++) {
    const square = document.createElement("div");
    square.className = `square ${(Math.floor(i / 8) + i) % 2 === 0 ? 'light' : 'dark'}`;
    const piece = pieces[i];
    if (piece) {
      const span = document.createElement("span");
      span.className = i < 16 ? "black-piece" : i >= 48 ? "white-piece" : "";
      span.textContent = piece;
      square.appendChild(span);
    }
    board.appendChild(square);
  }
});
