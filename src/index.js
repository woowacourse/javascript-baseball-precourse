import {
  isDuplicatedNumber,
  isEmptyValue,
  isNotThreeDigit,
  isNotValidNumberRange,
} from './utils/checkValid.js';
import { generateComputerNumber } from './utils/generateComputerNumber.js';

const onUserInputSubmit = (event) => {
  event.preventDefault();
  const userInputValue = document.querySelector('#user-input').value;
  validateUserInputAndAlert(userInputValue);
};

const validateUserInputAndAlert = (userInput) => {
  if (isEmptyValue(userInput)) {
    alert('공백인 경우');
  } else if (isNotThreeDigit(userInput)) {
    alert('세 자리가 아닌 경우');
  } else if (isNotValidNumberRange(userInput)) {
    alert('1-9 이외의 문자가 포함된 경우');
  } else if (isDuplicatedNumber(userInput)) {
    alert('중복된 숫자가 있는 경우');
  }
};

export default class BaseballGame {
  play(computerInputNumbers, userInputNumbers) {
    console.log('시작');
  }
}

const submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', onUserInputSubmit);

const game = new BaseballGame();
game.play();
