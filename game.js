const scores = JSON.parse(localStorage.getItem('scores')) || {
    wins : 0,
    loses : 0,
    ties : 0
};

updateScoreElement();

/*if (scores === null){
    scores = {
        wins : 0,
        loses : 0,
        ties : 0
    }
};*/

function playGame(player){
    const computerMove = pickComputerMove();

    let result = '';
    if(player === 'scissors'){
        if(computerMove === 'rock'){
        result = 'You lose';
        }else if(computerMove === 'paper'){
            result = 'You win';
        }else if(computerMove === 'scissors'){
            result = 'Tie';
        };
    }
    
    else if(player === 'paper'){
        if(computerMove === 'rock'){
            result = 'You win';
        }else if(computerMove === 'paper'){
            result = 'Tie';
        }else if(computerMove === 'scissors'){
            result = 'You lose';
        };
    }
    
    else if(player === 'rock'){
            if(computerMove === 'rock'){
            result = 'Tie';
        }else if(computerMove === 'paper'){
            result = 'You lose';
        }else if(computerMove === 'scissors'){
            result = 'You win';
        };
    }
    
    if (result === 'You win'){
        scores.wins = scores.wins + 1;
    }else if(result === 'You lose'){
        scores.loses = scores.loses + 1;
    }else if(result === 'Tie'){
        scores.ties = scores.ties + 1;
    }


    localStorage.setItem('scores', JSON.stringify(scores));

    updateScoreElement();
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-move').innerHTML =  `You:
    <img src="${player}-emoji.png" alt="rock-emoji" class="img-fluid">
    Computer:
    <img src="${computerMove}-emoji.png" alt="scissors-emoji" class="img-fluid">
    `;

    
};

function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = `wins : ${scores.wins} loses : ${scores.loses} ties : ${scores.ties}`;
};

function pickComputerMove(){
    const randomNumber = Math.random();
        let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3){
        computerMove ='rock';
    }else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
    }else if(randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'scissors';
    }

    return computerMove;
};
