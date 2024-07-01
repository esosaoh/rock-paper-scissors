function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random()*3);
    let computerChoice = choices[randomNumber];
    return computerChoice;
}

function getHumanChoice(event){
    return event.target.dataset.selection; 
    }

function playRound(humanChoice, computerChoice, score) {
    let resultMessage;

    if (humanChoice.toLowerCase() === computerChoice.toLowerCase()){
        resultMessage = "It's a tie";
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors"){
        resultMessage = "Rock beats scissors, you win this round!";
        score.humanScore ++;
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper"){
        resultMessage = "Paper beats rock, you lose this round";
        score.computerScore++;
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors"){
        resultMessage = "Scissors beats paper, you lose this round";
        score.computerScore++;
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock"){
       resultMessage = "Paper beats rock, you win this round!";
        score.humanScore++;
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper"){
        resultMessage = "Scissors beats paper, you win this round!";
        score.humanScore++;
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock"){
        resultMessage = "Rock beats scissors, you lose this round";
        score.computerScore++;
    } 

    document.getElementById("resultsText").textContent = resultMessage;
   
    document.getElementById("scoresText").textContent = `Human ${score.humanScore} - ${score.computerScore} Computer`;

    if (score.humanScore === 5) {
        document.getElementById("finalResultsText").textContent = " Congratulations! You won the game!";
        disableButtons();
    } else if (score.computerScore === 5) {
        document.getElementById("finalResultsText").textContent = " Haha! You lost the game!";
        disableButtons();
    }
}

function disableButtons(){
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
    }

function enableButtons(){
    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;
}

function newGame(){
    score = {humanScore: 0, computerScore: 0};
    document.getElementById("resultsText").textContent = "";
    document.getElementById("finalResultsText").textContent = "";
    document.getElementById("scoresText").textContent = `Human ${score.humanScore} - ${score.computerScore} Computer`
    enableButtons();
}
let score = {humanScore: 0, computerScore: 0};

document.addEventListener('DOMContentLoaded',function() {
    const btnRock = document.getElementById("btnRock");
    const btnPaper = document.getElementById("btnPaper");
    const btnScissors = document.getElementById("btnScissors");
    const btnNewGame = document.getElementById("btnNewGame");

    btnRock.addEventListener("click", (event) => {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice(event);
        playRound(humanSelection, computerSelection, score);
    });

    btnPaper.addEventListener("click", (event) => {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice(event);
        playRound(humanSelection, computerSelection, score);
    });

    btnScissors.addEventListener("click", (event) => {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice(event);
        playRound(humanSelection, computerSelection, score);
    });

    btnNewGame.addEventListener("click", newGame);
})

