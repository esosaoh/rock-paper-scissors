function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random()*3);
    let computerChoice = choices[randomNumber];
    return computerChoice;
}

function getHumanChoice(){
    const choices = ["rock", "paper", "scissors"];
    let humanChoice = (prompt("Rock, Paper, Scissors: ")).toLowerCase();
    if (!(choices.includes(humanChoice))){
        humanChoice = (prompt("Invalid choicen, play again: ")).toLowerCase();
    }    
    return humanChoice;
    }

function playRound(humanChoice, computerChoice, score){
    if (humanChoice.toLowerCase() === computerChoice.toLowerCase()){
        console.log("It's a tie");
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors"){
        console.log("Rock beats scissors, you win this round!");
        score.humanScore ++;
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper"){
        console.log("Paper beats rock, you lose this round");
        score.computerScore++;
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors"){
        console.log("Scissors beats paper, you lose this round");
        score.computerScore++;
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock"){
        console.log("Paper beats rock, you win this round!");
        score.humanScore++;
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper"){
        console.log("Scissors beats paper, you win this round!");
        score.humanScore++;
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock"){
        console.log("Rock beats scissors, you lose this round");
        score.computerScore++;
    }
}



function playGame(){
    let score = {humanScore: 0, computerScore: 0}
    for (let round = 0; round < 5; round++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection, score);
    }

    if (score.humanScore > score.computerScore){
        console.log("You won the game! with a score of " + score.humanScore + " against " + score.computerScore)
    }   else {
        console.log("You lost the game with a score of " + score.humanScore + " against " + score.computerScore)
    }
}

playGame()