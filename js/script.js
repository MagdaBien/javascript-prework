let gameAmount = 0;        
let roundAmountGlobal = 0;       
let roundAmount = 10;     // ile gier ma mieć runda
let result = '';
let roundResultMsg = '';
let tmpMsg = '';
let userWinRound = 0;
let compWinRound = 0;
let userWinGlobal = 0;
let compWinGlobal = 0;

function playGame(playerInput) {
  clearMessages();

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  const computerMove = getMoveName(randomNumber);
  const playerMove = getMoveName(playerInput);

  return displayResult(computerMove, playerMove); 
}

function countRoundResult() {
  gameAmount++;
  clearMessages("resultField");

  if(gameAmount <= roundAmount)
  {  
    console.log("Nr gry: " + gameAmount + " | wynik: " + result);
    if(result == "userWin") {
      userWinRound++;
    }
    else if (result == "compWin") {
      compWinRound++;
    }
  }
  if(gameAmount == roundAmount)
  {
    roundAmountGlobal++;    
    displayRoundResult();
    displayGlobalResult();

    gameAmount = 0;
    userWinRound = 0;
    compWinRound = 0;    

  }
}

function displayRoundResult() {
  console.log('Koniec rundy');

	if(userWinRound == compWinRound ) {
		roundResultMsg = "Remis in this round";
	  }
	  else if (userWinRound>compWinRound) {
		roundResultMsg = "User win this round";
		userWinGlobal++;
	  }
	  else {
		roundResultMsg = "Comp win this round";
		compWinGlobal++;
	  }

	  tmpMsg =  "<b>" + roundResultMsg + "</b> <br> liczba gier wygranych przez usera: " + userWinRound + "<br> liczba gier wygranych przez komputer: " + compWinRound;
	  printMessage(tmpMsg, "resultField");
}

function displayGlobalResult() {
  console.log("Wynik globalny: " + "userWinGlobal: " + userWinGlobal + " compWinGlobal: " + compWinGlobal);

  if(userWinGlobal == compWinGlobal ) {
		tmpMsg = "Remis globally";
	  }
	  else if (userWinGlobal>compWinGlobal) {
    tmpMsg = "User wins globally";
	  }
	  else {
    tmpMsg = "Comp wins globally";
	  }
  
  clearMessages("resultGlobalField");
  tmpMsg = "<b>" + tmpMsg + "</b> <br> liczba rund wygranych przez usera: " + userWinGlobal + " <br> liczba rund wygranych przez komputer: " + compWinGlobal + "<br>Liczba wszystkich rozegranych rund: " + roundAmountGlobal;
  printMessage(tmpMsg, "resultGlobalField");
}

document.getElementById('PlayRock').addEventListener('click', function(){
  result=playGame('1'); 
  countRoundResult();
});
document.getElementById('PlayPaper').addEventListener('click', function(){
  result=playGame('2'); 
  countRoundResult();

});
document.getElementById('PlayScissors').addEventListener('click', function(){
  result=playGame('3'); 
  countRoundResult();
});

