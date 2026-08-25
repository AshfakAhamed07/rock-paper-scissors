let humanScore = 0;
let computerScore = 0;

// Return a random choice for the computer.
function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3) + 1;

  if (randomNum === 1) {
    return "rock";
  } else if (randomNum === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Prompt the player for a choice and normalize the input.
function getHumanChoice() {
  const userChoice = prompt("Choose rock, paper, or scissors:").toLowerCase();

  return userChoice;
}

// Play one round and update the appropriate score.
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}.`);
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
  } else {
    computerScore++;
    console.log(`Computer wins! ${computerChoice} beats ${humanChoice}.`);
  }
}

// Run five rounds and display the final result.
function playGame() {
  for (let round = 1; round <= 5; round++) {
    console.log(`--- ROUND ${round} ---`);

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}\n`);
  }

  console.log("=== FINAL RESULTS ===");

  if (humanScore > computerScore) {
    console.log(
      `Congratulations! You win the game with a score of ${humanScore} to ${computerScore}!`,
    );
  } else if (computerScore > humanScore) {
    console.log(
      `Game over! The computer wins the game with a score of ${computerScore} to ${humanScore}.`,
    );
  } else {
    console.log(
      `The game ended in a tie! Final score is ${humanScore} to ${computerScore}.`,
    );
  }
}

playGame();
