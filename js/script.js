/* ruch komputera */
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1) {
  computerMove = 'kamień';
} else if (randomNumber == 2) {
	computerMove = 'papier';
} else {
	computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

/* ruch usera */

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
	playerMove = 'papier';
} else if (playerInput == '3') {
	playerMove = 'nożyce';
} else {
	playerMove = 'nieznany ruch';
}

if(playerMove == 'nieznany ruch') {
    printMessage('Wybrano nieznany ruch. Wybierz liczbę 1, 2 lub 3.');
}
else {
    printMessage('Twój ruch to: ' + playerMove);
}

/* wynik gry */

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
else if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');
  }
else if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Ja wygrywam!');
  } 
else  if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
  }
else if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Ja wygrywam!');
  }
else if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  } 
else  if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Ja wygrywam!');
  }
else if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  }
else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis!');
  }     
else {
    printMessage('Wykonaj poprawny ruch!'); 
}
