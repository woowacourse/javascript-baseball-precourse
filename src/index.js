import { generateComputerNumber } from "./components/generateNumber.js";
import UserInput from "./components/userInput.js";
import { countStrikeAndBall, getResult } from "./components/playGame.js";

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
