import {GAME} from "../constant.js"

export const isValidLength = number => {
    if(number.length!==GAME.NUM_LEN){
        return false;
    }
    return true;
}

export const isDuplicated = number => {
    const set = new Set(...[number.split('')]);
    if(number.length!==set.size){
        return true;
    }
    return false;
}

export const isContainedZero = number => {
    return [...number].some((item)=>{
        return item === '0'
    })
}