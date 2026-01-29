
//getting computer choice
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
//getting human choice
let humanScore = 0, compScore = 0;
function getHumanChoice(){
    
const options=document.querySelector("#options");
options.addEventListener("click", e=>{
let target=e.target;
if(target.tagName=="BUTTON"){
const hchoice=target.textContent;
playRound(hchoice)
}

})
}
//round

function playRound(hchoice){
    const compChoice=document.querySelector("#c-play");
    const humanChoice=document.querySelector("#p-play");
    compChoice.innerText=getComputerChoice(0,3)
    // compChoice.classList.add("emoji-style")
    humanChoice.innerText=hchoice
    // humanChoice.classList.add("emoji-style");
    
    const roundMsg=document.querySelector("#bottom")
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
        const humanText=document.querySelector("#p-text")
        const computerText=document.querySelector("#c-text");
    humanText.innerText = `Player: ${humanScore}`;
    computerText.innerText = `Computer: ${compScore}`;


}
getHumanChoice()
