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
    return result.toString();
}

function isCorrectInput(input) {
    return input.length === 3 && Number(input) && isCorrectAnswerNumber(Number(input));
}

function getCountStrikeAndBall(computerNumbers, userNumbers) {
    const strike = userNumbers.filter((number, index) => number === computerNumbers[index]);
    const ball = userNumbers
        .filter((number, index) => (number !== computerNumbers[index]) && computerNumbers.includes(number));
    return [strike.length, ball.length];
}

function getPlayResult(numStrike, numBall) {
    if(numStrike && numBall) return `${numBall}볼 ${numStrike}스트라이크`;
    else if(numStrike) return `${numStrike}스트라이크`;
    else if(numBall) return `${numBall}볼`;
    else return "낫싱";
}

function play(computerInputNumbers, userInputNumbers) {
    if(computerInputNumbers === userInputNumbers) return "정답을 맞추셨습니다!";

    const computerNumArray = computerInputNumbers.split('');
    const userNumArray = userInputNumbers.split('');

    const [strike, ball] = getCountStrikeAndBall(computerNumArray, userNumArray);
    return getPlayResult(strike, ball);
}

// main
const answer = generateThreeDigitsNumber();
console.log(answer);
const form = document.querySelector('form');
const userInput = document.querySelector('#user-input');
const result = document.querySelector('#result');

form.addEventListener("submit", function(e) {
    e.preventDefault();
    if(isCorrectInput(userInput.value)){
        result.textContent = play(answer, userInput.value);
    }
    else {
        userInput.value = '';
        alert('1 ~ 9까지 수를 중복없이 3개 입력해주세요:D');
    }
});