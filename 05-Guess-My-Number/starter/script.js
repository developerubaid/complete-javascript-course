'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number';

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random()*20) + 1;
// console.log(`secret: ${secretNumber}`);

const msgElem = document.querySelector('.message');
const numElem = document.querySelector('.number');
const guessElem = document.querySelector('.guess');
const scoreElem = document.querySelector('.score');
const highScoreElem = document.querySelector('.highscore');
const bodyElem = document.querySelector('body');

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

scoreElem.textContent = score;

// console.log(typeof scoreElem.textContent);

const displayMessage = function (message) {
    msgElem.textContent = message;
}

checkBtn.addEventListener(
    'click', function () {
        const guess = Number(guessElem.value);
        // console.log('guess: ', guess);
        
        if(!guess) {
            displayMessage('⛔ No Number!');
        } else {
            if ( guess === secretNumber) {
                    displayMessage('🎉 Correct Number');
                    numElem.textContent = secretNumber;
                    bodyElem.style.backgroundColor = '#60b347';
                    numElem.style.width = '30rem';
                    if (score > highScore) {
                        highScore = score;
                        highScoreElem.textContent = highScore;
                    }
            } else if(score > 1) {
                scoreElem.textContent = --score;
                // console.log("score: ", score, scoreElem.textContent);
                displayMessage(guess < secretNumber ? '📉 Too low' : '📈 Too high');
                // if (guess < secretNumber) {
                //     msgElem.textContent = '📉 Too low';
                // } else if (guess > secretNumber) {
                //     msgElem.textContent = '📈 Too high';
                // }
            } else {
                displayMessage('💥 You lost the game');
                scoreElem.textContent = 0;
                bodyElem.style.backgroundColor = '#fc5742ff'
            }
            
        }
    }
);

// const resetProgress = () => {
//     score = 20;
//     secretNumber = Math.trunc(Math.random()*20) + 1;
// }

againBtn.addEventListener(
    'click', function () {
        // console.log('again btn');
        score = 20;
        scoreElem.textContent = score;
        secretNumber = Math.trunc(Math.random()*20) + 1;
        displayMessage('Start guessing...');
        bodyElem.style.backgroundColor = '#222';
        numElem.textContent = '?';
        numElem.style.width = '15rem';
        guessElem.value = '';
    }
)


/**
 * ====================================================================================
 * implementation by AI


'use strict';

const INITIAL_SCORE = 20;
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;

let score = INITIAL_SCORE;
let highScore = 0;
let secretNumber = generateSecretNumber();

const msgElem = document.querySelector('.message');
const numElem = document.querySelector('.number');
const guessElem = document.querySelector('.guess');
const scoreElem = document.querySelector('.score');
const highScoreElem = document.querySelector('.highscore');
const bodyElem = document.querySelector('body');

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

const displayMessage = message => (msgElem.textContent = message);
const generateSecretNumber = () => Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;

const updateScore = () => {
  score--;
  scoreElem.textContent = score;
};

checkBtn.addEventListener('click', () => {
  const guess = Number(guessElem.value);

  if (!guess) return displayMessage('⛔ No Number!');
  if (guess < MIN_NUMBER || guess > MAX_NUMBER) return displayMessage(`🚫 Enter a number between ${MIN_NUMBER} and ${MAX_NUMBER}`);

  if (guess === secretNumber) {
    handleCorrectGuess();
  } else {
    score > 1 ? handleWrongGuess(guess) : handleGameOver();
  }
});

const handleCorrectGuess = () => {
  displayMessage('🎉 Correct Number');
  numElem.textContent = secretNumber;
  bodyElem.classList.add('win');
  numElem.style.width = '30rem';
  if (score > highScore) {
    highScore = score;
    highScoreElem.textContent = highScore;
  }
};

const handleWrongGuess = guess => {
  updateScore();
  displayMessage(guess < secretNumber ? '📉 Too low' : '📈 Too high');
};

const handleGameOver = () => {
  displayMessage('💥 You lost the game');
  scoreElem.textContent = 0;
  bodyElem.classList.add('lose');
};

againBtn.addEventListener('click', () => {
  score = INITIAL_SCORE;
  secretNumber = generateSecretNumber();
  scoreElem.textContent = score;
  displayMessage('Start guessing...');
  bodyElem.classList.remove('win', 'lose');
  numElem.textContent = '?';
  numElem.style.width = '15rem';
  guessElem.value = '';
})

 */