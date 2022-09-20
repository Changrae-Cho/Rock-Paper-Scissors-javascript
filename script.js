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

    if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        return `Player wins! player selected ${playerSelection} and computer selected ${computerSelection}.`;
    }
}

/* player plays 3 games with the computer
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
*/

// determines the winner of the game
function winner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "draw";
    }

    else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        return computerSelection;
    }

    else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        return computerSelection;
    }

    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        return computerSelection;
    }

    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        return playerSelection;
    }

    else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        return playerSelection;
    }

    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        return playerSelection;
    }
} 

let playerScore = 0;
let computerScore = 0;

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let scoreboard = document.getElementById("scoreboard");

// display score in the scoreboard
function displayScore() {
    scoreboard.innerHTML = `Player ${playerScore} - ${computerScore} Computer`;
}

displayScore();

// resets the score and changes the color to white when the modal window is closed
function alertPlayerMessage() {
   if ( confirm("Player wins!") == true) {
    playerScore = 0;
    computerScore = 0;
    displayScore();
    rock.style.backgroundColor = "white";
    scissors.style.backgroundColor = "white";
    paper.style.backgroundColor = "white";
    rock.style.opacity = "1";
    scissors.style.opacity = "1";
    paper.style.opacity = "1";
   }

   else  {
    playerScore = 0;
    computerScore = 0;
    displayScore();
    rock.style.backgroundColor = "white";
    scissors.style.backgroundColor = "white";
    paper.style.backgroundColor = "white";
    rock.style.opacity = "1";
    scissors.style.opacity = "1";
    paper.style.opacity = "1";
   };

}

function alertComputerMessage() {
    
    if ( confirm("Computer wins!") == true ) {
        playerScore = 0;
        computerScore = 0;
        displayScore();
        rock.style.backgroundColor = "white";
        scissors.style.backgroundColor = "white";
        paper.style.backgroundColor = "white";
        rock.style.opacity = "1";
        scissors.style.opacity = "1";
        paper.style.opacity = "1";
        
        
    }
    else {
        playerScore = 0;
        computerScore = 0;
        displayScore();
        rock.style.backgroundColor = "white";
        scissors.style.backgroundColor = "white";
        paper.style.backgroundColor = "white";
        rock.style.opacity = "1";
        scissors.style.opacity = "1";
        paper.style.opacity = "1";
   
    }

}

// changes the score
function scoreChange() {
    if (winner(playerSelection, computerSelection) == playerSelection) {
        playerScore = playerScore + 1;
        displayScore();
    }

    else if (winner(playerSelection, computerSelection) == computerSelection) {
        computerScore = computerScore + 1;
        displayScore();
    }

}

// if a player or the computer scores 5 points, the message shows up after 0.1 second
function winnerAnnounce() {
    if (playerScore == 5 ) {
        setTimeout(alertPlayerMessage, 100);
    }

    if (computerScore == 5) {
        setTimeout(alertComputerMessage, 100);
    }
}

// when buttons are clicked, a game starts and the result is shown in the console log
function rockClick() {
    playerSelection = "ROCK";
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

    scoreChange();
    winnerAnnounce();
}

function paperClick() {
    playerSelection = "PAPER";
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

    scoreChange();
    winnerAnnounce();

}

function scissorsClick() {
    playerSelection = "SCISSORS";
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

    scoreChange();
    winnerAnnounce();
}

// click the buttons to play game
rock.addEventListener('click', rockClick);
paper.addEventListener('click', paperClick);
scissors.addEventListener('click', scissorsClick);


// if the key 'r' is down, then a player chooses rock
addEventListener('keydown', function(event) {
    if (event.repeat) {
        return;
    }
    if (event.key == 'r' || event.key == "R") {
        rockClick();   
    } 
});

// if the key 's' is down, then a player chooses scissors
addEventListener('keydown', function(event) {
    if (event.repeat) {
        return;
    }
    if (event.key == 's' || event.key == "S") {
        scissorsClick();   
    } 
});

// if the key 'p' is down, then a player chooses paper
addEventListener('keydown', function(event) {
    if (event.repeat) {
        return;
    }
    if (event.key == 'p' || event.key == "P") {
        paperClick();   
    } 
});

// if the keys 'r', 's', 'p' are down, rock button turns purple
addEventListener('keydown', function(event) {
    

    if (event.key == 'r' || event.key == "R") {
        rock.style.backgroundColor = 'purple';
        rock.style.opacity = '0.5';
 
    }
})


addEventListener('keydown', function(event) {
   
    if (event.key == 's' || event.key == "S") {
        scissors.style.backgroundColor = 'purple';
        scissors.style.opacity = '0.5';   
    }
})


addEventListener('keydown', function(event) {
    
    if (event.key == 'p' || event.key == "P") {
        paper.style.backgroundColor = 'purple';
        paper.style.opacity = '0.5';
    }
})


// if the key 'r', 's', 'p' are up, then the rock button returns to white
addEventListener('keyup', function(event) {
    if (event.key == 'r' || event.key == "R") {
        rock.style.backgroundColor = 'white';
        rock.style.opacity = '1';
    }
})

addEventListener('keyup', function(event) {
    if (event.key == 's' || event.key == "S") {
        scissors.style.backgroundColor = 'white';
        scissors.style.opacity = '1';
    }
})

addEventListener('keyup', function(event) {
    if (event.key == 'p' || event.key == "P") {
        paper.style.backgroundColor = 'white';
        paper.style.opacity = '1';
    }
})

// when mouse button is pressed, buttons turn purple. when the mouse buttons is released, button returns to white.
rock.addEventListener('mousedown', function() {rock.style.backgroundColor = "purple"; rock.style.opacity = "0.5"});
addEventListener('mouseup', function() {rock.style.backgroundColor = "white"; rock.style.opacity = "1"});

paper.addEventListener('mousedown', function() {paper.style.backgroundColor = "purple"; paper.style.opacity = "0.5"});
addEventListener('mouseup', function() {paper.style.backgroundColor = "white"; paper.style.opacity = "1"});

scissors.addEventListener('mousedown', function() {scissors.style.backgroundColor = "purple"; scissors.style.opacity = "0.5"});
addEventListener('mouseup', function() {scissors.style.backgroundColor = "white"; scissors.style.opacity = "1"});

// when the reset button is clicked, scores are reset to 0

let reset = document.getElementById("reset");
reset.addEventListener('click', function() {
    playerScore = 0;
    computerScore = 0;
    displayScore();
})









