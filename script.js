// Create two new variables named humanScore and computerScore in the global scope.
// Initialize those variables with the value of 0.
let humanScore = 0;
let computerScore = 0;

/*
Create a function named getComputerChoice.
Generate a random number.
Use the random number to select one of:
    rock
    paper
    scissors
Return the selected choice.
 */

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

/*  
Create a function named getHumanChoice.

Prompt the user to enter their choice.

Store the user's input.

Return the user's choice.
*/

function getHumanChoice() {
  const userChoice = prompt(
    "Choose rock, paper, or scissors:",
  ).toLowerCase();
  return userChoice;
}


// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and 
// computer choices as arguments.
// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other
//  variations.
// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You 
// lose! Paper beats Rock”.
// Increment the humanScore or computerScore variable based on the round winner.
// Rock beats scissors, scissors beat paper, and paper beats rock

// Step 4: Write the logic to play a single round
function playRound(humanChoice, computerChoice) {
    // Make the human input case-insensitive by parsing it locally
    const playerSelection = humanChoice;

    // 1. If both choices match, it's a draw
    if (playerSelection === computerChoice) {
        console.log(`It's a tie! Both chose ${playerSelection}.`);
        return; // Exits the function early
    }

    // 2. If the player wins, update score and log the message
    if (
        (playerSelection === 'rock' && computerChoice === 'scissors') || 
        (playerSelection === 'scissors' && computerChoice === 'paper') || 
        (playerSelection === 'paper' && computerChoice === 'rock')
    ) {
        humanScore++;
        console.log(`You Win! ${playerSelection} beats ${computerChoice}`);
    } 
    // 3. Otherwise, the computer wins. Update score and log message
    else {
        computerScore++;
        console.log(`Computer Wins! ${computerChoice} beats ${playerSelection}`);
    }
}


function playGame(){
    
    for (let x = 1; x <= 5; x++) {
        console.log(`--- ROUND ${x} ---`);
        
        // Fetch new choices for every iteration of the loop
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        // Pass selections to the round evaluator
        playRound(humanSelection, computerSelection);
        
        // Log current scores after the round
        console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}\n`);
    }

    // 4. Declare the ultimate winner at the end of 5 rounds
    console.log("=== FINAL RESULTS ===");
    if (humanScore > computerScore) {
        console.log(`Congratulations! You win the game with a score of ${humanScore} to ${computerScore}!`);
    } else if (computerScore > humanScore) {
        console.log(`Game Over! The computer wins the game with a score of ${computerScore} to ${humanScore}.`);
    } else {
        console.log(`The entire game ended in a tie! Final score is ${humanScore} to ${computerScore}.`);
    }
}

// Call the function to start the game!
playGame();
