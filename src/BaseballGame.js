import { GAME_CONFIG, GAME_RESULT_STATE } from './constants.js';

export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = this.createComputerNumbers();
    this.template = new Template();
  }

  play = (userInputNumbers) => {
    const checkResults = this.checkResult(
      this.computerInputNumbers,
      userInputNumbers,
    );
    return this.getResult(checkResults);
  };

  createComputerNumbers = () => {
    const uniqueNumberSet = new Set();
    const { MIN_NUMBER, MAX_NUMBER } = GAME_CONFIG;

    while (uniqueNumberSet.size < GAME_CONFIG.LENGTH) {
      uniqueNumberSet.add(
        MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER),
      );
    }
    return Array.from(uniqueNumberSet).join('');
  };

  checkResult = (computerInputNumbers, userInputNumbers) => {
    const computerInputNumberArr = computerInputNumbers.split('');
    const userInputNumberArr = userInputNumbers.split('');

    const strike = userInputNumberArr.filter(
      (value, index) => computerInputNumberArr.indexOf(value) === index
    ).length;

    const ball = userInputNumberArr.filter(
      (value, index) =>
        computerInputNumberArr.indexOf(value) !== index &&
        computerInputNumberArr.indexOf(value) > -1
    ).length;

    return { strike, ball };
  };

  restartGame = () => {
    this.computerInputNumbers = this.createComputerNumbers();
  };

  getResult = (gameResult) => {
    const { strike, ball } = gameResult;
    const { CORRECT, NOTHING, PARTIAL_CORRECT } = GAME_RESULT_STATE;

    const result = {
      template: ``,
      status: '',
    };

    if (strike === GAME_CONFIG.LENGTH) {
      result.template = this.template.getCorrectMessage();
      result.status = CORRECT;
    } else if (!strike && !ball) {
      result.template = this.template.getNothingMessage();
      result.status = NOTHING;
    } else {
      result.template = this.template.getPartialCorrectMessage(strike, ball);
      result.status = PARTIAL_CORRECT;
    }

    return result;
  };
}

class Template {
  getCorrectMessage = () => {
    return `<p>🎉 정답을 맞추셨습니다! 🎉</p>
      <div>
        게임을 새로 시작하시겠습니까?
        <button id="game-restart-button">게임 재시작</button>
      </div>`;
  };

  getNothingMessage = () => {
    return `<p>낫싱</p>`;
  };

  getPartialCorrectMessage = (strike, ball) => {
    return `<p>${ball ? ball + '볼 ' : ''}${
      strike ? strike + '스트라이크' : ''
    }</p>`;
  };
}
