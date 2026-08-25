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
    return "Rock";
  } else if (randomNum === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
console.log(getComputerChoice());