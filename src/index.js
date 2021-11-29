import { ramdomAnswer } from './computer.js';
import { getUserInput } from './user.js';
import { compareInputWithAnswer, getHintString } from './game.js';
import { userInputException } from './exception.js';

export default class BaseballGame {
  constructor() {
    this.computerAnswer = ramdomAnswer();
  }

  play(computerInputNumbers, userInputNumbers) {
    console.log(computerInputNumbers, userInputNumbers);
    if (userInputException(userInputNumbers)) {
      return '';
    }

    return getHintString(
      compareInputWithAnswer(computerInputNumbers, userInputNumbers)
    );
  }
}

const baseballGame = new BaseballGame();

const submitButton = document.getElementById('submit');

const setResultTextToHint = () => {
  const result = document.getElementById('result');
  result.innerHTML = `<h4>${baseballGame.play(
    baseballGame.computerAnswer,
    getUserInput()
  )}</h4>`;
};

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  setResultTextToHint();
});
