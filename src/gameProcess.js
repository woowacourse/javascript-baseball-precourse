import { $inputRangeError, $lengthError, $overlapError } from './constants/index.js';

const { pickNumberInRange } = MissionUtils.Random;

export function getComputerNumbers() {
    const numbers = new Set();
    while(numbers.size < 3) numbers.add(pickNumberInRange(1, 9));

    return [...numbers].join('')
}

export function getHint(ball, strike) {
    let message = '';

    if(ball)    message += `${ball}볼 `;
    if(strike)  message += `${strike}스트라이크`;
    if(!ball && !strike) message = '낫싱';

    return message
}

export function countResult(userNumbers, computerNumbers) {
    let ball = 0, strike = 0;

    const userNumbersList = userNumbers.split(''), computerNumberList = computerNumbers.split('');

    computerNumberList.forEach((val, idx) => {
        if(val === userNumbersList[idx]) strike ++;
        else if(userNumbersList.includes(val)) ball ++;
    });

    return { ball, strike };
}

export function errorCheck(text) {
    if(isNaN(Number(text))) return $inputRangeError;
    if(text.length !== 3) return $lengthError;
    if(new Set(text).size !== 3) return $overlapError;
    return null
}