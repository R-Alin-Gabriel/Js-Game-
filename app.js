'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = "No number!";

        // Win - Congratulations! 
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "Correct Number!";
        document.querySelector('h1').textContent = "Congratulations!";
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.background = "linear-gradient(#2b1055, #7597de)";
        document.querySelector('.number').style.width = "24rem"
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // Too High  
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "Too High!";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "You Lost the Game!";
            document.querySelector('.score').textContent = 0;
        }
        // Too Low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "Too Low!";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "You Lost the Game!";
            document.querySelector('.score').textContent = 0;
        }
    }
});
// Reset 
document.querySelector('.again').addEventListener('click', function () {
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = "";
    document.querySelector('body').style.background = "linear-gradient(#00bf8f, #001510)";
    document.querySelector('.number').style.width = "15rem"
    document.querySelector('h1').textContent = "Guess The Number!";

});