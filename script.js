

function getComputerChoice(min, max) {
    let play = Math.floor(Math.random() * (max - min)) + min;
    switch (play) {
        case 0:
            return "✊";

        case 1:
            return "🤚";

        case 2:
            return "✌️";

    }
}
let humanScore = 0, compScore = 0;
const options = document.querySelector("#options");
const winner = document.querySelector("#winner-msg");
const compChoice = document.querySelector("#c-play");
const humanChoice = document.querySelector("#p-play");
const roundMsg = document.querySelector("#bottom");
const humanText = document.querySelector("#p-text")
const computerText = document.querySelector("#c-text");
function handleClick(e){
    let hchoice;
    let target = e.target;
    if (target.tagName == "BUTTON") {
         hchoice = target.textContent;
        playRound(hchoice);

    }
    
    if (humanScore==5||compScore==5) {
        endGame();
}
}
function endGame(){
    options.removeEventListener("click", handleClick);
    if (humanScore > compScore) {
        winner.innerText = "You win!"
    } else if (compScore > humanScore) {
        winner.innerText = "The matrix never looses"
    } else {
        winner.innerText = ""
    }

}
function playRound(hchoice){
    compChoice.innerText=getComputerChoice(0,3)
    // compChoice.classList.add("emoji-style")
    humanChoice.innerText=hchoice
    // humanChoice.classList.add("emoji-style");
    
    
    switch (hchoice) {
        case "✊":
            if (compChoice.innerText == '✊') {
                roundMsg.innerText="Tie"
            } else if (compChoice.innerText == '🤚') {
                roundMsg.innerText="paper beats rock- computer wins";
                compScore++;
            } else {
                roundMsg.innerText="rock beats scissor-you win";
                humanScore++;
            }
            break;

        case "🤚":
            if (compChoice.innerText == '✊') {
                roundMsg.innerText="paper beats rock-you win";
                humanScore++;
            } else if (compChoice.innerText == '🤚') {
                roundMsg.innerText="Tie";
            } else {
                roundMsg.innerText="scissor beats paper-computer wins";
                compScore++;
            }
            break;

        case "✌️":
            if (compChoice.innerText == '✊') {
                roundMsg.innerText="rock beats scissor-computer wins";
                compScore++;
            } else if (compChoice.innerText == '🤚') {
                roundMsg.innerText="scissor beats paper-you win";
                humanScore++;
            } else {
                roundMsg.innerText="Tie";
            }
            break;
        }

    humanText.innerText = `Player: ${humanScore}`;
    computerText.innerText = `Computer: ${compScore}`;
}
options.addEventListener("click", handleClick)

   

