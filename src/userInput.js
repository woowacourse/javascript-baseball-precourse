import { RESULT_CODE } from "./constants.js";

function isThreeLegnth(value) {
    return value.trim().length === 3;
}

function isUniqueWord(value) {
    return [...new Set(value.split(""))].length === 3;
}

function isNumberRange(value) {
    return /^[1-9]*$/g.test(value);
}

export default function checkUserInputVaild(userNumber) {
    if (!isThreeLegnth(userNumber)) return RESULT_CODE.ERROR_USERINPUT_LENGTH;
    else if (!isNumberRange(userNumber)) return RESULT_CODE.ERROR_USERINPUT_NUMBER_RANGE;
    else if (!isUniqueWord(userNumber)) return RESULT_CODE.ERROR_USERINPUT_UNIQUE_WORD;

    return RESULT_CODE.DONE_USERINPUT_VALID;
}
