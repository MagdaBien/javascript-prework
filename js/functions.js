function printMessage(msg) {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
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
  
	if( computerMove == 'kamień' && playerMove == 'papier') {
		printMessage('Ty wygrywasz!');
	  }
	else if( computerMove == 'papier' && playerMove == 'papier') {
		printMessage('Remis!');
	  }
	else if( computerMove == 'nożyce' && playerMove == 'papier') {
		printMessage('Ja wygrywam!');
	  } 
	else if( computerMove == 'kamień' && playerMove == 'kamień') {
		printMessage('Remis!');
	  }
	else if( computerMove == 'papier' && playerMove == 'kamień') {
		printMessage('Ja wygrywam!');
	  }
	else if( computerMove == 'nożyce' && playerMove == 'kamień') {
		printMessage('Ty wygrywasz!');
	  } 
	else if( computerMove == 'kamień' && playerMove == 'nożyce') {
		printMessage('Ja wygrywam!');
	  }
	else if( computerMove == 'papier' && playerMove == 'nożyce') {
		printMessage('Ty wygrywasz!');
	  }
	else if( computerMove == 'nożyce' && playerMove == 'nożyce') {
		printMessage('Remis!');
	  }     
	else {
		printMessage('Wykonaj poprawny ruch!'); 
	}
  }