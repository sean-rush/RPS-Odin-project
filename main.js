function computerChoice(choice){
    return choice[Math.floor(Math.random() * choice.length )];
}

let choice = ['rock','paper','scissors'];

playerSelection = prompt('will it be?....rock, paper or scissors?');

let compWin = 0;

let playerWin = 0;

computerSelection = (computerChoice());







function playRound(playerSelection,computerSelection){

    if (playerSelection === 'rock' && computerSelection === 'paper'){
        console.log('Nice try! paper beats rock');
        console.log(playerWin, ++compWin)
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log('You Win! rock smashes scissors');
        console.log(++playerWin, compWin);
    }
    else if (playerSelection === 'rock' && computerSelection === 'rock'){
        console.log('Its a Tie!');
        console.log(playerWin, compWin);
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper'){
        console.log('Its a Tie!');
        console.log(playerWin, compWin);
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors'){
       console.log('Nice Try! scissors cuts paper!!');
       console.log(playerWin, ++compWin);
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
       console.log('You Win! paper smothers rock');
       console.log(++playerWin, compWin);
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
       console.log('You Win! Scissors cuts paper');
       console.log(++playerWin, compWin);
    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
       console.log('Its a Tie');
       console.log(playerWin, compWin);
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
       console.log('Nice Try! rock smashes scissors');
       console.log(playerWin, ++compWin);
    }
    
}

playRound();





    





