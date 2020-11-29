import {
  isNumber,
  isNot3Digit,
  isInZero,
  isInDuplicateDigit,
} from '../../../utils';
import { text } from '../../../constants';

// BaseballGameView class (View)

export default class BaseballGameView {
  constructor(baseballGameModel, resultDiv, userInput) {
    this.baseballGameModel = baseballGameModel;
    this._resultDiv = resultDiv;
    this._userInput = userInput;
  }

  renderResult(userInputNumbers) {
    const resultString = this.baseballGameModel.play(
      this.baseballGameModel.getComputerInputNumbers(),
      userInputNumbers,
    );

    if (resultString === text.CORRECT) {
      this._resultDiv.innerHTML = `
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
      this._resultDiv.innerHTML = `
        <p>${resultString}</p>
      `;
    }
  }

  cleanResult() {
    this._resultDiv.innerHTML = '';
  }

  resetUserInputNumbers() {
    this._userInput.value = '';
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
    const userInputNumbers = this._userInput.value;
    const exception = this.validUserInputNumbers(userInputNumbers);
    if (exception) {
      alert(exception);
      return;
    }

    this.cleanResult();
    this.renderResult(userInputNumbers);
  }
}
