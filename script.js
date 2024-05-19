let humanScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#computer-score");
let p = document.querySelector("p");

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resetButton = document.querySelector("#reset-button");

rockButton.addEventListener("click", (e) => {
    let humanChoice = e.target.textContent.toLowerCase();
    let computerChoice = getComputerChoice();
    console.log(humanChoice);
    console.log(computerChoice);
    playRound(humanChoice, computerChoice);

});

paperButton.addEventListener("click", (e) => {
    let humanChoice = e.target.textContent.toLowerCase();
    let computerChoice = getComputerChoice();
    console.log(humanChoice);
    console.log(computerChoice);
    playRound(humanChoice, computerChoice);
});

scissorsButton.addEventListener("click", (e) => {
    let humanChoice = e.target.textContent.toLowerCase();
    let computerChoice = getComputerChoice();
    console.log(humanChoice);
    console.log(computerChoice);
    playRound(humanChoice, computerChoice);

});

resetButton.addEventListener( "click", () => {
    humanScore.textContent = 0;
    computerScore.textContent = 0;
    p.textContent = "Pick a Selection";
    p.style.color = "white";
})

function getComputerChoice() {
    let computerChoice;
    let num = Math.random();

    if (num <= 0.33) {
        computerChoice = "Rock";
    }
    else if (num <= 0.66) {
        computerChoice = "Paper";
    }
    else if (num <= 1) {
        computerChoice = "Scissors";
    }
    computerChoice = computerChoice.toLowerCase();
    return computerChoice
}



function playRound(humanChoice, computerChoice) {

    if (humanChoice == computerChoice) {
        p.textContent = "It's a Tie";
        p.style.color = "white";
    }

    else if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "rock")
    ) {
    
        humanScore.textContent++;
        p.textContent = "You Win the Round!";
        p.style.color = "green";
    }
    else {
        computerScore.textContent++;
        p.textContent = "You Lost the Round";
        p.style.color = "red";
    }

    if (humanScore.textContent == "5") {
        humanScore.textContent = 0;
        computerScore.textContent = 0;
    }
    else if (computerScore.textContent == "5") {
        humanScore.textContent = 0;
        computerScore.textContent = 0;
    }
}
/*
function playGame() {

    let roundCounter = 0;

    while (roundCounter < 5) {
        playRound(getHumanChoice(), getComputerChoice());
        roundCounter++;
    }
    if (humanScore > computerScore) {
        console.log("You win the game!");
    }
    else if (computerScore > humanScore) {
        console.log("You lose the game");
    }

    else {
        console.log("The game has ended in a tie");
    }

}

*/