// Define all variables to be used in functions 
let playerScore = 0;
let computerScore = 0;
const win = document.getElementById("win");
const loss = document.getElementById("loss");
const scoreArea = document.querySelector(".score-area");
const result = document.querySelector(".result");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// Game function for gamePlay function to work
function game(playerChoice) {
    console.log("good to go" + playerChoice);
}


/**
 * This function runs the main part of the gameplay actions
 * when a player makes their choice 
 */
function gamePlay() {

    rock.addEventListener('click', function() {
        game("rock");
        
    })

    paper.addEventListener('click', function () {
        game("paper");
        
    })

    scissors.addEventListener('click', function () {
        game("scissors");
        
    })
}

// Function to run game
gamePlay();


function playerChoice() {

}

function computerChoice() {

}

/**
 * This function compares the player choice to the computer random choice
 * and tells whether you win or lose the game  
 */
function compareChoices(playerChoice, computerChoice) {

    // Take player choice and compares to computer random pick to declare winner
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissor") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissor" && computerChoice === "paper")
    ) {
        return "You Win! Yay!";
    } else {
        return "You Lose! Sorry, try again!";
    }
}

function incrementWin() {

}

function incrementLoss() {

}

/**
 * Function for rules button modal
 */
// Declare variables for button and close button inside modal
var modal = document.getElementById("myRules");
var button = document.getElementById("ruleBtn");
var span = document.getElementsByClassName("close")[0];

// Open modal when user clicks on button
button.onclick = function () {
    modal.style.display = "block";
};
// Close modal box when X is clicked 
span.onclick = function () {
    modal.style.display = "none";
};