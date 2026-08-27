function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getHumanChoice() {
    const userInput = prompt('Choose either rock, paper or scissors ... ');

    if (!userInput) {
        alert('Please choose one of rock, paper or scissors');
        return null;
    }

    const cleanedInput = userInput.toLowerCase().trim();

    if (cleanedInput === 'rock' || cleanedInput === 'paper' || cleanedInput === 'scissors') {
        return cleanedInput;
    } else {
        alert('Invalid choice! Please type rock, paper, or scissors.');
        return null;
    }
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;


    function playRound(humanChoice, computerChoice) {
        if (!humanChoice) {
            return "Round cancelled or invalid choice.";
        }

        humanChoice = humanChoice.toLowerCase();

        if (computerChoice === humanChoice) {
            return `Match is a draw because both choices were ${computerChoice}`;
        }
        else if (
            (computerChoice === 'rock' && humanChoice === 'scissors') ||
            (computerChoice === 'scissors' && humanChoice === 'paper') ||
            (computerChoice === 'paper' && humanChoice === 'rock')
        ) {
            computerScore++;
            return `You lose! ${computerChoice} beats ${humanChoice}`;
        }
        else {
            humanScore++;
            return `You Win! ${humanChoice} beats ${computerChoice}`;
        }
    }



    for (let i = 1; i <= 5; i++) {
        console.log(`--- Round ${i} ---`);
        let humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        if (humanSelection === null) {
            i--;
            continue;
        }

        const roundResult = playRound(humanSelection, computerSelection);
        console.log(roundResult);
        console.log(`Current Score - You: ${humanScore} | Computer: ${computerScore}\n`);
    }

    console.log("=== FINAL GAME OVER ===");
    if (humanScore > computerScore) {
        console.log(`🎉 You win the game! Final Score: ${humanScore} to ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`😢 Computer wins the game. Final Score: ${computerScore} to ${humanScore}`);
    } else {
        console.log(`👔 The entire game is a tie! Final Score: ${humanScore} to ${computerScore}`);
    }


}
playGame();



