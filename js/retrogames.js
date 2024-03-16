// Select the relevant elements from the page
const grid = document.querySelector('.grid');
const scoreCounter = document.querySelector('.score-counter');
const endGameScreen = document.querySelector('.end-game-screen');
const endGameText = document.querySelector('.end-game-text');
const playAgainButton = document.querySelector('.play-again');

// Initialise the variables needed for the game setup
const totalCells = 70;
const totalBombs = 10;
const maxScore = totalCells - totalBombs - 45;
const bombsList = [];

let score = 0;

// Generate a list of unique bombs
while (bombsList.length < totalBombs) {
  // Generate a random number
  const randomNumber = Math.floor(Math.random() * totalCells) + 1;

  // Add the number to the list if not already included
  if (!bombsList.includes(randomNumber)) {
    bombsList.push(randomNumber);
  }
}

for (let i = 1; i <= totalCells; i++) {
  // Create a cell
  const cell = document.createElement('div');
  cell.classList.add('cell');

  // Manage the "click" event for the cell
  cell.addEventListener('click', function () {
    // Don't do anything if it is already clicked
    if (cell.classList.contains('cell-clicked')) {
      return;
    }

    if (bombsList.includes(i)) {
      cell.classList.add('cell-bomb');
      endGame(false);
    } else {
      cell.classList.add('cell-clicked');
      updateScore();
    }
  })

  // Put the cell in the grid
  grid.appendChild(cell);
}

// *---------------------------
// * FUNCTIONS
// *---------------------------

// Function to increment the score and display it
function updateScore() {
  score++;
  scoreCounter.innerText = score.toString().padStart(5, '0');

  if (score === maxScore) {
    endGame(true);
  }
}

// Function for when the game ends
function endGame(isVictory) {
  if (isVictory) {
    endGameText.innerHTML = 'YOU<br>WON';
    endGameScreen.classList.add('win');
  }

  revealAllBombs();
  endGameScreen.classList.remove('hidden');
}

// Function to reveal all bombs
function revealAllBombs() {
  const cells = document.querySelectorAll('.cell');

  for (let i = 1; i <= cells.length; i++) {
    const cell = cells[i - 1];

    if (bombsList.includes(i)) {
      cell.classList.add('cell-bomb');
    }
  }
}

playAgainButton.addEventListener('click', function () {
  window.location.reload();
});
