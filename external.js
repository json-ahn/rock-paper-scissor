function getComputerChoice() {
    let random_hand = ["rock", "paper", "scissors"];
    return random_hand[(Math.floor(Math.random() * random_hand.length))];
}

let human = 0;
let computer = 0;
let total = 0;

const container = document.querySelector('.result');


function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    // res.textContent = playerSelection;
    // container.appendChild(res);

    const res = document.createElement('p');
    const point = document.createElement('p');

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            
            res.textContent = "It's a tie";
            container.appendChild(res);
        } else if (computerSelection === "paper") {
            computer++;
            total++;

            point.textContent = computer;
            container.appendChild(point);

            
            res.textContent = "You Lose! Paper beats Rock";
            container.appendChild(res);
            
        } else if (computerSelection === "scissors") {
            human++;
            total++;

            point.textContent = human;
            container.appendChild(point);

            res.textContent = "You Win! Rock beats Scissors";
            container.appendChild(res);
            
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            human++;
            total++;

            point.textContent = human;
            container.appendChild(point);

            res.textContent = "You Win! Paper beats Rock";
            container.appendChild(res);
        } else if (computerSelection === "paper") {
            res.textContent = "It's a tie";
            container.appendChild(res);
        } else if (computerSelection === "scissors") {
            computer++;
            total++;

            point.textContent = computer;
            container.appendChild(point);

            res.textContent = "You Lose! Scissors beats Rock";
            container.appendChild(res);
            
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computer++;
            total++;

            point.textContent = computer;
            container.appendChild(point);

            res.textContent = "You Lose! Rock beats Scissors";
            container.appendChild(res);
            
        } else if (computerSelection === "paper") {
            human++;
            total++;

            point.textContent = human;
            container.appendChild(point);

            res.textContent = "You Win! Scissors beats Paper";
            container.appendChild(res);
            
        } else if (computerSelection === "scissors") {
            res.textContent = "It's a tie";
            container.appendChild(res);
            
        }
    }
}

// const button = document.querySelector("#rock");
// let button_specific = button.textContent;
// button.addEventListener('click', () => {
//     console.log(button_specific);
// })

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(total < 5) {
            playRound(button.id, getComputerChoice());
        } else {
            const final = document.createElement('p');
            if(computer < human) {
                final.textContent = "HUMAN WON!";
                container.appendChild(final);
            } else {
                final.textContent = "COMPUTER WON!";
                container.appendChild(final);
            }
        }
    });
});


// button.forEach(eachButton => {
//     eachButton.addEventListener('click', () => {
//         console.log(eachButton.value);
//     });
// });

// function game() {
//     const playerSelection = prompt("Rock, Paper or Scissor!");
//     const computerSelection = getComputerChoice();
//     console.log(playRound(playerSelection, computerSelection));
// }

// for(let i = 0; i < 5; i++) {
//     game();
// }