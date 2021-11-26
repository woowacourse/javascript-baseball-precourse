import { RESULT_CODE, ERROR_MESSAGE } from "../constants.js";

function isThreeLength(word) {
    return word.trim().length === 3;
}

function isUniqueWord(word) {
    return [...new Set(word.split(""))].length === 3;
}

function isNumberRange(word) {
    return /^[1-9]*$/g.test(word);
}

export default class UserInputModel {
    constructor(userInputNumber) {
        this.userValue = String(userInputNumber);
    }

    get checkInputValid() {
        if (!isThreeLength(this.userValue)) return RESULT_CODE.ERROR_USERINPUT_LENGTH;
        else if (!isNumberRange(this.userValue)) return RESULT_CODE.ERROR_USERINPUT_NUMBER_RANGE;
        else if (!isUniqueWord(this.userValue)) return RESULT_CODE.ERROR_USERINPUT_UNIQUE_WORD;

        return RESULT_CODE.DONE_USERINPUT_VALID;
    }

    get toNumberArray() {
        if (!isNumberRange(this.userValue)) {
            throw new Error(ERROR_MESSAGE.DEV_ONLY_NUMBER_STRING);
        }

        const wordLists = this.userValue.split("");
        const resultArray = [];

        wordLists.forEach((word) => resultArray.push(Number(word)));
        return resultArray;
    }
}
