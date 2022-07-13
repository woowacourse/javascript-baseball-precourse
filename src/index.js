import {
  checkLength, checkOverlap, checkSign, checkZero,
} from './inputCheck.js';
import { convertToArray } from './utils.js';
import { createRandomNumber } from './computeNumbers.js';

const submit = document.querySelector('#submit');
const userInput = document.querySelector('#user-input');

let userInputNumbers;
let computerInputNumbers;

submit.onclick = (e) => {
  e.preventDefault();
  const userInputValue = userInput.value;
  if (!checkSign(userInputValue)) {
    alert('양의 정수를 입력해주세요');
    return;
  }
  if (!checkLength(userInputValue)) {
    alert('숫자 3개를 입력해주세요 ex) 123');
    return;
  }
  const USER_INPUT_ARRAY = convertToArray(userInputValue);
  if (!checkZero(USER_INPUT_ARRAY)) {
    alert('0은 입력할 수 없습니다');
    return;
  }
  if (!checkOverlap(USER_INPUT_ARRAY)) {
    alert('중복되지않는 숫자를 입력해주세요');
    return;
  }
  userInputNumbers = USER_INPUT_ARRAY;
  console.log(userInputValue);
  computerInputNumbers = createRandomNumber();
};
