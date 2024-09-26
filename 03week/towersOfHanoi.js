'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let counter = 0

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

//this function needs to be able to move one row from stack to another row. needs to identify which stack will be moved
  //and where it will be placed. 
  //pieces can only move one at a time
  
function movePiece(start, end) {
  let v = stacks[start].pop()
          stacks[end].push(v)
          counter++
          console.log('number of moves',counter);
}


//This function needs to check if a larger piece is on the row i'm moving to. if so, this is a legal move.
  //if not it is an illegal move

function isLegal(start,end) { 
let a = stacks[start]
let b = stacks[end]
  if( a[a.length -1] < b[b.length -1] || b.length == 0) 
  return true
    else {
    return false
}
}
 
function checkForWin() {
 //Win condition is when all four pieces are situated in a different row than they all started and they need
 // to be in legal order(which will be in place as isLegal runs before checkForWin)
 
  if (stacks.b.length === 4 || stacks.c.length === 4){
    console.log('YOU WIN');
    return true
  }  
     else{
     return false
    }
}

function towersOfHanoi(startStack, endStack) {
  //This function calls above functions is proper order to ensure that the game runs properly
if (isLegal(startStack, endStack)){
    movePiece(startStack, endStack)
    checkForWin()
}

}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
