const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id  
  userChoiceDisplay.innerHTML = userChoice
  generatecomputerChoice()
}))

function generatecomputerChoice() {
const randomNumber = Math.floor(Math.random() * 3) + 1
if (randomNumber === 1) {
  computerChoice = 'rock'
}
if (randomNumber === 2) {
  computerChoice = 'scissors'
}
if (randomNumber === 3) {
  computerChoice = 'paper'
}
computerChoiceDisplay.innerHTML = computerChoice
}

function getResult () {
if (userChoice === computerChoice) {
resultDisplay.innerHTML = 'Its a draw!'
} else if (userChoice === 'rock' && computerChoice === 'paper' ) {
  resultDisplay.innerHTML = 'You Lose!'
} else if (userChoice === 'rock' && computerChoice === 'Scissors' ) {
  resultDisplay.innerHTML = 'You Lose!'
}
}
