import { NUMBER_ERROR_MESSAGE } from "../constant.js"
import {isValidLength,isDuplicated,isContainedZero} from "./utils.js"


export const inputNumberValidator = (number) => {
    if(isNaN(number)){
        return NUMBER_ERROR_MESSAGE.NOT_INTEGER;
    }
    if(!isValidLength(number)){
        return NUMBER_ERROR_MESSAGE.INVALID_LENGTH;
    }
    if(isDuplicated(number)){
        return NUMBER_ERROR_MESSAGE.DUPLICATED;
    }
    if(isContainedZero(number)){
        return NUMBER_ERROR_MESSAGE.CONTAINED_ZERO
    }
}