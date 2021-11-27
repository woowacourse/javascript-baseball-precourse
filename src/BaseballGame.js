import { GAME_CONFIG, GAME_RESULT_STATE } from './constants.js';

export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = this.createComputerNumbers();
    this.template = new Template();
  }

  play = userInputNumbers => {
    const checkResults = this.checkResult(
      this.computerInputNumbers,
      userInputNumbers,
    );
    return this.getResult(checkResults);
  };

  createComputerNumbers = () => {
    const uniqueNumberSet = new Set();
    while (uniqueNumberSet.size < GAME_CONFIG.LENGTH) {
      uniqueNumberSet.add(
        MissionUtils.Random.pickNumberInRange(
          GAME_CONFIG.MIN_NUMBER,
          GAME_CONFIG.MAX_NUMBER,
        ),
      );
    }
    return Array.from(uniqueNumberSet).join('');
  };

  checkResult = (computerInputNumbers, userInputNumbers) => {
    let result = {
      strike: 0,
      ball: 0,
    };
    computerInputNumbers.split('').forEach((comValue, comIndex) => {
      userInputNumbers.split('').forEach((userValue, userIndex) => {
        if (comValue === userValue) {
          if (comIndex === userIndex) result.strike += 1;
          else result.ball += 1;
        }
      });
    });
    return result;
  };

  restartGame = () => {
    this.computerInputNumbers = this.createComputerNumbers();
  };

  getResult = gameResult => {
    const { strike, ball } = gameResult;

    const result = {
      template: ``,
      status: '',
    };

    if (strike === GAME_CONFIG.LENGTH) {
      result.template = this.template.getCorrectMessage();
      result.status = GAME_RESULT_STATE.CORRECT;
    } else if (!strike && !ball) {
      result.template = this.template.getNothingMessage();
      result.status = GAME_RESULT_STATE.NOTHING;
    } else {
      result.template = this.template.getPartialCorrectMessage(strike, ball);
      result.status = GAME_RESULT_STATE.PARTIAL_CORRECT;
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
