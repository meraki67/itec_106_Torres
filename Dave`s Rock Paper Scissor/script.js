const handchoice = ["Rock", "Paper", "Scissors"];
const userDisplay = document.getElementById("userResult");
const botDisplay = document.getElementById("botResult");
const result = document.getElementById("result");
const userScoreDisplay = document.getElementById("userScoreDisplay");
const botDisplayScoreDisplay = document.getElementById("botScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const aichoice = handchoice[Math.floor(Math.random() * 3)];
    let result1 = "";

    if(playerChoice === aichoice){
        result1 = "😎 IT'S A TIE 😎!";
    }
    else{
        switch(playerChoice){
            case "Rock":
                result1 = (aichoice === "Scissors") ? "😊 YOU WON 😊!" : "😢 YOU LOSE 😢!";
                break;
            case "Paper":
                result1 = (aichoice === "Rock") ? "😊 YOU WON 😊!" : "😢 YOU LOSE 😢!";
                break;
            case "Scissors":
                result1 = (aichoice === "Paper") ? "😊 YOU WON 😊!" : "😢 YOU LOSE 😢!";
                break;
        }
    }

    userResult.textContent = `PLAYER: ${playerChoice}`;
    botResult.textContent = `Computer: ${aichoice}`;
    result.textContent = result1;

    result.classList.remove("redText", "blueText");

    switch(result1){
        case "😊 YOU WON 😊!":
            result.classList.add("redText");
            playerScore++;
            userScoreDisplay.textContent = playerScore;
            break;
        case "😢 YOU LOSE 😢!":
            result.classList.add("blueText");
            computerScore++;
            botScoreDisplay.textContent = computerScore;
            break;
    }
}