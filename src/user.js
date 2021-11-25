import { GAME_RULE, ALERT_TEXT } from "./constants.js";

// Check Functions
const isNumber = (input) => {
    let check = true;

    if (isNaN(input)) {
        check = false;
    }

    return check;
};

const isIncludeZero = (numbers) => {
    let check = false;

    if (numbers.includes(0)) {
        check = true;
    }

    return check;
};

const isDuplicate = (numbers) => {
    const numberSet = new Set(numbers);

    let check = false;

    if (numberSet.size !== numbers.length) {
        check = true;
    }

    return check;
};

// Make str to number arr
const splitNumStrToArr = (numStr) => {
    const numArr = numStr.split('').map(numChar => parseInt(numChar));

    return numArr;
};

// Check User Input
const checkUserInput = (userInput) => {
    let check = true;

    // 잘못 입력한 첫 번째 케이스
    if (
        userInput.length !== GAME_RULE.answerLength ||
        !isNumber(userInput)
    ) {
        check = false;
    }
    // 잘못 입력한 두 번째 케이스
    else {
        const userInputNumbers = splitNumStrToArr(userInput);

        if (
            isIncludeZero(userInputNumbers) ||
            isDuplicate(userInputNumbers)
        ) {
            check = false;
        }
    }

    return check;
};

export default class User {
    constructor() {
        this.$userInput = document.getElementById('user-input');
        this.$submitButton = document.getElementById('submit');
        this.userInputNumbers = [];
        this.addEventListeners();
    }

    addEventListeners() {
        this.addEventEnterKeyPressed();
        this.addEventSubmitButtonClicked();
    }

    addEventEnterKeyPressed() {
        this.$userInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                this.eventHandler();
            }
        });
    }

    addEventSubmitButtonClicked() {
        this.$submitButton.addEventListener('click', () => {
            this.eventHandler();
        });
    }

    eventHandler() {
        if (checkUserInput(this.$userInput.value)) {   // 올바르게 입력하였을 때
            this.setUserInputNumbers(splitNumStrToArr(this.$userInput.value));
        }
        else {  // 잘못된 값을 입력하였을 때
            alert(ALERT_TEXT);
        }
    }

    getUserInputNumbers() {
        return this.userInputNumbers;
    }

    setUserInputNumbers(numbers) {
        this.userInputNumbers = numbers;
    }
}