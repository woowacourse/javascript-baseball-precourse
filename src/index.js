import {
  INPUT_RULES,
  ERROR_MESSAGE,
  RESULT_MESSAGE,
  RESTART_MESSAGE,
} from './constants.js';
import { $ } from './utils.js';

export default class BaseballGame {
  constructor() {
    this.endGame = false;
    this.computerInputNumbers = this.generateRandomNumbers();
    this.attachSubmitHandler();
  }

  generateRandomNumbers() {
    const randomNumbersSet = new Set();
    while (randomNumbersSet.size < INPUT_RULES.NUMBER_OF_DIGITS) {
      randomNumbersSet.add(
        MissionUtils.Random.pickNumberInRange(
          INPUT_RULES.MIN_OF_RANGE,
          INPUT_RULES.MAX_OF_RANGE
        )
      );
    }
    return Array.from(randomNumbersSet);
  }

  attachSubmitHandler() {
    const $submitBtn = $('#submit');
    const $userInput = $('#user-input');
    $submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!this.endGame) {
        const currentUserInput = $userInput.value;
        if (!this.isValid(currentUserInput)) {
          alert(ERROR_MESSAGE);
        } else {
          const parsedUserInput = this.parseStringtoIntArray(currentUserInput);
          const resultString = this.play(this.computerInputNumbers, parsedUserInput);
          this.paintResultMessage(resultString);
        }
        $userInput.value = '';
      }
    });
  }

  isValid(input) {
    const regex = /[^1-9]/g;
    const notValidChars = input.match(regex);
    const setString = new Set(input);

    if (input === '') {
      return false;
    }
    if (notValidChars) {
      return false;
    }
    if (input.length !== INPUT_RULES.NUMBER_OF_DIGITS) {
      return false;
    }
    if (setString.size !== input.length) {
      return false;
    }
    return true;
  }

  parseStringtoIntArray(stringOfInt) {
    return stringOfInt.split('').map(Number);
  }

  play(computerInputNumbers, userInputNumbers) {
    let ballCount = 0;
    let strikeCount = 0;
    for (let i = 0; i < INPUT_RULES.NUMBER_OF_DIGITS; i++) {
      if (computerInputNumbers[i] === userInputNumbers[i]) {
        strikeCount += 1;
      } else if (computerInputNumbers.includes(userInputNumbers[i])) {
        ballCount += 1;
      }
    }
    const resultString = this.createResultMessage(ballCount, strikeCount);
    return resultString;
  }

  createResultMessage(ballCount, strikeCount) {
    if (ballCount === 0 && strikeCount === 0) {
      return RESULT_MESSAGE.NOTHING;
    }
    if (strikeCount === 3) {
      this.endGame = true;
      this.askRestartGame();
      return RESULT_MESSAGE.CORRECT;
    }
    if (ballCount && !strikeCount) {
      return `${ballCount}${RESULT_MESSAGE.BALL}`;
    }
    if (!ballCount && strikeCount) {
      return `${strikeCount}${RESULT_MESSAGE.STRIKE}`;
    }
    return `${ballCount}${RESULT_MESSAGE.BALL} ${strikeCount}${RESULT_MESSAGE.STRIKE}`;
  }

  paintResultMessage(resultString) {
    const $resultText = $('#result');
    $resultText.innerHTML = resultString;
  }

  askRestartGame() {
    const ELEMENT_ID = 'game-restart-button';
    const $appArea = $('#app');
    const $restartQuestion = document.createElement('p');
    const $restartBtn = document.createElement('button');

    $restartQuestion.innerHTML = RESTART_MESSAGE.QUESTION;
    $restartBtn.innerHTML = RESTART_MESSAGE.BUTTON_TEXT;
    $restartBtn.id = ELEMENT_ID;

    $restartQuestion.appendChild($restartBtn);
    $appArea.appendChild($restartQuestion);

    $restartBtn.addEventListener('click', () => {
      this.handleRestart();
      $appArea.removeChild($restartQuestion);
    });
  }

  handleRestart() {
    this.endGame = false;
    $('#result').innerHTML = '';
    this.computerInputNumbers = this.generateRandomNumbers();
  }
}

new BaseballGame();
