const gameCounter = {
  gamesInRound: 10,         // ile gier ma mieć runda 
  gameNumber: 0,           // która gra
  roundNumer: 0,           // która runda
  userWinsInRound: 0,
  compWinsInRound: 0,
  userWinsGlobal: 0,
  compWinsGlobal: 0 
}

function playGame(playerInput) 
{
  gameCounter.gameNumber++;
  let whoWinsGame = '';
  clearMessages('resultField');

  if(gameCounter.gameNumber <= gameCounter.gamesInRound)
  {
    whoWinsGame = playOneGame(playerInput);
    console.log("Nr gry: " + gameCounter.gameNumber + " | wynik: " + whoWinsGame);

    if(whoWinsGame == "userWin")        {   gameCounter.userWinsInRound++;    }
    else if (whoWinsGame == "compWin")  {   gameCounter.compWinsInRound++;    }
  }
  if(gameCounter.gameNumber == gameCounter.gamesInRound)
  {  
    gameCounter.roundNumer++;
    console.log('Koniec rundy nr ' + gameCounter.roundNumer); 

    const whoWinsRound=displayResult(gameCounter.userWinsInRound, gameCounter.compWinsInRound, 'round', 'resultField'); 
    if (gameCounter.userWinsInRound > gameCounter.compWinsInRound)        {      gameCounter.userWinsGlobal++;      }
    else if (gameCounter.userWinsInRound < gameCounter.compWinsInRound)   {      gameCounter.compWinsGlobal++;      }

    const whoWinsGlobal=displayResult(gameCounter.userWinsGlobal, gameCounter.compWinsGlobal, 'GLOBAL', 'resultGlobalField');
    console.log("GLOBAL: " + "userWinsGlobal: " + gameCounter.userWinsGlobal + " compWinsGlobal: " + gameCounter.compWinsGlobal);

    gameCounter.gameNumber = 0;
    gameCounter.userWinsInRound = 0;
    gameCounter.compWinsInRound = 0;   

  }
}

// zwraca wynik pojedynczej GRY
function playOneGame(playerInput)
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

