import { calculateResult } from './utils/calculateResult.js';
import {
  isDuplicatedNumber,
  isEmptyValue,
  isNotThreeDigit,
  isNotValidNumberRange,
} from './utils/checkValid.js';
import { generateComputerNumber } from './utils/generateComputerNumber.js';

const validateUserInput = (userInput) => {
  if (isEmptyValue(userInput)) {
    return '공백인 경우';
  } else if (isNotThreeDigit(userInput)) {
    return '세 자리가 아닌 경우';
  } else if (isNotValidNumberRange(userInput)) {
    return '1-9 이외의 문자가 포함된 경우';
  } else if (isDuplicatedNumber(userInput)) {
    return '중복된 숫자가 있는 경우';
  }
};

export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = '';
  }

  play() {
    this.setEventListener();
    this.computerInputNumbers = generateComputerNumber();
    console.log('컴퓨터 숫자 : ', this.computerInputNumbers); //FIXME: 디버깅 끝나면 제거
  }

  setEventListener = () => {
    const submitButton = document.querySelector('#submit');
    submitButton.addEventListener('click', this.onUserInputSubmit);
  };

  onUserInputSubmit = (event) => {
    event.preventDefault();
    const userInputNumbers = document.querySelector('#user-input').value;
    const alertMessage = validateUserInput(userInputNumbers);
    if (alertMessage) {
      return alert(alertMessage);
    }
    const { ballCount, strikeCount } = calculateResult(
      this.computerInputNumbers,
      userInputNumbers
    );
  };
}

const game = new BaseballGame();
game.play();
