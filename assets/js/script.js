// Define all variables to be used in functions for HTML (DOM cache)
let playerScore = 0;
let computerScore = 0;
const winner = document.getElementById("win");
const loser = document.getElementById("loss");
const scoreArea = document.querySelector(".score-area");
const result = document.querySelector(".result > p");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const choices = ["rock", "paper", "scissors"];



// Function for computer random generated choice
function genComputerChoice() {
    
    // Random choice generator gets own function for necessity in other function
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}


function tie() {
    console.log("Its a tie")
}

function wins() {
    
    playerScore++;
    winner.innerText = playerScore;
    loser.innerHTML = computerScore;
    
}

function lose() {
    console.log("Loser");
}


// Game function for gamePlay function to work for playerChoice and compare
function game(playerChoice) {
    
    const compChoice = genComputerChoice();
    
    if (playerChoice === compChoice) {
            tie();
            
        } else if (playerChoice === "rock" && compChoice === "scissors") {
        return wins();
        } else if (playerChoice === "paper" && compChoice === "rock") {
        return wins();
        } else if (playerChoice === "scissors" && compChoice === "paper") {
        return wins();
        } else 
            lose();
        
    }



/**
 * This function runs the main part of the gameplay actions
 * when a player makes their choice 
 */
function gamePlay() {

    // Rock button 
    rock.addEventListener('click', function() {
        game("rock");
        
    })
    // Paper button
    paper.addEventListener('click', function () {
        game("paper");
        
    })
    // Scissors button
    scissors.addEventListener('click', function () {
        game("scissors");
        
    })
}

// Function to run game
gamePlay();



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