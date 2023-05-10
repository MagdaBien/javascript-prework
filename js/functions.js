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


function displayResult(ComputerMove, PlayerMove) {
	printMessage('Zagrałem ' + ComputerMove + ', a Ty ' + PlayerMove);
  
	if( (ComputerMove == 'kamień' && PlayerMove == 'papier') || (ComputerMove == 'nożyce' && PlayerMove == 'kamień') || (ComputerMove == 'papier' && PlayerMove == 'nożyce') ) {
		printMessage('Ty wygrywasz!');
		return "userWin";
	  }
	else if( (ComputerMove == 'nożyce' && PlayerMove == 'papier') || (ComputerMove == 'papier' && PlayerMove == 'kamień') || (ComputerMove == 'kamień' && PlayerMove == 'nożyce') ) {
		printMessage('Ja wygrywam!');
		return "compWin";		
	  } 
	else if( (ComputerMove == 'nożyce' && PlayerMove == 'nożyce') || (ComputerMove == 'kamień' && PlayerMove == 'kamień') || (ComputerMove == 'papier' && PlayerMove == 'papier') ) {
		printMessage('Remis!');
		return "remis";
	  }     
	else {
		printMessage('Wykonaj poprawny ruch!'); 
		return "none";
	}
}

