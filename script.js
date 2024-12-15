// Get all the elements
const userChoiceText = document.getElementById("userChoice");
const computerChoiceText = document.getElementById("computerChoice");
const winnerText = document.getElementById("winner");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const choices = ["Rock", "Paper", "Scissors"];

// Function to generate computer's choice randomly
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Function to determine the winner
function getWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a draw!";
  }

  if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

// Function to play the game
function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  userChoiceText.textContent = `Your choice: ${userChoice}`;
  computerChoiceText.textContent = `Computer's choice: ${computerChoice}`;
  winnerText.textContent = getWinner(userChoice, computerChoice);
}

// Event listeners for buttons
rockBtn.addEventListener("click", () => playGame("Rock"));
paperBtn.addEventListener("click", () => playGame("Paper"));
scissorsBtn.addEventListener("click", () => playGame("Scissors"));
