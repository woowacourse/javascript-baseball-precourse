import { TEXT } from './constants.js';

export function checkInput(input) {
  if (isNotNull(input)) {
    return false;
  }
  if (isThreeNum(input)) {
    return false;
  }
  
  return true;
}

function isNotNull(input) {
  return input.length === 0 ? true : false;
}

function isThreeNum(input) {
  return input.length !== 3 ? true : false;
}

function isAnother() {

}

function isNumber() {
    
}