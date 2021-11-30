import CheckValid from "./CheckValid.js";
import Computer from "./Computer.js";
import User from "./User.js";
import Dom from "./Dom.js";

export default class BaseballGame {
  constructor() {
    this.NUMBER_LENGTH = 3;
    this.user = new User();
    this.dom = new Dom();
    this.computer = new Computer(this.NUMBER_LENGTH);
    this.checkValid = new CheckValid(this.NUMBER_LENGTH);
  }

  start() {
    this.dom.clearResultArea();
    this.user.setInputValue("");
    this.computerInputNumbers = this.computer.makeNumbers();
    this.user.button.addEventListener("click", e => this.handleUserClick(e));
  }

  handleUserClick(event) {
    event.preventDefault();
    const userInputNumbers = this.user.getInputValue();
    const isValid = this.checkValid.baseballGameInput(userInputNumbers);
    if (isValid) {
      const gameMessage = this.play(
        this.computerInputNumbers,
        userInputNumbers
      );
      this.renderGameMessage(gameMessage);
    }
  }

  countBall(computerInputNumbers, userInputNumbers) {
    const ball = computerInputNumbers.filter((number, position) => {
      const isBall = userInputNumbers.filter(
        (userNumber, userPosition) =>
          userPosition !== position && userNumber === number
      );
      return isBall.length > 0;
    });
    return ball.length;
  }

  countStrike(computerInputNumbers, userInputNumbers) {
    const strike = computerInputNumbers.filter(
      (number, position) => userInputNumbers[position] === number
    );
    return strike.length;
  }

  play(computerInputNumbers, userInputNumbers) {
    const computerInputArray =
      this.computer.changeStringToNumberArray(computerInputNumbers);
    const userInputArray =
      this.computer.changeStringToNumberArray(userInputNumbers);
    const ballCount = this.countBall(computerInputArray, userInputArray);
    const strikeCount = this.countStrike(computerInputArray, userInputArray);
    const gameResultMessage = this.makeGameResultMessage(
      ballCount,
      strikeCount
    );
    return gameResultMessage;
  }

  makeGameResultMessage(ballCount, strikeCount) {
    if (ballCount && strikeCount) {
      return `${ballCount}볼 ${strikeCount}스트라이크`;
    }
    if (ballCount) {
      return `${ballCount}볼`;
    }
    if (strikeCount) {
      return `${strikeCount}스트라이크`;
    }
    return `낫싱`;
  }

  renderGameMessage(gameMessage) {
    if (`${this.NUMBER_LENGTH}스트라이크` === gameMessage) {
      this.computer.disableButton();
      this.dom.clearResultArea();
      return this.renderAnswerMessage();
    }
    this.dom.renderResultMessage(gameMessage);
  }

  renderAnswerMessage() {
    const congratsMessage = this.dom.createNodeParentChild(
      "p",
      "strong",
      "🎉 정답을 맞추셨습니다! 🎉"
    );
    const reStartMessage = this.dom.createNodeParentChild(
      "div",
      "span",
      "게임을 새로 시작하시겠습니까? "
    );
    const reStartButton = this.dom.createButton(
      "게임 재시작",
      "game-restart-button"
    );
    reStartButton.addEventListener("click", e => this.reStart(e));

    reStartMessage.append(reStartButton);
    this.dom.resultArea.append(congratsMessage, reStartMessage);
  }

  reStart(event) {
    event.preventDefault();
    this.computer.activeButton();
    this.start();
  }
}

const baseballGame = new BaseballGame();
baseballGame.start();
