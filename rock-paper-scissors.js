// function that randomly returns 'Rock', 'Paper', or 'Scissors'
function computerPlay() {
  selector = Math.floor(Math.random() * 3);
  if (selector == 0) {
    move = "rock";
  } else if (selector == 1) {
    move = "paper";
  } else {
    move = "scissors";
  }
  return move;
}

// play single round of rock paper scissors

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  console.log("Player selected " + playerSelection);
  console.log("Computer selected " + computerSelection);

  /* conditions where player ties with computer 
    - when player and computer have the same move 
    */
  if (playerSelection == computerSelection) { 
    return "It's a tie.";
  } else if (
    /* conditions where player wins and computer loses 
    - When player has rock and computer has scissors
    - When player has scissors and computer has paper
    - When player has paper and computer has rock 
    */
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    return "Player wins.";
  } else if (
    /* conditions where player loses and computer wins 
    - When player has rock and computer has paper
    - When player has paper and computer has scissors
    - When player has scissors and computer has rock 
    */
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    return "Computer wins.";
  }
}

// play five rounds of rock paper scissors, keeping track of score, and announcing winner at end of five rounds

function game() {
  let playerSelection;
  let computerSelection;
  let playerScore = 0;
  let computerScore = 0;

  /* five-round loop */

  for (let round = 0; round < 5; round++) {
    // Announce current round
    console.log("Round: " + (round + 1));

    // Select player and computer moves.
    playerSelection = prompt("rock, paper, or scissors?");
    computerSelection = computerPlay();

    // play a single round
    result = playRound(playerSelection, computerSelection);
    console.log(result); 

    // based on result, increment player or computer score by 1 or none.
    if ( result == "Player wins.") {
        playerScore++; 
    } else if (result == "Computer wins.") {
        computerScore++; 
    } else {
        ;
    } 

    // Announce score
    console.log("Player Score: " + playerScore);
    console.log("ComputerScore: " + computerScore);


  }
  
  // Announce winner
  console.log( "The game has ended! Who has won? " + determineWinner(playerScore, computerScore)); 
}


  /* Compare score and announce winner
    - If the player and computer scores are equal, announce that it is a tie. 
    - If the player score is higher than the computer, announce "Player wins"
    - If the player score is lower than the computer, announce "Computer wins"
    */
function determineWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return "Player wins rock paper scissors."; 
    } else if (playerScore < computerScore) {
        return "Computer wins rock paper scissors.";
    } else {
        return "Neither the player nor the computer won rock paper scissors."
    }
}