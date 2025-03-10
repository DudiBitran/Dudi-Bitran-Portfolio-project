const rows = 6;
const cols = 7;
let currentPlayer = "red";
const board = [];

// Creating the board
const boardElement = document.getElementById("board");

function createBoard() {
  boardElement.innerHTML = "";
  for (let r = 0; r < rows; r++) {
    board[r] = [];
    for (let c = 0; c < cols; c++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = r;
      cell.dataset.col = c;
      boardElement.appendChild(cell);
      board[r][c] = null;

      cell.addEventListener("click", () => handleMove(c));
    }
  }
}

createBoard();

function handleMove(col) {
  for (let row = rows - 1; row >= 0; row--) {
    if (!board[row][col]) {
      board[row][col] = currentPlayer;
      const cell = document.querySelector(
        `.cell[data-row='${row}'][data-col='${col}']`
      );
      cell.classList.add(currentPlayer);
      if (checkWin(row, col)) {
        document.getElementById("status").textContent = `Player ${
          currentPlayer === "red" ? "Red" : "Yellow"
        } Won!`;
        disableBoard();
      } else {
        switchPlayer();
      }
      return;
    }
  }
  alert("cannot play in this row");
}

function switchPlayer() {
  currentPlayer = currentPlayer === "red" ? "yellow" : "red";
  document.getElementById("status").textContent = `turn of  ${
    currentPlayer === "red" ? "Red" : "Yellow"
  }`;
}

function checkWin(row, col) {
  return (
    checkDirection(row, col, 1, 0) ||
    checkDirection(row, col, 0, 1) ||
    checkDirection(row, col, 1, 1) ||
    checkDirection(row, col, 1, -1)
  );
}

function checkDirection(row, col, rowDelta, colDelta) {
  let count = 1;
  count += countCells(row, col, rowDelta, colDelta);
  count += countCells(row, col, -rowDelta, -colDelta);
  return count >= 4;
}

function countCells(row, col, rowDelta, colDelta) {
  let count = 0;
  let r = row + rowDelta;
  let c = col + colDelta;
  while (
    r >= 0 &&
    r < rows &&
    c >= 0 &&
    c < cols &&
    board[r][c] === currentPlayer
  ) {
    count++;
    r += rowDelta;
    c += colDelta;
  }
  return count;
}

function disableBoard() {
  document
    .querySelectorAll(".cell")
    .forEach((cell) => (cell.style.pointerEvents = "none"));
}

document.getElementById("reset-btn").addEventListener("click", resetGame);

function resetGame() {
  currentPlayer = "red";
  document.getElementById("status").textContent = "The Red Player Starting";
  createBoard();
}
