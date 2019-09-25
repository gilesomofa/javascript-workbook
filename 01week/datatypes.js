//#1) defining a global variable d with the value of new Date();
let d = new Date();

//name my function and ask log to return passed in variable. 
function displayDate(){
  console.log (d);
}
//Invocation of function
displayDate()

//#2) I set a variable called num to a value of 13
let num = 13;

//I name a function convertNoToString and set a parameter named num. In the scope of the function, I give a variable n a value of num.toString() with parentheses to pass in arguments. I ask cl 1 to log what n is and cl 2 to verify the typeof object it is

function convertNoToString(num){
  let n = num.toString();
  console.log(n);
  console.log (typeof (n));
}
//Invocation of my function with global variable passed in
convertNoToString(num);

//I set a var name text and give a value using '', making what is inside a string.
let text = '5';

//#3) I name my function stringToNumber and define parameter as text
  function stringToNumber(text){

//within the scope of this function, I name another variable pointNum and give it a parseFloat value (which converts strings to numbers. I use the text parameter here as well 

let pointNum = parseFloat(text); 

//I am asking for cl 1 to log the result of the conversion and for cl 2 to verify typeof object to verify
  console.log (pointNum);
  console.log (typeof (pointNum));
}
//I invoke the function  
stringToNumber(text);


//#4) this program names a function 'dataType' with parameter of (obj). I used the js typeof (obj) to determine what 
//primitive datatype is being passed in. cl will print which type of obj is passed in
function dataType (obj){
  console.log (typeof (obj))
}
//I invoke the function and can pass in different types of objects and the log will tell me what obj type they are
dataType (25)

// #5) named a function and set up parameters as (num1, num2) and define equeation. 
 function sumOfTwoNumbers(num1, num2) {
  return num1 + num2;
}
//Invocation of above function
sumOfTwoNumbers(10000, 150);



// #6)function myDoubleConfirmation({// Parameters //} x, y)
function myDoubleConfirmation(x,y){

  
//  I use the && in an if statement to check two states of variable x. If both are true, cl will return "dblconfirmed"   
      if ( x < y  &&  x > 3 ){
      return ("dblconfirmed");
  
  
      }    
   
  }
  //I invoke the function passing in two numbers for x,y
  myDoubleConfirmation(4,8);
  
  
  
//#7) name a function and define parameters. use || sta

function myOneOfTwo(x,y){ 
  if ( x === y  ||  x > 3 ){
    console.log("yes");
  }
}
//passing in x y values and testing 
myOneOfTwo(7,5);


  
//#8) x and y are global variables 
  
  let x = 4;
  let y = 6;
//i'm naming my function here and x and y become parameters. I used the !(bang) to state if both statements are "not true" the program will run
function myDoubleFalse(x,y){
 if  ( !(x > y) && x !== 5 )
 //if my function has been written correctly, cl should bring back "none is true.""
 console.log( "none is true" )
} 
// here, i'm "passing in" x and y as arguments
myDoubleFalse(x,y);
