'use strict';

import BaseballGame from './baseball-game.js';

// DOM
const app = document.querySelector('#app');
const userInput = document.querySelector('#user-input');
const gameResult = document.querySelector('#result');

// rendering functions
function renderGameResult(computerNumbers, userNumbers){
    const result = newGame.play(computerNumbers, userNumbers);
    if(result === "정답") return renderNewGameResult();
    else return result;
}

function renderNewGameResult() {
    return '<p><strong>정답을 맞추셨습니다!</strong></p>'
    + '<p>게임을 새로 시작하시겠습니까? <button id="game-restart-button">게임 재시작</button></p>';
}

function onSubmitButtonClick() {
    if(newGame.isCorrectInput(userInput.value)){
        gameResult.innerHTML = renderGameResult(newGame.answer, userInput.value);
    }
    else {
        userInput.value = '';
        alert('1 ~ 9까지 수를 중복없이 3개 입력해주세요:D');
    }
}

function onRestartButtonClick() {
    userInput.value = '';
    gameResult.innerHTML = '';
    newGame = new BaseballGame();
    console.log(newGame.answer);
}

// main
let newGame = new BaseballGame();
console.log(newGame.answer);

app.addEventListener("click", function(e) {
    e.preventDefault();

    const handleFunctions = {
        "submit"(){ onSubmitButtonClick(); },
        "game-restart-button"(){ onRestartButtonClick(); },
    };
    if(Object.keys(handleFunctions).includes(e.target.id)) handleFunctions[e.target.id]();
});