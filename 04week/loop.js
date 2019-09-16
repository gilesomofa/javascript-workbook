//Use a do...while loop to console.log the numbers from 1 to 1000.

// var result = "";
// var i = 0;

// do {
//   i = i + 1;
//   result = result + i;
// } while (i < 1000);

// console.log(result);

//Create an object (an array with keys and values) called person with the following data:
let person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
};



// //Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.




const persons =[
  {firstName: "Jane", lastName: "Doe", birthDate: "Jan 5, 1925", gender: "female"},
  {firstName: "Bill", lastName: "Snow",  birthDate: "June 6, 1969", gender: "male"},
  {firstName: "Catherine", lastName: "Dunham", birthDate: "Sep 31, 1939", gender: "female"},
  {firstName: "Hendrick", lastName: "Santos", birthDate: "April 9, 1976", gender: "male"}
  ];
function myFunction(){

  
  var x;
  for(x in persons){
    let str = persons[x].birthDate
    let odd = str.charAt(str.length-1);
    if(odd.match(/[13579]/)){
      console.log(persons[x].birthDate);
    }
  }
  }
  myFunction()
//   const name = persons.map (function(persons){
//     return persons.firstName
//   })
//     console.log(name);

//   const birthday = persons.map(persons => persons.birthDate);
//   console.log(birthday);
    
//   const males = persons.filter(persons => persons.gender === "male");
//   console.log(males);