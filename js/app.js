console.log('Boo ya!');

var currentPlayer = "o"
var player1 = 'o'
var player2 = 'x'


var spaces = document.getElementsByClassName("spaces");
var messageBoard = document.getElementById("messageboard");

for (var i = 0; i < spaces.length; i++) {
  spaces[i].addEventListener('click', playerMove);
}
  function playerMove (ev) {
    ev.target.textContent = 'o'
    if (currentPlayer === 'o') {
    ev.target.textContent = 'o'

      currentPlayer = "x"
      messageBoard.textContent = "Player 1's turn.";
      checkWinner();

    } else if (currentPlayer === 'x') {
      ev.target.textContent = 'x'

      currentPlayer = "o"
      messageBoard.textContent = "Player 2's turn.";
      checkWinner();
    }
  }


  function checkWinner () {
  var firstInput = document.getElementById("box1").textContent;
  var secondInput = document.getElementById("box2").textContent;
  var thirdInput = document.getElementById("box3").textContent;
  var fourthInput = document.getElementById("box4").textContent;
  var fifthInput = document.getElementById("box5").textContent;
  var sixthInput = document.getElementById("box6").textContent;
  var seventhInput = document.getElementById("box7").textContent;
  var eighthInput = document.getElementById("box8").textContent;
  var ninthInput = document.getElementById("box9").textContent;
  if(firstInput === player1 && secondInput === player1 && thirdInput === player1){
  messageBoard.textContent = "Player 1 Wins!";
} else if (fourthInput === player1 && fifthInput === player1 && sixthInput === player1){
  messageBoard.textContent = "Player 1 Wins!";
} else if (seventhInput === player1 && eighthInput === player1 && ninthInput === player1){
  messageBoard.textContent = "Player 1 Wins!";
} else if (firstInput === player1 && fourthInput === player1 && seventhInput === player1){
  messageBoard.textContent = "Player 1 Wins!";
} else if (secondInput === player1 && fifthInput === player1 && eighthInput === player1){
  messageBoard.textContent = "Player 1 Wins!";
} else if (thirdInput === player1 && sixthInput === player1 && ninthInput === player1){
  messageBoard.textContent = "Player 1 Wins!";
} else if (firstInput === player1 && fifthInput === player1 && ninthInput === player1){
  messageBoard.textContent = "Player 1 Wins!";
} else if (thirdInput === player1 && fifthInput === player1 && seventhInput === player1){
  messageBoard.textContent = "Player 1 Wins!";
}else if(firstInput === player2 && secondInput === player2 && thirdInput === player2){
  messageBoard.textContent = "Player 2 Wins!";
} else if (fourthInput === player2 && fifthInput === player2 && sixthInput === player2){
  messageBoard.textContent = "Player 2 Wins!";
} else if (seventhInput === player2 && eighthInput === player2 && ninthInput === player2){
  messageBoard.textContent = "Player 2 Wins!";
} else if (firstInput === player2 && fourthInput === player2 && seventhInput === player2){
  messageBoard.textContent = "Player 2 Wins!";
} else if (secondInput === player2 && fifthInput === player2 && eighthInput === player2){
  messageBoard.textContent = "Player 2 Wins!";
} else if (thirdInput === player2 && sixthInput === player2 && ninthInput === player2){
  messageBoard.textContent = "Player 2 Wins!";
} else if (firstInput === player2 && fifthInput === player2 && ninthInput === player2){
  messageBoard.textContent = "Player 2 Wins!";
} else if (thirdInput === player2 && fifthInput === player2 && seventhInput === player2){
  messageBoard.textContent = "Player 2 Wins!";
}}



var newGame = document.getElementById("newgame");
newGame.addEventListener('click', function() {
  location.reload();
});

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");
});
