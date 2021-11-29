import { TEXT } from './constants.js';

export function checkInput(input) {
  if(isNotNull(input)) {
    return false;
  }
  return true;
}

function isNotNull(input) {
  return input === '' ? true : false;
}

function isThreeNum() {

}

function isAnother() {

}

function isNumber() {
    
}