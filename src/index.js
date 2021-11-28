import { DOMS } from "./constant/index.js";
import { caculateStrikeAndBall } from "./util/calculate.js";
import {
  generateAlertMessage,
  generateResultMessage,
} from "./util/generate-message.js";
import { generateAnswerNumber } from "./game/generate-answer-number.js";
import { resetResult, resetUserInput } from "./game/reset-game.js";
import { printResultMessage } from "./game/print-result.js";
export default class BaseballGame {
  constructor() {
    this.answerNumber = generateAnswerNumber();
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
      alert(alertMessage);
      return;
    }
    const gameResultMessage = this.play(
      this.answerNumber.split(""),
      userInputNumbers.split("")
    );
    printResultMessage(gameResultMessage);
  };

  play = (computerInputNumbers, userInputNumbers) => {
    const { strike, ball } = caculateStrikeAndBall(
      computerInputNumbers,
      userInputNumbers
    );

    return generateResultMessage(strike, ball);
  };

  setAnswerNumber = () => {
    this.answerNumber = generateAnswerNumber();
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
}

new BaseballGame();
