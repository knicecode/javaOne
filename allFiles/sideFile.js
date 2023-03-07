const choices = ["ROCK", "PAPER", "SCISSORS"];
const computerSelection = getRandomChoice();
let win = "You win!";
let lose = "You lose!";
let tie = "It's a tie!";
let playerScore = 0;
let computerScore = 0;
let roundResult = ""
const playerRock = document.querySelector('#btnone');
const playerPaper = document.querySelector('#btntwo');
const playerScissors = document.querySelector('#btnthree');

function getRandomNum(limit) {
  return Math.floor(Math.random() * limit);
}

function getRandomChoice() {
  const randomNum = getRandomNum(choices.length);
  return choices[randomNum];
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
  
  console.log(roundResult)
}




/**Getting user input from buttons*/

playerRock.addEventListener('click', () => {
    playRound(choices[0], computerSelection);
  })
  
  playerPaper.addEventListener('click', () => {
    playRound(choices[1], computerSelection);
  })
  
  playerScissors.addEventListener('click', () => {
    playRound(choices[2], computerSelection);
  })














  /**Different old version starts here */

const choices = ["ROCK", "PAPER", "SCISSORS"];
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


/**UNOFFICIAL EVENT LISTENERS */

const playerRock = document.querySelector('#btnone');
const playerPaper = document.querySelector('#btntwo');
const playerScissors = document.querySelector('#btnthree');

playerRock.addEventListener('click', () => {
  playRound(choices[0], computerSelection)
})

playerPaper.addEventListener('click', () => {
  playRound(choices[1], computerSelection)
})

playerScissors.addEventListener('click', () => {
  playRound(choices[2], computerSelection)
})