'use strict';

import BaseballGame from './baseball-game.js';
import { gameResults, NEW_GAME_HTML, ALERT_MESSAGE } from './constants.js';

// DOM
const app = document.querySelector('#app');
const userInput = document.querySelector('#user-input');
const gameResult = document.querySelector('#result');

// rendering functions
function renderGameResult(computerNumbers, userNumbers){
    const result = newGame.play(computerNumbers, userNumbers);
    if(result === gameResults.CORRECT) return renderNewGameResult();
    else return result;
}

function renderNewGameResult() {
    return NEW_GAME_HTML;
}

function onSubmitButtonClick() {
    if(newGame.isCorrectInput(userInput.value)){
        gameResult.innerHTML = renderGameResult(newGame.answer, userInput.value);
    }
    else {
        userInput.value = '';
        alert(ALERT_MESSAGE);
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