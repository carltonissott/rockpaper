function getComputerChoice(){
    var decision = Math.floor(Math.random()*3);
  if (decision == 0){
      var decision = "rock";
    }
    else if (decision == 1) {
      var decision = "paper";
    }
    else if (decision == 2){
      var decision = "scissors";
    }
      return decision;
  }

  function playRound(playerSelection,decision,playerScore,computerScore){
      if (playerSelection == decision) {
          return("Tied! You chose the same!") 
      }
      else if (playerSelection == "rock" && decision == "paper"){
         return("Paper beats rock... you lose this round!");
         playerScore=playerScore + 1;
      }
      else if (playerSelection == "scissors" && decision == "rock"){
          return("Rock beats scissors... you lose this round!")
      }
      else if (playerSelection == "paper" && decision == "scissors"){
          return("Scissors beats paper... you lose this round!")
      }
      else if (playerSelection == "rock" && decision == "scissors"){
          return("Rock beats scissors... you win this round!")
      }
      else if (playerSelection == "paper" && decision == "rock"){
          return("Paper beats rocks... you win this round!")
      }
      else if (playerSelection == "scissors" && decision == "paper"){
          return("Scissors beats paper... you win this round!")
      }
 }
// function game()
// {
  // for (let i = 0; i<5; i++) {
      // let playerSelection = prompt("Choose rock, paper, or scissors.","Rock");
      // playerSelection = playerSelection.toLowerCase();
      // decision= getComputerChoice();
      // final = playRound(playerSelection,decision,playerScore,computerScore); 
      // console.log(final);
      // if(final.includes("win")){
      //   playerScore++;
      // }
      // else {
      //   computerScore++;
      // }
  // // }
  // console.log("Player score:"+playerScore)
  // console.log("Computer score:"+computerScore)
// }
gameCount = 0;
playerScore = 0;
computerScore = 0;
// game();
// if(playerScore>computerScore){
//   console.log("YOU WIN!")
// }
// else {console.log("You lost!")}


const rock = document.querySelector('#rock');
rock.addEventListener('click',()=>{
  playerSelection = "rock";
  console.log("Rock")
  decision= getComputerChoice();
  final = playRound(playerSelection,decision,playerScore,computerScore); 
  // Changes H1 text 
  const message = document.querySelector(".mainheader") 
  message.innerHTML = final
  // Updates Scoreboard
  scoreUpdate()
  winStatus()
})
const paper = document.querySelector('#paper');
paper.addEventListener('click',()=>{
  playerSelection = "paper";
  console.log("Paper")
  decision= getComputerChoice();
  final = playRound(playerSelection,decision,playerScore,computerScore); 
  // Changes H1 text 
  const message = document.querySelector(".mainheader") 
  message.innerHTML = final
  // Updates Scoreboard
  scoreUpdate()
  winStatus()
  
})
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click',()=>{
  playerSelection = "scissors";
  console.log("Scissors")
  decision= getComputerChoice();
  final = playRound(playerSelection,decision,playerScore,computerScore);
  // Changes H1 text 
  const message = document.querySelector(".mainheader") 
  message.innerHTML = final
  // Updates Scoreboard
  scoreUpdate()
  // Checks to see if game is still in play.
  winStatus()
})

function scoreUpdate(){
  gameCount++;
  if(final.includes("win")){
    playerScore++;
  }
  else if (final.includes("lose")) {
    computerScore++;
  }
  const playerscoreboard = document.querySelector(".playerScoreboard");
  playerscoreboard.innerHTML= "Player Score: " + playerScore 
  const computerscoreboard = document.querySelector(".computerScoreboard");
  computerscoreboard.innerHTML= "Computer Score: " + computerScore 

}

function winStatus(){
if (computerScore > 4 || playerScore > 4){
const gameOver = document.querySelector(".gameover");
gameOver.classList.toggle("active");
  if (playerScore>computerScore){
    gameOver.innerHTML= "<span class=win>YOU WIN!</span>"}
  else{
      gameOver.innerHTML= "<span class=win>YOU LOSE!</span>"}
    }
else{}
}




