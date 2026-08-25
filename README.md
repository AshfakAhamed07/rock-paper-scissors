# Rock Paper Scissors

A console-based Rock Paper Scissors game built with vanilla JavaScript as part of [The Odin Project](https://www.theodinproject.com/)'s Foundations curriculum.

## Live Preview

[View the live project](https://ashfakahamed07.github.io/rock-paper-scissors/)

> **Note:** This version of the game uses JavaScript `prompt()` and `console.log()`. Open the browser's Developer Tools → **Console** to see the game results.

## About the Project

The game allows a player to compete against the computer for five rounds.

For each round:

1. The player selects Rock, Paper, or Scissors.
2. The computer randomly selects a choice.
3. The choices are compared to determine the round winner.
4. The appropriate score is updated.
5. The current score is displayed in the console.

After five rounds, the final winner is announced.

## Game Rules

* Rock beats Scissors.
* Scissors beats Paper.
* Paper beats Rock.
* Matching choices result in a tie.

## Technologies Used

* HTML5
* JavaScript
* Git
* GitHub

## JavaScript Concepts Practiced

* Variables
* Functions
* Function parameters and arguments
* `return` statements
* Conditional statements
* `Math.random()`
* `Math.floor()`
* `for` loops
* Template literals
* Global and local scope
* Increment operators
* User input with `prompt()`
* Console output with `console.log()`

## Project Structure

```text
rock-paper-scissors/
├── index.html
├── script.js
└── README.md
```

## How to Play

1. Open the [live preview](https://ashfakahamed07.github.io/rock-paper-scissors/).
2. Enter `rock`, `paper`, or `scissors` when prompted.
3. Continue through all five rounds.
4. Open Developer Tools → **Console** to view the round results and scores.

## Future Improvements

The next version of the project will replace the console-based interface with a graphical user interface using the DOM.

Planned improvements include:

* Rock, Paper, and Scissors buttons
* Displaying round results on the webpage
* Displaying the current score
* Showing the final game result
* Adding a reset/play-again option
