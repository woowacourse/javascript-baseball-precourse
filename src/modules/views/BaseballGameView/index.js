import {
  isNumber,
  isNot3Digit,
  isInZero,
  isInDuplicateDigit,
} from '../../../utils';
import { text } from '../../../constants';

// BaseballGameView class (View)

export default class BaseballGameView {
  constructor(baseballGameModel, resultDiv, userInput, userInputSubmitButton) {
    this.baseballGameModel = baseballGameModel;
    this.resultDiv = resultDiv;
    this.userInput = userInput;
    this.userInputSubmitButton = userInputSubmitButton;
    this.init();
  }

  init() {
    this.userInputSubmitButton.addEventListener(
      'click',
      this.handleUserInputSubmit.bind(this),
    );
  }

  renderResult(userInputNumbers) {
    const resultString = this.baseballGameModel.play(
      this.baseballGameModel.getComputerInputNumbers(),
      userInputNumbers,
    );

    if (resultString === text.CORRECT) {
      this.resultDiv.innerHTML = `
        <strong>
          <p>${resultString}</p>
        </strong>
        <div id="restart">
          <p>${text.ASK_RESTART}</p>
          <button id="game-restart-button">${text.RESTART}</button>
        <div/>
      `;

      document
        .getElementById('game-restart-button')
        .addEventListener('click', this.handleReStartClick.bind(this));
    } else {
      this.resultDiv.innerHTML = `
        <p>${resultString}</p>
      `;
    }
  }

  cleanResult() {
    this.resultDiv.innerHTML = '';
  }

  resetUserInputNumbers() {
    this.userInput.value = '';
  }

  validUserInputNumbers(userInputNumbers) {
    if (!isNumber(userInputNumbers)) {
      return text.WARNING_FOR_NOT_NUM;
    }

    if (isNot3Digit(userInputNumbers)) {
      return text.WARNING_FOR_3DIGIT;
    }

    if (isInZero(userInputNumbers)) {
      return text.WARNING_FOR_ZERO;
    }

    if (isInDuplicateDigit(userInputNumbers)) {
      return text.WARNING_FOR_DUPLICATE;
    }

    return '';
  }

  handleReStartClick() {
    this.resetUserInputNumbers();
    this.cleanResult();
    this.baseballGameModel.init();
  }

  handleUserInputSubmit() {
    const userInputNumbers = this.userInput.value;
    const exception = this.validUserInputNumbers(userInputNumbers);
    if (exception) {
      alert(exception);
      return;
    }

    this.cleanResult();
    this.renderResult(userInputNumbers);
  }
}
