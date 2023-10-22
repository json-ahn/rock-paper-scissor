function getComputerChoice() {
    let hand = ["rock", "paper", "scissors"];
    console.log(hand[(Math.floor(Math.random() * hand.length))]);
}

// function getPlayerChoice() {
//     let choice = window.prompt("Select! Rock, Paper or Scissors");
//     choice = choice.toLowerCase();
//     return choice;
// }

// let playerSelection = getPlayerChoice();
// let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if(playerSelection === "rock") {
        if(computerSelection === "rock") {
            return "Draw!";
        } else if(computerSelection === "paper") {
            return "Win!";
        } else if(computerSelection === "scissors") {
            return "Lose!";
        }
    } else if(playerSelection === "paper") {
        if(computerSelection === "rock") {
            return "Win!";
        } else if(computerSelection === "paper") {
            return "Draw!";
        } else if(computerSelection === "scissors") {
            return "Lose!";
        }
    } else if(playerSelection === "scissors") {
        if(computerSelection === "rock") {
            return "Lose!";
        } else if(computerSelection === "paper") {
            return "Win!";
        } else if(computerSelection === "scissors") {
            return "Draw!";
        }
    }
}

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;

//     for(let i = 0; i < 5; i++) {
//         let result = playRound(playerSelection, computerSelection);
//         console.log(result);
//         if(result === "Win!") {
//             playerScore++;
//         } else if(result === "Lose!") {
//             computerScore++;
//         }
//     }

//     if(playerScore > computerScore) {
//         console.log("Human won!");
//     } else if(playerScore < computerScore) {
//         console.log("Computer Won!");
//     } else {
//         console.log("It's a draw!");
//     }
// }

function game() {
    for(let i = 0; i < 5; i++) {
        const playerSelection = "rock";
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}

game();