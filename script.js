let rockPaperScissors = ["ROCK", "PAPER", "SCISSORS"];

// computer makes a random choice
function getComputerChoice() {
    return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
}


// returns the result when player plays a game with the computer
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `Draw! player and computer both selected ${playerSelection}.`;
    } 

    if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        return `Computer wins! computer selected ${computerSelection} and player selected ${playerSelection}.`;
    }

    if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        return `Computer wins! computer selected ${computerSelection} and player selected ${playerSelection}.`;
    }

    if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        return `Computer wins! computer selected ${computerSelection} and player selected ${playerSelection}.`;
    }

    if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        return `Player wins! player selected ${playerSelection} and computer selected ${computerSelection}.`;
    }

    if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        return `Player wins! player selected ${playerSelection} and computer selected ${computerSelection}.`;
    }

    if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        return `Player wins! player selected ${playerSelection} and computer selected ${computerSelection}.`;
    }
}

// player plays 3 games with the computer
function game() {
        let playerSelection = (prompt("Choose rock paper scissors")).toUpperCase();
        let criterion = (playerSelection == "ROCK" || playerSelection == "PAPER" || playerSelection == "SCISSORS");
        let count = 0;

        while (!criterion) {
            alert("Write only rock paper scissors");
            playerSelection = (prompt("Choose rock paper scissors")).toUpperCase();
            criterion = (playerSelection == "ROCK" || playerSelection == "PAPER" || playerSelection == "SCISSORS");
        }

        while (criterion) {
            alert(playRound(playerSelection, getComputerChoice()));
            count = count + 1;
            if (count >= 3) break;
    
            playerSelection = (prompt("Choose rock paper scissors")).toUpperCase();
            criterion = (playerSelection == "ROCK" || playerSelection == "PAPER" || playerSelection == "SCISSORS");
            
            while (!criterion) {
                alert("Write only rock paper scissors");
                playerSelection = (prompt("Choose rock paper scissors")).toUpperCase();
                criterion = (playerSelection == "ROCK" || playerSelection == "PAPER" || playerSelection == "SCISSORS");              
            }
        }
}

game();

