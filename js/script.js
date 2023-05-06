function playGame(playerInput) {
  clearMessages();

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);
  console.log('Wybrana liczba to: ' + playerInput);
  
  let computerMove = getMoveName(randomNumber);
  let playerMove = getMoveName(playerInput);

  displayResult(computerMove, playerMove); 
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

