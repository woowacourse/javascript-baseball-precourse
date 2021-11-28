import { generateComputerNumber } from "./components/generateNumber.js";
import UserInput from "./components/userInput.js";
import { countStrikeAndBall, getResult } from "./components/playGame.js";
import { RESULT_MESSAGE } from "./constants/constants.js";

export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = generateComputerNumber();
    this.userInput = new UserInput();
    this.submitButton = document.getElementById("submit");
    this.resultDiv = document.getElementById("result");
  }

  play(computerInputNumbers, userInputNumbers) {
    const count = countStrikeAndBall(computerInputNumbers, userInputNumbers);
    const result = getResult(count);

    return result;
  }

  printResult(result) {
    this.resultDiv.innerHTML = result;

    if (result === RESULT_MESSAGE.CORRECT) {
      const restartButton = this.createRestartButton();
      this.resultDiv.appendChild(restartButton);
    }
  }

  createRestartButton() {
    const restartButton = document.createElement("button");
    restartButton.id = "game-restart-button";
    restartButton.innerText = `${RESULT_MESSAGE.RESTART}`;
    restartButton.addEventListener(
      "click",
      this.onClickRestartButton.bind(this)
    );

    return restartButton;
  }

  onClickRestartButton() {
    this.computerInputNumbers = generateComputerNumber();
    this.userInput.resetUserInput();
    this.printResult("");
  }

  onClickSubmitButton(event) {
    event.preventDefault();
    const userInputNumbers = this.userInput.getUserInputNumbers();

    if (this.userInput.checkValidInput(userInputNumbers)) {
      this.userInput.alertErrorMessage(userInputNumbers);
      return;
    }

    const result = this.play(this.computerInputNumbers, userInputNumbers);
    this.printResult(result);
  }

  init() {
    this.submitButton.addEventListener(
      "click",
      this.onClickSubmitButton.bind(this)
    );
  }
}

const baseballGame = new BaseballGame();
baseballGame.init();
