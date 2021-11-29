import component from './core/component.js';
import { isNotValidInput } from './utils/input.js';
import {
  calculateBaseBall,
  getGameResult,
  generateRandomNumber,
} from './utils/game.js';
import { GAME_STATUS, MESSAGE } from './constants.js';
import { $ } from './utils/dom.js';
import UserForm from './components/UserForm.js';

export default class BaseballGame extends component {
  init() {
    this.state = {
      hint: '',
      gameStatus: GAME_STATUS.READY,
      answer: generateRandomNumber(),
    };
    this.childrens = [
      new UserForm($('form'), {
        gameStatus: this.state.gameStatus,
        onSubmit: userInput => this._onSubmitUserInput(userInput),
      }),
    ];
  }

  _play(computerInputNumbers, userInputNumbers) {
    const [strike, ball] = calculateBaseBall(
      computerInputNumbers,
      userInputNumbers
    );
    return getGameResult(strike, ball);
  }

  _onSubmitUserInput(userInput) {
    if (isNotValidInput(userInput)) {
      return alert(MESSAGE.NOT_VALID_INPUT);
    }
    const result = this._play(this.state.answer, userInput);
    this.setState({
      hint: result,
      gameStatus:
        result === GAME_STATUS.END ? GAME_STATUS.END : GAME_STATUS.PLAYING,
    });
  }

  onClickRestartButton() {
    this.setState({
      hint: '',
      gameStatus: GAME_STATUS.READY,
      answer: generateRandomNumber(),
    });
  }
}

new BaseballGame();
