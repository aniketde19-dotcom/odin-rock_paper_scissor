console.log("Hello");
// 0-rock 
// 1-paper
// 2-scissor
function getComputerChoice(min,max){
 let play = Math.floor(Math.random() * (max - min)) + min;
  switch(play){
    case 0:
        return "rock";
        
    case 1:
        return "paper";
        
    case 2:
        return "scissor";
        
  } 
  }
function getHumanChoice(){
    let choice=prompt("Enter your play-rock, paper or scissor")
     return choice ? choice.toLowerCase() : "";
}

function playGame(){
    let hscore=0;
let cscore=0;
function playRound(hchoice,cchoice){
  
    console.log("Computer choice: "+cchoice);
    switch(hchoice){
        case "rock":
            if(cchoice=='rock'){
                console.log("Tie");
            }else if(cchoice=='paper'){
                console.log("paper beats rock- computer wins");
                cscore++;
            }else{
                console.log("rock beats scissor-you win");
                hscore++;
            }
            break;

        case "paper":
            if(cchoice=='rock'){
                console.log("paper beats rock-you win");
                hscore++;
            }else if(cchoice=='paper'){
                console.log("Tie");
            }else{
                console.log("scissor beats paper-computer wins");
                cscore++;
            }
            break;
        
        case "scissor":
            if(cchoice=='rock'){
                console.log("rock beats scissor-computer wins");
                cscore++;
            }else if(cchoice=='paper'){
                console.log("scissor beats paper-you win");
                hscore++;
            }else{
                console.log("Tie");
            }
            break;
         default:
            console.log("Enter valid choice");
            break;
    
    }
    console.log("Score\n You: "+hscore+" Computer: "+cscore);
}

for(let i=1;i<=5;i++){
      let human_choice=getHumanChoice();
    let comp_choice=getComputerChoice(0,3);
    playRound(human_choice,comp_choice);
}


console.log("Final score\nYou: "+hscore+" Computer: "+cscore);
if(cscore>hscore){
    console.log("Computer wins by "+(cscore-hscore)+" points")
}else if(hscore>cscore){
    console.log("You win by "+(hscore-cscore)+" points");
}else{
    console.log("Tied");
}
}
console.log("Lets play 5 rounds of rock paper scissor")
playGame()
