let playerScore = 0
let computerScore = 0
let i = 0

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
function game(playerSelection){
    if(i<5){
        console.log(playerScore)
        console.log(computerScore)
        console.log(i)
        document.getElementById('result').innerHTML = round(playerSelection, getComputerChoice())
        document.getElementById('playerScore').innerHTML = playerScore.toString()
        document.getElementById('computerScore').innerHTML = computerScore.toString()
    
        if (playerScore > computerScore ) console.log('You win!')
        if (playerScore < computerScore ) console.log('You lose!')
        if (playerScore == computerScore ) console.log('Tie')
    }
    i++        
}
function playAgain(){
    i = 0
    playerScore = 0
    computerScore = 0
    document.getElementById('result').innerHTML = ''
    document.getElementById('playerScore').innerHTML = '0'
    document.getElementById('computerScore').innerHTML = '0'
}

// game()