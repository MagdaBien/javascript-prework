const gamesInRound = 10;      // ile gier ma mieć runda 
let gameNumber = 0;           // która gra
let roundNumer = 0;           // która runda
let userWinsInRound = 0;
let compWinsInRound = 0;
let userWinsGlobal = 0;
let compWinsGlobal = 0; 


function playGame(playerInput) 
{
  gameNumber++;
  let whoWinsGame = '';
  clearMessages('resultField');

  if(gameNumber <= gamesInRound)
  {
    whoWinsGame = PlayOneGame(playerInput);
    console.log("Nr gry: " + gameNumber + " | wynik: " + whoWinsGame);

    if(whoWinsGame == "userWin")        {   userWinsInRound++;    }
    else if (whoWinsGame == "compWin")  {   compWinsInRound++;    }
  }
  if(gameNumber == gamesInRound)
  {  
    roundNumer++;
    console.log('Koniec rundy nr ' + roundNumer); 

    const whoWinsRound=displayResult(userWinsInRound, compWinsInRound, 'round', 'resultField'); 
    if (userWinsInRound > compWinsInRound)        {      userWinsGlobal++;      }
    else if (userWinsInRound < compWinsInRound)   {      compWinsGlobal++;      }

    const whoWinsGlobal=displayResult(userWinsGlobal, compWinsGlobal, 'GLOBAL', 'resultGlobalField');
    console.log("GLOBAL: " + "userWinsGlobal: " + userWinsGlobal + " compWinsGlobal: " + compWinsGlobal);

    gameNumber = 0;
    userWinsInRound = 0;
    compWinsInRound = 0;   

  }
}

// zwraca wynik pojedynczej GRY
function PlayOneGame(playerInput)
{
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  const computerMove = getMoveName(randomNumber);
  const playerMove = getMoveName(playerInput);
  const whoWinsGame=displayGameResult(computerMove, playerMove);  
  return whoWinsGame;       
}

// zwraca wynik pojedynczej RUNDY lub wynik GLOBALNY
function displayResult(userWins, compWins, what, msgField) 
{
  let tmpMsg;
  let whoWins;

	if(userWins == compWins ) {
		tmpMsg = "Remis in " + what;
	  }
	  else if (userWins>compWins) {
    tmpMsg = "User win " + what;
    whoWins="userWin";
	  }
	  else {
    tmpMsg = "Comp win " + what;
    whoWins="compWin";    
	  }
	  tmpMsg =  "<b>" + tmpMsg + "</b> <br> user wins: " + userWins + "<br> comp wins: " + compWins;
    clearMessages(msgField);
	  printMessage(tmpMsg, msgField);

    return whoWins;
}

document.getElementById('PlayRock').addEventListener('click', function(){
 playGame('1'); 
});
document.getElementById('PlayPaper').addEventListener('click', function(){
 playGame('2'); 
});
document.getElementById('PlayScissors').addEventListener('click', function(){
 playGame('3'); 
});

