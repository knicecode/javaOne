const choices = ["ROCK", "PAPER", "SCISSORS"];
const playerSelection = getPlayerChoice()
const computerSelection = getRandomChoice()
let win = "You win!"
let lose = "You lose!"
let tie = "It's a tie!"
let playerScore = 0
let computerScore = 0

function getRandomNum(limit) {
  return Math.floor(Math.random() * limit);
}

function getRandomChoice() {
  const randomNum = getRandomNum(choices.length);
  return choices[randomNum];
}

function getPlayerChoice() {
  var playerInput = prompt("Rock, paper, or scissors?")
  let response = ""
  
  if (playerInput == "Rock") {
    response = choices[0]
  } else if (playerInput == "Paper") {
    response = choices[1]
  } else if (playerInput == "Scissors") {
    response = choices[2]
  }

  return response
}


function playRound(playerSelection, computerSelection) {
  
  let roundResult = ""

  if (playerSelection == choices[0]) {
    if (computerSelection == choices[0]) {
      roundResult = tie
    } else if (computerSelection == choices[1]) {
      roundResult = lose
    } else {
      roundResult = win
    }
  
  } else if (playerSelection == choices[1]) {
    if (computerSelection == choices[0]) {
      roundResult = win
    } else if (computerSelection == choices[1]) {
      roundResult = tie
    } else {
      roundResult = lose
    }
  
  } else if (playerSelection == choices[2]) {
    if (computerSelection == choices[0]) {
      roundResult = lose
    } else if (computerSelection == choices[1]) {
      roundResult = win
    } else {
      roundResult = tie
    }
  } 
  
  return roundResult
}

function game() {
  for (i = 0; i < 5; i++) {
    if (roundResult = win) {
      playerScore++
    
    } else if (roundResult = lose) {
      computerScore++
    
    } else if (roundResult = tie) {
      i--
    }
  }
}


console.log(playRound(playerSelection, computerSelection))

console.log("Computer choice:", computerSelection)
console.log("My choice:", playerSelection)
