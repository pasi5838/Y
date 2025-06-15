
const board = document.getElementById("board");
const scoreXEl = document.getElementById("scoreX");
const scoreOEl = document.getElementById("scoreO");
let currentPlayer = "X";
let boardState = ["", "", "", "", "", "", "", "", ""];
let scoreX = 0;
let scoreO = 0;
let isGameOver = false;

function drawBoard() {
  board.innerHTML = "";
  boardState.forEach((val, idx) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.textContent = val;
    cell.addEventListener("click", () => makeMove(idx));
    board.appendChild(cell);
  });
}

function makeMove(idx) {
  if (boardState[idx] !== "" || isGameOver) return;
  boardState[idx] = currentPlayer;
  drawBoard();
  checkWinner();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner() {
  const wins = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  for (const [a, b, c] of wins) {
    if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
      const cells = document.querySelectorAll(".cell");
      cells[a].classList.add("winner");
      cells[b].classList.add("winner");
      cells[c].classList.add("winner");
      isGameOver = true;
      if (boardState[a] === "X") scoreX++; else scoreO++;
      updateScore();
      launchConfetti();
      return;
    }
  }
  if (!boardState.includes("")) isGameOver = true;
}

function updateScore() {
  scoreXEl.textContent = `X: ${scoreX}`;
  scoreOEl.textContent = `O: ${scoreO}`;
}

function restartGame() {
  boardState = ["", "", "", "", "", "", "", "", ""];
  isGameOver = false;
  drawBoard();
}

function resetScore() {
  scoreX = 0;
  scoreO = 0;
  updateScore();
}

function launchConfetti() {
  const duration = 3 * 1000;
  const end = Date.now() + duration;
  (function frame() {
    confetti({
      particleCount: 5,
      spread: 70,
      origin: { y: 0.6 }
    });
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

drawBoard();
