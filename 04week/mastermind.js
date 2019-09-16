'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess) {
  // your code here
  // If guess string has any matches to solution string, store these 
  //if any character in guess string matches correct index store this
  //I'm returning an array for both guess and solution using .split, which will 
  //allow me to use methods to compare the two arrays
  let guessArr = guess.split('');
  let solutionArr = solution.split('');
  //establishing my counters to keep track of correct guesses and if in correct position
  let correctAns = 0
  let correctPos = 0
  
  //this function searches through array letter by letter and assigns their index
guessArr.forEach((letter, index) =>{

  //this 'if' statement determines if any of the letters in the guessArr are correct and in the same position as solutionArr
  if(letter === solutionArr[index]){
    correctPos++;
    solutionArr[index] = null;
  }
})

guessArr.forEach((letter, index) =>{
//this statement assigns a target for the solution 
  let target = solutionArr.indexOf(letter)
  //using bang "if this "
  if(target !== -1){
    solutionArr[target] = null;
    correctAns++;
    
  }
   
})
// console.log('correct position:', + correctPos,
// 'correct answer:' , + correctAns);
let hint = `${guess} ${correctPos}-${correctAns}`
board.push(hint)
return `${correctPos}-${correctAns}`

 }

function mastermind(guess) {
  solution = 'abcd'; 
  //this establishes the win state and announces it on console
  if(guess === solution){

    let str = 'You guessed it!'
    console.log(str)
    return str
  }

generateHint(guess)
}

function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
