

function getComputerChoice(){
    
let array= ["ROCK" , "PAPER", "SCISSOR"];
    return array[Math.floor(Math.random()*3)];
}

// burada computerSelection i da otomatik yollayan yok yalniz game() disinda! game()harici
//kullacaksan bi randomu calistirt iste getComputerChoice()u yani
function playRound(playerSelection, computerSelection){
   let pSelection= playerSelection.toUpperCase();


   if (pSelection===computerSelection) return "It's a tie!";
   if (pSelection==="ROCK"){
    return (computerSelection==="PAPER")? "You lose! Paper beats Rock" : "You win Rock beats Scissor";
   }
   if(pSelection==="PAPER"){
    return (computerSelection==="SCISSOR")? "You lose! Scissor beats Paper" : "You win! Paper beats Rock";
   }
   if(pSelection==="SCISSOR"){
    return (computerSelection==="ROCK")? "You lose! Rock beats Scissor!" : "You win! Scissor beats Paper";
   }
}

 function game(playerSelection){
    let playerWin=0;
    let computerWin=0;

    for (let i = 0; i < 5; i++) {
        let rounds=playRound(playerSelection,getComputerChoice());
        console.log(rounds);
        if(rounds.charAt(4) === "w") playerWin++;
        if(rounds.charAt(4) ==="l") computerWin++;         
    }
    if (playerWin === computerWin) return " it's a tie! Both of you win " +playerWin +" games and tied " +(5-playerWin) +" games!"; 
    return (playerWin>=3)?  "You are the winner! Out of 5 games you win " +playerWin+" of them!" :  "You lose! Out of 5 games you only win " +playerWin +" of them!" ;

}



    let uInput= prompt("Choose between a Rock, Paper or Scissor please:");
        uInput= uInput.toUpperCase();
    if (uInput !=="ROCK" && uInput !== "PAPER" && uInput !== "SCISSOR"){
        uInput = prompt("Aaand you didn't... Let's one last time:\nChoose between a Rock, Paper or Scissor please:\n");
    }

    game(uInput);
