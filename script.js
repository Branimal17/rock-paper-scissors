let humanScore = 0;
let computerScore = 0;

playGame();

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
    computerChoice = computerChoice.toLowerCase();
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
    if (humanChoice == computerChoice) {
        console.log("It's a tie!");
    }

    else if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "rock")
    ) {
        console.log("You Win the Round!!");
        humanScore++;
    }
    else {
        console.log("You Lose the Round");
        computerScore++;
    }

    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
}

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

