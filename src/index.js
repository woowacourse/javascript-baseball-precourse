import {
  BASEBALL_NUMBER_LENGTH,
  DOMS,
  ANSWER_RANGE,
} from "./constant/index.js";

import { caculateStrikeAndBall } from "./util/calculate.js";
import {
  generateAlertMessage,
  generateResultMessage,
} from "./util/generate-message.js";

export default class BaseballGame {
  constructor() {
    this.answerNumber = this.generateAnswerNumber();
    this.setEvent();
  }

  setEvent = () => {
    DOMS.$userInputForm.addEventListener("submit", this.onSubmitHandler);
    DOMS.$result.addEventListener("click", this.setResetGameEvent);
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    const userInputNumbers = DOMS.$userInput.value;
    const alertMessage = generateAlertMessage(userInputNumbers);

    if (alertMessage) {
      this.showAlertMessage(alertMessage);
      return;
    }
    const gameResultMessage = this.play(
      this.answerNumber.split(""),
      userInputNumbers.split("")
    );
    this.printResultMessage(gameResultMessage);
  };

  play = (computerInputNumbers, userInputNumbers) => {
    const { strike, ball } = caculateStrikeAndBall(
      computerInputNumbers,
      userInputNumbers
    );
    const gameResultMessage = generateResultMessage(strike, ball);

    return gameResultMessage;
  };

  setAnswerNumber = () => {
    this.answerNumber = this.generateAnswerNumber();
  };

  generateAnswerNumber = () => {
    const randomNumberSet = new Set();
    while (randomNumberSet.size < BASEBALL_NUMBER_LENGTH) {
      randomNumberSet.add(
        MissionUtils.Random.pickNumberInRange(
          ANSWER_RANGE.MIN,
          ANSWER_RANGE.MAX
        )
      );
    }

    return [...randomNumberSet].join("");
  };

  setResetGameEvent = (event) => {
    if (event.target.id === "game-restart-button") {
      this.resetGame();
    }
  };

  resetGame = () => {
    this.setAnswerNumber();
    this.resetUserInput();
    this.resetResult();
  };

  resetUserInput = () => {
    DOMS.$userInput.value = "";
    DOMS.$userInput.focus();
  };

  resetResult = () => {
    DOMS.$result.innerHTML = "";
  };

  showAlertMessage = (message) => {
    alert(message);
  };

  printResultMessage = (message) => {
    DOMS.$result.innerHTML = message;
  };
}

const game = new BaseballGame();
