let playerScore = 0
let computerScore = 0

function getComputerChoice(){
    let number = Math.floor(Math.random() * 3) + 1
    if (number==1) return 'rock'
    else if (number==2) return 'paper'
    else return 'scissors'
}

function round(playerSelection, computerSelection){
    if (playerSelection == computerSelection) return 'Tie'
    if(playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++
        return 'You lose! Paper beats rock'
    }
    if(playerSelection == 'rock' && computerSelection == 'scissors'){
        playerScore++
        return 'You win! Rock beats scissors'
    }
    if(playerSelection == 'scissors' && computerSelection == 'rock'){
        computerScore++
        return 'You lose! Rock beats scissors'
    }
    if(playerSelection == 'paper' && computerSelection == 'rock'){
        playerScore++
        return 'You Win! Paper beats rock'
    }
    if(playerSelection == 'paper' && computerSelection == 'scissors'){
        computerScore++
        return 'You lose! Scissors beats paper'
    } 
}
function game(){
    for(let i = 0; i<5; i++){
        let playerSelection = prompt('Choose: ')
        console.log('Round '+(i+1))
        console.log(round(playerSelection.toLowerCase(), getComputerChoice()))
        console.log('Player: '+playerScore, ' Computer: '+computerScore)
        document.getElementById(playerScore).innerHTML = playerScore
        document.getElementById(computerScore).innerHTML = computerScore
    }
    if (playerScore > computerScore ) console.log('You win!')
    if (playerScore < computerScore ) console.log('You lose!')
    if (playerScore == computerScore ) console.log('Tie')
}

// game()