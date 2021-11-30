import { DOMS } from "./constant/index.js";
import { caculateStrikeAndBall } from "./util/calculate.js";
import {
  generateAlertMessage,
  generateResultMessage,
} from "./util/generate-message.js";
import { generateComputerInput } from "./game/generate-answer-number.js";
import { resetResult, resetUserInput } from "./game/reset-game.js";
import { printResultMessage } from "./game/print-result.js";

export default class BaseballGame {
  constructor() {
    this.answerNumber = "";
  }

  init = () => {
    this.setEvent();
    this.setAnswerNumber();
  };

  setEvent = () => {
    DOMS.$userInputForm.addEventListener("submit", this.setUserInputEvent);
    DOMS.$result.addEventListener("click", this.setResetGameEvent);
  };

  setUserInputEvent = (event) => {
    event.preventDefault();
    const userInputNumbers = DOMS.$userInput.value;
    const alertMessage = generateAlertMessage(userInputNumbers);

    if (alertMessage) {
      alert(alertMessage);
      return;
    }
    const gameResultMessage = this.play(
      this.answerNumber.split(""),
      userInputNumbers.split("")
    );
    printResultMessage(gameResultMessage);
  };

  setResetGameEvent = (event) => {
    if (event.target.id === "game-restart-button") {
      this.resetGame();
    }
  };

  resetGame = () => {
    this.setAnswerNumber();
    resetUserInput();
    resetResult();
  };

  setAnswerNumber = () => {
    this.answerNumber = generateComputerInput();
  };

  play = (computerInputNumbers, userInputNumbers) => {
    const { strike, ball } = caculateStrikeAndBall(
      computerInputNumbers,
      userInputNumbers
    );

    return generateResultMessage(strike, ball);
  };
}

const baseballGame = new BaseballGame();

baseballGame.init();
