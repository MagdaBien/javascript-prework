function printMessage(msg, field='messages') {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById(field).appendChild(div);
}

function clearMessages(field='messages') {
	document.getElementById(field).innerHTML = '';
}

function getMoveName(argMoveId) {
	if(argMoveId == 1) {
		return  'kamień';
	} else if (argMoveId == 2) {
		return  'papier';
	} else if (argMoveId == 3) {
		return  'nożyce';
	}	
  
	printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	return 'nieznany ruch';
}


function displayGameResult(computerMove, playerMove) {
	clearMessages("messages");

	printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
  
	if( (computerMove == 'kamień' && playerMove == 'papier') || (computerMove == 'nożyce' && playerMove == 'kamień') || (computerMove == 'papier' && playerMove == 'nożyce') ) {
		printMessage('Ty wygrywasz!');
		return "userWin";
	  }
	else if( (computerMove == 'nożyce' && playerMove == 'papier') || (computerMove == 'papier' && playerMove == 'kamień') || (computerMove == 'kamień' && playerMove == 'nożyce') ) {
		printMessage('Ja wygrywam!');
		return "compWin";		
	  } 
	else if( computerMove == playerMove ) {
		printMessage('Remis!');
		return "remis";
	  }     
	else {
		printMessage('Wykonaj poprawny ruch!'); 
		return "none";
	}
}



