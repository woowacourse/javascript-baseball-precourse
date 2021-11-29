import Computer from "./Computer.js";
import User from "./User.js";

export default class BaseballGame {
  constructor() {
    this.NUMBER_LENGTH = 3;
    this.computer = new Computer(this.NUMBER_LENGTH);
    this.user = new User();
    this.computerInputNumbers = this.computer.makeNumbers();
  }

  start() {
    console.log(this.computerInputNumbers);
    this.computer.clearResultArea();
    this.user.input.value = "";
    this.user.button.addEventListener("click", e => this.checkValidValue(e));
  }

  checkValidValue(event) {
    event.preventDefault();
    const userInputNumbers = this.user.getInputValue();
    const isValid = this.computer.checkValidValue(userInputNumbers);
    if (isValid) {
      const gameMessage = this.play(
        this.computerInputNumbers,
        userInputNumbers
      );
      this.printGameMessage(gameMessage);
    }
  }

  countBall(computerInputNumbers, userInputNumbers) {
    const ball = computerInputNumbers.filter(
      (number, position) => userInputNumbers[position] === number
    );
    return ball.length;
  }

  countStrike(computerInputNumbers, userInputNumbers) {
    const strike = computerInputNumbers.filter((number, position) => {
      const isStrike = userInputNumbers.filter(
        (userNumber, userPosition) =>
          userPosition !== position && userNumber === number
      );
      return isStrike.length > 0;
    });
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

  printGameMessage(gameMessage) {
    if (`${this.NUMBER_LENGTH}볼` === gameMessage) {
      this.computer.clearResultArea();
      return this.renderAnswerMessage();
    }
    this.computer.resultArea.innerText = gameMessage;
  }

  renderAnswerMessage() {
    const congratsMessage = this.computer.createTextElement(
      "p",
      "🎉 정답을 맞추셨습니다! 🎉"
    );
    const reStartArea = document.createElement("div");
    const reStartMessage = this.computer.createTextElement(
      "span",
      "게임을 새로 시작하시겠습니까? "
    );
    const reStartButton = this.computer.createTextElement(
      "button",
      "게임 재시작"
    );
    reStartButton.id = "game-restart-button";

    reStartArea.append(reStartMessage, reStartButton);
    this.computer.resultArea.append(congratsMessage, reStartArea);
  }
}

const baseballGame = new BaseballGame();
baseballGame.start();
