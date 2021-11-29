import {GAME} from "../constant.js";

const isValid = num => {
    const set = new Set(num);

    if(num.length!==set.size){
        return false;
    }
    return true;
}

const generateNumber = () => {
    const num = [];
    let i = 0;
    for(;i<GAME.NUM_LEN;i++){
        num.push(MissionUtils.Random.pickNumberInRange(GAME.MIN_NUMBER,GAME.MAX_NUMBER));
    }
    return num;
}

const validateNumber = num => {
    while(!isValid(num)){
        num = generateNumber();
    }
    return num;
}

export const generateTargetNumber=()=>{
    return validateNumber(generateNumber());
} 