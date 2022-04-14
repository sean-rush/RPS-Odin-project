//Variables for the computer/player selection...

let choices = ['rock','paper','scissors'];

//Functions for the computer random selection...

function compC(){
    return choices[Math.floor(Math.random() * choices.length)];
}

//Function for a single round to play...

let playerScore = 0;
let compScore = 0;
let gameScore = compScore + playerScore;

function game(userChoice){

    const compChoice = compC();
    
    switch (compChoice + userChoice){
        case 'rockscissors':
        case 'scissorspaper':
        case 'paperrock':
            results = ++compScore;
            break;
        
        case 'scissorsrock':
        case 'paperscissors':
        case 'rockpaper':
            results = ++playerScore;
            break;
        
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            results = null;
            break;      
    }
//Changing the color of the selected word..

    switch (compChoice){
        case 'rock':
            crock.style.color = 'black';
            cpaper.style.color = 'rgba(172, 174, 175, 0.973)';
            cscissors.style.color = 'rgba(172, 174, 175, 0.973)';
            break;
        case 'paper':
            cpaper.style.color = 'black';
            crock.style.color = 'rgba(172, 174, 175, 0.973)';
            cscissors.style.color = 'rgba(172, 174, 175, 0.973)'
            break;
        case 'scissors':
            cscissors.style.color = 'black';
            cpaper.style.color = 'rgba(172, 174, 175, 0.973)';
            crock.style.color = 'rgba(172, 174, 175, 0.973)'
            break;
        case '':
            break
    }
// changing the color of the computer selected word...

    switch (userChoice){
        case 'rock':
            rock.style.color = 'black';
            paper.style.color = 'rgba(172, 174, 175, 0.973)';
            scissors.style.color = 'rgba(172, 174, 175, 0.973)';
            break;
        case 'paper':
            paper.style.color = 'black';
            rock.style.color = 'rgba(172, 174, 175, 0.973)';
            scissors.style.color = 'rgba(172, 174, 175, 0.973)'
            break;
        case 'scissors':
            scissors.style.color = 'black';
            paper.style.color = 'rgba(172, 174, 175, 0.973)';
            rock.style.color = 'rgba(172, 174, 175, 0.973)'
            break;
        case '':
            break

    }

    //DOM Market manipulation for single round...

    const compS = document.querySelector('#computer');
    compS.textContent = compScore;

    const playerS = document.querySelector('#player');
    playerS.textContent = playerScore;

    //Selecting the winner of five rounds...

    function winner(y,j){
        if (j === 5){
            console.log('Congrats! You Win!');
            console.log('computer score', y, 'player score',j);
            alert('congrats you win!' + '       computer score - ' + y + '      player score - ' + j);
            confirm = window.location.reload();
        }else if (y === 5){
            console.log('Ooooh Too Bad, Maybe Next Time!');
            console.log('computer score', y, 'player score', j);
            alert('to bad...  try agian?' + '      computer score - ' + y + '      player score - ' + j)
            confirm = window.location.reload();
        }else if (y === 5 && j === 5){
            console.log('Wow Its Tie');
            console.log('computer score', y, 'player score', j);
            confirm = window.location.reload();
        }else{}
    }
    winner(compScore, playerScore);

}

//Selectors for the main buttons in UI...

let playerRock = 'rock'
let playerPaper = 'paper'
let playerScissors = 'scissors'

const crock = document.getElementById('subHeader1');
const cpaper = document.getElementById('subHeader2');
const cscissors = document.getElementById('subHeader3');

const rock = document.querySelector('#mainHeader1');
rock.addEventListener ('click', () =>{
    game(playerRock);
})
    
const paper = document.querySelector('#mainHeader2');
paper.addEventListener ('click', () => {
    game(playerPaper);
})

const scissors = document.querySelector('#mainHeader3');
scissors.addEventListener ('click', () => {
    game(playerScissors);
})









 





    





