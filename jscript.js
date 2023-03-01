let playerResult=0;
let computerResult=0;
let result="";

function getComputerChoice(){
    
let array= ["rock" , "paper", "scissor"];
    return array[Math.floor(Math.random()*3)];
}



const div = document.querySelectorAll('div');
div.forEach(div => {
    div.style.margin='20px';
    div.style.display='flex';
    div.style.justifyContent='center';
    div.style.alignContent='center';    
   
});


// burada computerSelection i da otomatik yollayan yok yalniz game() disinda! game()harici
//kullacaksan bi randomu calistirt iste getComputerChoice()u yani

function playRound(playerSelection, computerSelection){
   let pSelection= playerSelection.toLowerCase();
   
 

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
    
        playerResult += 1
    result = `You win! ${playerSelection} beats ${computerSelection}
        Player score: ${playerResult} Computer score: ${computerResult}`

    if (playerResult == 5) {
        result += 'You won the game!'
        playerResult=0;
        computerResult=0;
    }
}
else if (playerSelection == computerSelection) {
    result = ('It\'s a tie. You both chose ' + playerSelection
        + "\n\nPlayer score: " + playerResult + "\nComputer score: " + computerResult)
}
else {
    computerResult += 1
    result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
        + "\nPlayer score: " + playerResult + "\nComputer score: " + computerResult)

    if (computerResult == 5) {
        result += ' I won the game! '
        playerResult=0;
        computerResult=0;
   
    }
}
document.getElementById('score').textContent=result;
return
}

 /* function game(playerSelection){
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
*/


const buttons = document.querySelectorAll('button');



buttons.forEach(button => {
    button.style.padding='10px';
    button.style.margin='20px';
    button.addEventListener('click', ()=> playRound(button.id, getComputerChoice() ) )
});

