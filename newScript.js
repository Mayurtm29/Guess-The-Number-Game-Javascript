'use strict';
// Elements 
let correctAns = document.querySelector(".number");
let input = document.querySelector('.guess');
let message = document.querySelector(".message");
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let background = document.querySelector("body");
// button 
let checkBtn = document.querySelector(".check");
let again = document.querySelector(".again");

// random Number
let randomNo = Math.trunc(Math.random() * 20) + 1;
console.log(randomNo);
let scoreNum = 20;
let highScoreNum = 0;

/**
 * checking of correct ans
 */
function check() {
    if (!input.value) {
        message.textContent = "Please enter number";
    } else if (input.value > 20 || input.value < 0) {
        message.textContent = "Between 0 to 20 Only"
    } else if (Number(input.value) === randomNo) {
        message.textContent = "🎉 Correct Guess";
        background.style.backgroundColor = "#60b347";
        correctAns.textContent = randomNo;
        if (scoreNum > highScoreNum) {
            highScoreNum = scoreNum;
            highScore.innerHTML = highScoreNum;
        }
    } else if (Number(input.value) !== randomNo) {
        if (scoreNum > 0) {
            message.textContent = `${Number(input.value)>randomNo?"Too High":"Too Low"}`;
            scoreNum--;
            score.textContent = scoreNum;
        } else {
            message.textContent = "Game Over";
            background.style.backgroundColor = "red";
            score.textContent = 0;
        }

    }
}
/**
 * reset 
 */
function reset() {
    randomNo = Math.trunc(Math.random() * 20) + 1;
    console.log(randomNo);
    correctAns.textContent = "?";
    message.textContent = "Start guessing...";
    background.style.backgroundColor = "#222";
    scoreNum = 20;
    score.textContent = 20;
    input.value = "";
}

// EventListener
// check 
checkBtn.addEventListener("click", check);
// reset 
again.addEventListener("click", reset);