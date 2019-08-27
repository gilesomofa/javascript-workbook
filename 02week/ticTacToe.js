'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];
function horizontalWin() {
    if
      ((board [0][0] === board [0][1]) &&
       (board [0][0] === board [0][2])){
        console.log('works');
       }
    
    if
      ((board [1][0] === board [1][1]) &&
       (board [1][0] === board [1][2])){
        console.log('got it');
       }
       
    if
      ((board [2][0] === board [2][1]) &&
       (board [2][0] === board [2][2])){

        console.log('3 times');
       }
       
       function verticalWin() {
  
    if
        ((board [0][0] === board [1][0])&&
          (board [0][0] === board [2][0])) {
          console.log('vertical victory')
          }
    
   
    if
        ((board [0][1] === board [1][1])&&
          (board [0][1] === board [2][1])) {

          console.log('vertical victoryy')
          }
    
      if
        ((board [0][2] === board [1][2])&&
          (board [0][2] === board [2][2])){

            console.log('vertical victoryyy')
          }
       }
        verticalWin()
       
function diagonalWin() {
  
       if
        ((board [0][0] === board [1][1])&&
          (board [0][0] === board [2][2])) {

            console.log('diagonal victory')
          }

       if
        ((board [0][2] === board [1][1])&&
          (board [0][2] === board [2][0])) {

            console.log('diagonal victoryy')
          }

       }
        diagonalWin()

    


function checkForWin() {
  if ((horizontalWin === true))||
  if ((verticalWin === true))|| 
  if((diagonalWin == true))
  
  
  //make sure, all types of wins are checked
}

function ticTacToe(row, column) {
  // make sure pieces are not placed on squares that already taken
   //here should add piece, check for win and switch playerTurn
   board[row][column]= playerTurn;

}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
}