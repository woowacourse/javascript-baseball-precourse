import { DIGIT } from "./constants.js";
export default class UserInput {
    static get USER_INPUT_ELEM() {
        return document.querySelector('#user-input');
    }

    static clear() {
        this.USER_INPUT_ELEM.value = '';
    }

    static getNumbers() {
        const value = this.USER_INPUT_ELEM.value;
        return value.split('').map((char) => Number(char));
    }

    static isValid(userInputNumbers) {
        return this.isThreeDigit(userInputNumbers) &&
            this.isRangeCorrect(userInputNumbers) &&
            this.isNotDuplicated(userInputNumbers);
    }

    static isThreeDigit(numbers) {
        return numbers.filter(number => number !== isNaN(number)).length === DIGIT;
    }

    static isRangeCorrect(numbers) {
        return numbers.filter(number => (1 <= number && number <= 9)).length === DIGIT;
    }

    static isNotDuplicated(numbers) {
        return numbers.filter((number, index) => numbers.indexOf(number) === index).length === DIGIT;
    }
}