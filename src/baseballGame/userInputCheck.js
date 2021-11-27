import { RESULT_CODE, ERROR_MESSAGE } from "../data/constants.js";

function isThreeLegnth(value) {
    return value.length === 3;
}

function isUniqueWord(value) {
    return [...new Set(value.split(""))].length === 3;
}

function isNumberRange(value) {
    return /^[1-9]*$/g.test(value);
}

export function checkUserInputVaild(userNumber) {
    if (!isThreeLegnth(userNumber)) return RESULT_CODE.ERROR_USERINPUT_LENGTH;
    else if (!isNumberRange(userNumber)) return RESULT_CODE.ERROR_USERINPUT_NUMBER_RANGE;
    else if (!isUniqueWord(userNumber)) return RESULT_CODE.ERROR_USERINPUT_UNIQUE_WORD;

    return RESULT_CODE.DONE_USERINPUT_VALID;
}

export function getNumberArray(value) {
    if (!isNumberRange(value)) {
        throw new Error(ERROR_MESSAGE.DEV_ONLY_NUMBER_STRING);
    }

    const wordLists = value.split("");
    const resultArray = [];

    wordLists.forEach((word) => resultArray.push(Number(word)));
    return resultArray;
}
