/**
 * Function for rules button modal
 */
// Declare variables for button and close button inside modal
var modal = document.getElementById("myRules");
var button = document.getElementById("ruleBtn");
var span = document.getElementsByClassName("close")[0];

// Open modal when user clicks on button
button.onclick = function() {
    modal.style.display = "block";
};
// Close modal when X is clicked on
span.onclick = function () {
    modal.style.display = "none";
};

function playerChoice() {

}

function computerChoice() {

}

/**
 * This function compares the player choice to the computer random choice
 * and tells whether you win or lose the game  
 */
function compareChoices(playerChoice, computerChoice) {

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

