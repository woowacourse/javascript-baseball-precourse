import component from './core/component.js';
import { parseInput, isNotValidInput } from './utils/input.js';
import {
  calculateBaseBall,
  getGameResult,
  generateRandomNumber,
} from './utils/game.js';
import { GAME_STATUS, MESSAGE } from './constants.js';

export default class BaseballGame extends component {
  init() {
    this.state = {
      hint: '',
      gameStatus: GAME_STATUS.READY,
      answer: generateRandomNumber(),
    };
  }

  _play(computerInputNumbers, userInputNumbers) {
    const [strike, ball] = calculateBaseBall(
      computerInputNumbers,
      userInputNumbers
    );
    return getGameResult(strike, ball);
  }

  _onSubmitUserInput() {
    const userInput = parseInput(this._inputElem.value);
    if (isNotValidInput(userInput)) {
      return alert(MESSAGE.NOT_VALID_INPUT);
    }
    const result = this._play(this._answer, userInput);

    this._renderResult(result);
    this.setState({
      hint: result,
      gameStatus:
        result === GAME_STATUS.END ? GAME_STATUS.END : GAME_STATUS.PLAYING,
    });
  }

  _onClickRestartButton() {
    this.setState({
      hint: '',
      gameStatus: GAME_STATUS.READY,
      answer: generateRandomNumber(),
    });
  }
}

new BaseballGame();
