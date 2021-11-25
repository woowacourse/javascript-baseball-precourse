import { GAME_RULE } from "../utils/constants.js";

// Check Functions

// 숫자이면 true, 아니면 false 반환
const isNumber = input => {
    let check = true;

    if (isNaN(input)) {
        check = false;
    }

    return check;
};

// 숫자에 0이 포함되어 있으면 true, 아니면 false 반환
const isIncludeZero = numbers => {
    let check = false;

    if (numbers.includes(0)) {
        check = true;
    }

    return check;
};

// 중복이 있으면 true, 아니면 false 반환
const isDuplicate = numbers => {
    const numberSet = new Set(numbers);
    let check = false;

    if (numberSet.size !== numbers.length) {
        check = true;
    }

    return check;
};

// 사용자 입력 문자열을 숫자 배열로 재구성하여 반환하는 함수
const splitNumStrToArr = numStr => {
    const numArr = numStr.split('').map(numChar => parseInt(numChar));
    
    return numArr;
};

// 사용자 입력이 올바르면 true, 아니면 false 반환
const isUserInputValid = userInput => {
    const { answerLength } = GAME_RULE;
    let check = true;

    /*
     * [잘못 입력한 첫 번째 케이스]
     * 1. 사용자 입력의 길이가 정답의 길이와 다를 때
     * 2. 사용자가 입력한 것이 숫자가 아닐 때
    */
    if (
        userInput.length !== answerLength ||
        !isNumber(userInput)
    ) {
        check = false;
    }
    else {
        const userInputNumbers = splitNumStrToArr(userInput);
        
        /*
         * [잘못 입력한 두 번째 케이스]
         * 1. 1~9를 입력해야 하는데 0이 포함되어 있을 때
         * 2. 숫자에 중복이 있을 때
        */
        if (
            isIncludeZero(userInputNumbers) ||
            isDuplicate(userInputNumbers)
        ) {
            check = false;
        }
    }

    return check;
};

export { isUserInputValid, splitNumStrToArr };