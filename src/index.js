import {
  checkLength, checkOverlap, checkSign, checkZero,
} from './inputCheck.js';
import {
  checkNothing, checkStrike, convertToArray, showResult,
} from './utils.js';
import { createRandomNumber } from './computeNumbers.js';

const submit = document.querySelector('#submit');
const userInput = document.querySelector('#user-input');

let userInputNumbers;
const computerInputNumbers = createRandomNumber();

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
  console.log(USER_INPUT_ARRAY);
  console.log(computerInputNumbers);
  const BALL_STRIKE_COUNT = checkNothing(userInputNumbers, computerInputNumbers);
  console.log(BALL_STRIKE_COUNT);
  if (BALL_STRIKE_COUNT === 0) {
    showResult('낫싱');
    return;
  }
  const STRIKE_COUNT = checkStrike(userInputNumbers, computerInputNumbers);
  const BALL_COUNT = BALL_STRIKE_COUNT - STRIKE_COUNT;
  console.log(`${BALL_COUNT}볼 ${STRIKE_COUNT}스트라이크`);
};
