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

// main
const answer = generateThreeDigitsNumber();
console.log(answer);