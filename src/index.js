'use strict';

// functions
function generateRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(123, 987);
}

function isCorrectAnswerNumber(num) {
    const numArray = num.toString().split('');
    const duplicatedNumbers = numArray
        .filter((num, index, self) => self.indexOf(num) !== index || num === '0');
    return !duplicatedNumbers.length;
}

function generateThreeDigitsNumber() {
    let result = generateRandomNumber();
    while(!isCorrectAnswerNumber(result)){
        result = generateRandomNumber();
    }
    return result;
}

function isCorrectInput(input) {
    return input.length === 3 && Number(input) && isCorrectAnswerNumber(Number(input));
}

// main
const answer = generateThreeDigitsNumber();
const form = document.querySelector('form');
const userInput = document.querySelector('#user-input');
const result = document.querySelector('#result');

form.addEventListener("submit", function(e) {
    e.preventDefault();
    if(isCorrectInput(userInput.value)){
        result.textContent = userInput.value;
    }
    else {
        userInput.value = '';
        alert('1 ~ 9까지 수를 중복없이 3개 입력해주세요:D');
    }
});