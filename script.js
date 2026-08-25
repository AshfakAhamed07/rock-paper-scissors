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

function getHumanChoice(){
   const userChoice =  prompt('Please select one of Rock, paper or Scissors......').toLowerCase();
   return userChoice;
}
