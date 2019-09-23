'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Checker() {
  // Your code here
} 
  // method that creates an 8x8 array, filled with null values

  class Board {
    constructor(grid, whitePiece, blackPiece, checkers){
      this.grid = [];
      this.whitePiece = "W";
      this.blackPiece = "B";
      this.checkers = "checkers";
            }
    

  
  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column]);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }
  
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }
   initializeGrid(){
    //this code places white pieces on everyother space on first and third whiteSide row
    for(let row1 = 0; row1 <3; row1++){
      for(let col1 = 0; col1 < 8; col1++){
        if (row1 % 2 === 0 && col1 % 2 === 1){
          this.grid[row1][col1] = this.whitePiece;
        }
      }
    }

  //this code places white pieces on everyother space on second whiteSide row
  for(let row2 = 0; row2 <3; row2++){
    for(let col2 = 0; col2 < 8; col2++){
      if (row2 % 2 === 1 && col2 % 2 === 0){
        this.grid[row2][col2] = this.whitePiece;
      }
    }
  }
//this code places black pieces on everyother space on first and third blackSide row
  for(let row3 = 5; row3 <8; row3++){
  for(let col3 = 0; col3 < 8; col3++){
    if (row3 % 2 === 1 && col3 % 2 === 0){
      this.grid[row3][col3] = this.blackPiece;
    }
  }
}
   
//places black pieces on everyother space on second blackSide row
for(let row4 = 5; row4 <8; row4++){
for(let col4 = 0; col4 < 8; col4++){
  if (row4 % 2 === 0 && col4 % 2 === 1){
    this.grid[row4][col4] = this.blackPiece;
  }
}
}
}
  }
  // Your code here
//to move checkers, i will need to be able to move any piece diagonally in either direction

//can use the pattern of 9s and 11s to allow pieces to move to "legal" spaces
//(B) right -9 or left -11 (W) right + 9 (W) + left 11

//we need to identify legal spaces and incorporate jumps
//apply an extend class for crowns and their movements
//

class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
    this.board.initializeGrid();
  }
  //establishes from where to where
  moveChecker(start, end){
    //return coordinates as an array
    let startMovePiece = start.split('')
    let endMovePiece = end.split('')
    console.log(startMovePiece)
    console.log(endMovePiece)
   //similar to change player turn sets the endMovePiece x and y indices = to beginMovePiece x and y indices thus moving piece
    this.board.grid[ endMovePiece[0] ][endMovePiece [1] ] = this.board.grid [ startMovePiece [0]] [startMovePiece[1] ]
    //clears out the startMovePiece x and y indices
    this.board.grid[startMovePiece [0]] [startMovePiece [1] ] = null
  }
  illegalMove(){
    //using 9 and 11 we are going to define legal moves for Black and White pieces respectively
    //white pieces moving forward and left example 01 moves to 12 difference is 11
    //white pieces moving forward and right example 03 to 12 difference is 9 
    //as white moves, the numbers increase

    //black pieces moving forward to left example 52 to 41 difference = 11
    //black pieces moving forward to right example 52 to 43 difference = 9
    //as black moves forward numbers decrease
    pseudoCodeWhite(){
    //need to convert indices
      if ((whitePiece [startMovePiece [''] ]- whitePiece [endMovePiece[''] ] === 9 || whitePiece [startMovePiece [''] ]- whitePiece [endMovePiece [''] ]=== 11)){
      return true
    }else {
      console.log('this move is illegal');
    }

    }
    pseudoCodeBlack(){
    if((blackPiece [endMovePiece [''] ] - blackPiece [startMovePiece['']] === whitePiece[endMovePiece] 
    || blackPiece [endMovePiece ['']] - blackPiece [startMovePiece['']] === 9)){
      return true
    } else {
      console.log('this move is illegal')
    }
  }
  //code for jump any piece should be able to move two spaces left or right if endMovePiece is occupied by opposing color
  //example black piece 52 (left) jumping white piece 41 landing at 30 (note 22 -11/2)
  //same black piece 52 jumping white piece at 43 landing at 34 (18 - 9/2)
  pseudoJumpBlackChecker(){
    if ((blackPiece [endMovePiece ['']] - whitePiece [endMovePiece['']] === 11 || blackPiece [endMovePiece ['']] - whitePiece [endMovePiece['']] === 9))
    &&
    
    {
      return true
    } else {
      return false
        
    }
    if(())
  }
  }
}
function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
  