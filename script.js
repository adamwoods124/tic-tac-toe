const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  return {
    board,
  };
})();

const Player = (name, num) => {
  const getName = () => name;
  const getNum = () => num;

  const marker = (num) => {
    if (num == 1) {
      return "X";
    } else {
      return "O";
    }
  };

  let won = false;

  const hasWon = () => {
    won = true;
  };

  return {
    getName,
    getNum,
  };
};

const displayController = (() => {
  p1name = window.prompt("Enter player 1 name: ");
  p2name = window.prompt("Enter player 2 name: ");

  const player1 = Player(p1name, 1);
  const player2 = Player(p2name, 2);

  var displayBoard = () => {
    for (let i = 1; i < 10; i++) {
      square = document.getElementById("" + i);
      square.textContent = gameBoard.board[i - 1];
    }
  };

  var playerToggle = true;
  var chooseSquare = (event) => {
    let marker = "";
    let squareNum = event.id;
    if (playerToggle) {
      marker = "X";
    } else {
      marker = "O";
    }
    if (event.textContent == "") {
      gameBoard.board[parseInt(squareNum) - 1] = marker;
      event.textContent = marker;
      playerToggle = !playerToggle;
      checkForWin(marker);
    }
  };

  playerWin = (mark) => {
    setTimeout(function () {
      if (mark == "X") {
        alert(p1name + " wins");
      } else {
        alert(p2name + " wins");
      }

      gameBoard.board = ["", "", "", "", "", "", "", "", ""];
      displayBoard();
    }, 50);
    playerToggle = !playerToggle;
  };

  var checkForWin = (mark) => {
    let won = false;
    for (i = 0; i < 3; i++) {
      if (
        gameBoard.board[i] == mark &&
        gameBoard.board[i + 3] == mark &&
        gameBoard.board[i + 6] == mark
      ) {
        won = true;
        playerWin(mark);
      }
    }
    for (i = 0; i < 7; i += 3) {
      if (
        gameBoard.board[i] == mark &&
        gameBoard.board[i + 1] == mark &&
        gameBoard.board[i + 2] == mark
      ) {
        playerWin(mark);
        won = true;
      }
    }
    if (
      gameBoard.board[0] == mark &&
      gameBoard.board[4] == mark &&
      gameBoard.board[8] == mark
    ) {
      playerWin(mark);
      won = true;
    }
    if (
      gameBoard.board[2] == mark &&
      gameBoard.board[4] == mark &&
      gameBoard.board[6] == mark
    ) {
      playerWin(mark);
      won = true;
    }
    let count = 0;
    for (let i = 0; i < 9; i++) {
      if (gameBoard.board[i] != "") {
        count++;
      }
    }
    if (count == 9 && !won) {
      setTimeout(function () {
        alert("It's a tie");
        gameBoard.board = ["", "", "", "", "", "", "", "", ""];
        displayBoard();
      }, 50);
      playerToggle = !playerToggle;
    }
  };

  var clearBoard = () => {
    if (confirm("Clear the board?")) {
      setTimeout(function () {
        gameBoard.board = ["", "", "", "", "", "", "", "", ""];
        displayBoard();
      }, 50);
      playerToggle = !playerToggle;
    }
  };

  return {
    displayBoard,
    chooseSquare,
    checkForWin,
    clearBoard,
  };
})();
