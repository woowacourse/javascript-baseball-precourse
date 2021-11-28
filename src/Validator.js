import {
    MIN_NUMBER_IN_RANGE,
    MAX_NUMBER_IN_RANGE,
    LENGTH_NUMBERS,
} from './constant/index.js';

export default class Validator {
    constructor() {

    }

    checkIsValidInput(userInputValue) {
        let isValid = false;

        if (
            this.checkLength(userInputValue)
            && this.checkIsAllValidNumber(userInputValue)
            && this.checkDuplicatedNumber(userInputValue)
        ) {
            isValid = true;
        }

        return isValid;
    }

    checkLength(userInputValue) {
        return userInputValue.length === LENGTH_NUMBERS;
    }

    checkIsAllValidNumber(userInputValue) {
        const isAllNaturalNumber = userInputValue.split('').every((e)=>{
            if (!isNaN(e) && MIN_NUMBER_IN_RANGE <= e && MAX_NUMBER_IN_RANGE >= e) {
                return true;
            } else {
                return false;
            }
        });

        return isAllNaturalNumber;
    }

    checkDuplicatedNumber(userInputNumbers) {
        const { size } = new Set(userInputNumbers.split(''));

        return size === LENGTH_NUMBERS
    }
}