//Variables for the computer/player selection...

let choices = ['rock','paper','scissors'];

let player = prompt ('will it be?? rock, paper, scissors');

//Functions for the computer random selection...

function compC(){
    return choices[Math.floor(Math.random() * choices.length)];
}

//Function for the player one selection...

function playerC(){
    return player;
}

//Function for a single round to play...

let results = null;
let playerScore = null;
let compScore = null;
let gameScore = compScore + playerScore;

function game(userChoice){
   
    const compChoice = compC();
    console.log(compChoice, userChoice);
    switch (compChoice + userChoice){
        case 'rockscissors':
        case 'scissorspaper':
        case 'paperrock':
            console.log('computer wins');
            results = ++compScore;
            break;
        
        case 'scissorsrock':
        case 'paperscissors':
        case 'rockpaper':
            console.log('you win');
            results = ++playerScore;
            break;
        
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            console.log('its a tie');
            results = null;
            break;      
    }
    console.log(results); 
    
}
//game(player);


//Function that runs five rounds and keeps track of score..

function fullGame(i){
    for (i = 0; i < 5; i++){
        game(player);
    }
}   
fullGame(gameScore);


//Function to record the winner of all five rounds..
function winner(y,j){
    if (y < j){
        console.log('Congrats! You Win!');
        console.log('computer score', y, 'player score',j);
    }else if (y > j){
        console.log('Ooooh Too Bad, Maybe Next Time!');
        console.log('computer score', y, 'player score', j);
    }else {
        console.log('Wow Its Tie');
        console.log('computer score', y, 'player score', j);
    }
    
    
}
winner(compScore, playerScore);





    





