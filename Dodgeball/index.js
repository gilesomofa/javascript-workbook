// 'use strict';
  
// For this project 
// I need to be able to move People into player  and then move players from player to 
// either team. I also need to be able to remove players from either team into players and 
// then back to People.

// Buttons:  need a button to click on people to move them to draftable players
// I need a button to remove players from draftable players and back to people
// I need buttons (one for each team) to move draftable players to those teams
// I need buttons to remove Players from Red and Blue teams respectively and place 
// them back to draftable players


//         I think that these following methods and observations will be helpful:
//         I can create four classes: 1 People 2 Draft 3 Red  4 Blue 
//         Or do I start with People class and extend it 3 times?
        
//         I can use forEach to assign buttons and the buttons' functions to each object
//         in People class and so on and so on

//         Question-can buttons be on toggle to undo their functions, or do I need a button
//         to move an object and another button to remove the object?

//         When click on object in people class then print data to draftable class
       
        
        //If I were to do this from scratch this question would be asked
//         where and how does the addEventListener get implemented in below function?
        
//         function draftPlayer(team)

//         if(click red button){
//             return true
//             console.log("you are on red team")

//              } else {
//                  return false
//              }
//              if(click red button){
//                  extend red team class with this object && null object in draftable
//              }
//         When click on object in draftable class then print data to Red or Blue Team





// <!-- I need a button to click on people to move them to draftable players
// I need a button to remove players from draftable players and back to people
// I need buttons (one for each team) to move draftable players to those teams
// I need buttons to remove Players from Red and Blue teams respectively and place 
// them back to draftable players
// I will need to have a grid where I lay out four divs 

// <!-- each div will have ul and li which will be buttons that will inherit names of the People or draftable
// playes and so on when they are clicked. Hover states will need to be placed on each button in 
// each div with the appropriate message. 

// For example, when I hover on a button in people, an alert should 
// say "click this to move person to draftable" when clicked, the name should null in people and 
// occupy place in appropriate team class

// when I hover on an object in People a dropdown menu asking to enter person into draftable
// this will be applied to forEach()

// when I hover on a draftable a dropdown menu asking to click red team or blue team



const arrOfPeople = [
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ]
  
  const listOfPlayers = []
  const blueTeam = []
  const redTeam = []
  
  class player {
    constructor(){}
  }
  class blueTeammate {
    constructor(){}
  }
  class redTeammate {
    constructor(){}
  }
  
  const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    listElement.innerHTML = ""
    arrOfPeople.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "Make Player"
      button.addEventListener('click', function() {makePlayer(person.id)} )
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    })
  }
  const makePlayer = (id) => {
      let index 
      for(let i= 0; i<arrOfPeople.length; i++){
          if(arrOfPeople [i].id === id){
              index = i 
          }
      }
    listOfPlayers.push(arrOfPeople[index])
    arrOfPeople.splice(index, 1)
    console.log(arrOfPeople, listOfPlayers)
    listPeopleChoices()
  }

  const listTeamChoicesBlue = ()=> {
        const listElement = document.getElementById('player')
        arrOfPlayers.map(person => {
            const li = document.createElement("li")
            const button = document.createElement("button")
            button.innterHTML = "Make Teammate"
            button.addEventListener('click', function() {makeBlueTeammate(person.id)})
            li.appendChild(button)
            li.appendChild(document.createTextNode(person.name + " - " + person.team))
            listElement.append(li)
        })
            }
            const makeBlueTeammate = (id) =>{
                console.log(`li ${id} is on the blue team`)
           
      }
