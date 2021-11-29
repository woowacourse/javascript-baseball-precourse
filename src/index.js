'use strict';

// DOM
const app = document.querySelector('#app');
const userInput = document.querySelector('#user-input');
const gameResult = document.querySelector('#result');

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
    if(computerInputNumbers === userInputNumbers) return "정답";

    const computerNumArray = computerInputNumbers.split('');
    const userNumArray = userInputNumbers.split('');

    const [strike, ball] = getCountStrikeAndBall(computerNumArray, userNumArray);
    return getPlayResult(strike, ball);
}

function renderGameResult(computerNumbers, userNumbers){
    const result = play(computerNumbers, userNumbers);
    if(result === "정답") return renderNewGameResult();
    else return result;
}

function renderNewGameResult() {
    return '<p><strong>정답을 맞추셨습니다!</strong></p>'
    + '<p>게임을 새로 시작하시겠습니까? <button id="game-restart-button">게임 재시작</button></p>';
}

function onSubmitButtonClick() {
    if(isCorrectInput(userInput.value)){
        gameResult.innerHTML = renderGameResult(answer, userInput.value);
    }
    else {
        userInput.value = '';
        alert('1 ~ 9까지 수를 중복없이 3개 입력해주세요:D');
    }
}

function onRestartButtonClick() {
    userInput.value = '';
    gameResult.innerHTML = '';
}

// main
const answer = generateThreeDigitsNumber();
console.log(answer);

app.addEventListener("click", function(e) {
    e.preventDefault();

    const handleFunctions = {
        "submit"(){ onSubmitButtonClick(); },
        "game-restart-button"(){ onRestartButtonClick(); },
    };
    if(Object.keys(handleFunctions).includes(e.target.id)) handleFunctions[e.target.id]();
});