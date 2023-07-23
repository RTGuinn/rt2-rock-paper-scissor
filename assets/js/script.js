// Define all variables to be used in functions for HTML (DOM cache)
let playerScore = 0;
let computerScore = 0;
const win = document.getElementById("win");
const loss = document.getElementById("loss");
const scoreArea = document.querySelector(".score-area");
const result = document.querySelector(".result");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const choices = ["rock", "paper", "scissors"];



// Function for computer random generated choice
function computerChoice() {
    
    // Random choice generator gets own function for necessity in other function
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}


// Game function for gamePlay function to work for playerChoice and compare
function game(playerChoice) {
    
    const compChoice = computerChoice();
    
    if (playerChoice === compChoice) {
            console.log("its a tie") 
            
        } else if (playerChoice === "rock" && compChoice === "scissors") {

        } else if (playerChoice === "paper" && compChoice === "rock") {

        } else if (playerChoice === "scissors" && compChoice === "paper") {
            console.log("you win");
        } else 
            console.log("you lose, try again!");
        
    }

game("RT");





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