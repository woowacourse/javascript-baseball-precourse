import { generateComputerNumber } from "./components/generateNumber.js";
import { checkValidInput } from "./components/validation.js";
import { countStrikeAndBall, getResult } from "./components/playGame.js";

export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = generateComputerNumber();
    this.userInput = document.getElementById("user-input");
    this.submitButton = document.getElementById("submit");
    this.resultDiv = document.getElementById("result");
  }

  getUserInputNumbers() {
    return this.userInput.value;
  }

  onClickSubmitButton(event) {
    event.preventDefault();
    const userInputNumbers = this.getUserInputNumbers();
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
