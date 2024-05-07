

let humanScore = 0;
let computerScore = 0;


getHumanChoice();
getComputerChoice();


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
    console.log("Computer Chose: " + computerChoice);
    return computerChoice
}

function getHumanChoice() {
    let humanChoice = prompt("Please Choose 'Rock', 'Paper', or 'Scissors';")
    humanChoice = humanChoice.toLowerCase();
    while (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
        if (humanChoice == null) {
            break;
        }
        humanChoice = prompt("Not a valid choice, Please Choose 'Rock', 'Paper', or 'Scissors'");
    }
    console.log("Player Chose: " + humanChoice);
    return humanChoice
}

function playRound(humanChoice, computerChoice) {


}

