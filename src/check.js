import { INPUT_ERROR_MESSAGE } from './constant.js';

export function showError(message){
    alert(message);
}

export function checkRepeat(input){
    const inputArr=input.split('').map(Number);
    const inputSet=new Set(input);
    if(inputArr.length!==inputSet.size) return true;
}

export function checkinputValid(input){
    if(isNaN(input)){
      showError(INPUT_ERROR_MESSAGE);
      return false;
    }
    if(input.length!==3){
      showError(INPUT_ERROR_MESSAGE);
      return false;
    }
    if(checkRepeat(input)){
        showError(INPUT_ERROR_MESSAGE);
      return false;
    }
    return true;
}