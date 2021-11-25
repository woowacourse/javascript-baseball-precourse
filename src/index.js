import { NUM } from "./constants.js";
import { isValidUserInput } from "./valid.js";

export default class BaseballGame {
  constructor() {
    this.dom();
    this.addEvent();
    this.computerInput = this.getComputerNumber();
    this.$result.innerHTML = "";
  }

  dom() {
    this.$userForm = document.querySelector("form");
    this.$userInput = document.querySelector("#user-input");
    this.$result = document.querySelector("#result");
  }

  addEvent() {
    this.$userForm.addEventListener("submit", this.getUserNumber.bind(this));
  }

  getComputerNumber() {
    const computerNumbers = [];
    while (computerNumbers.length < NUM.MAX_LENGTH) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(
        NUM.MIN_NUMBER,
        NUM.MAX_NUMBER
      );
      if (!computerNumbers.includes(randomNumber)) {
        computerNumbers.push(randomNumber);
      }
    }

    return computerNumbers;
  }

  getUserNumber(e) {
    e.preventDefault();
    const userNumbers = this.$userInput.value
      .split("")
      .map((num) => Number(num));

    if (!isValidUserInput(userNumbers)) {
      this.clearInput();
      return;
    }

    const playResult = this.play(this.computerInput, userNumbers);
    this.displayResult(playResult);
  }

  clearInput() {
    this.$userInput.value = "";
  }

  play(computerInputNumbers, userInputNumbers) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < NUM.MAX_LENGTH; i++) {
      if (computerInputNumbers.indexOf(userInputNumbers[i]) === i) {
        strike++;
        continue;
      }
      if (computerInputNumbers.includes(userInputNumbers[i])) {
        ball++;
      }
    }

    return this.getResultText(strike, ball);
  }

  getResultText(strike, ball) {
    let text = "";
    if (strike === 0 && ball === 0) {
      text = "낫싱";
    }
    if (ball > 0) {
      text += `${ball}볼 `;
    }
    if (strike > 0) {
      text += `${strike}스트라이크`;
    }
    if (strike === NUM.MAX_LENGTH) {
      text = "정답";
    }

    return text;
  }

  displayResult(text) {
    this.$result.innerHTML = text;
  }
}

new BaseballGame();
