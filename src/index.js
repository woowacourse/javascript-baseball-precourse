import { isNotDuplicateExist, validateUserInput } from "./utils/validator.js";
import { $ } from "./utils/selector.js";
import { renderResult, renderInit } from "./utils/render.js";
import { checkResult } from "./utils/checkResult.js";
import { showError } from "./utils/error.js";

export default class BaseballGame {
  constructor() {
    this.computerInput = this.generateComputerInput();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }
  init() {
    const $form = $("form");
    $form.addEventListener("submit", this.handleSubmit);
  }

  generateComputerInput() {
    let randomNum = MissionUtils.Random.pickNumberInRange(1, 9).toString();
    while (randomNum.length !== 3) {
      const newRandomNum = MissionUtils.Random.pickNumberInRange(
        1,
        9
      ).toString();
      if (isNotDuplicateExist(randomNum + newRandomNum))
        randomNum += newRandomNum;
    }
    return randomNum;
  }

  handleSubmit(event) {
    event.preventDefault();
    const playResult = this.play(this.computerInput, this.getUserInput());
    playResult && renderResult(playResult);
    $("#game-restart-button") && this.addEventlistenerToRestartButton();
  }

  play(computerInputNumbers, userInputNumbers) {
    const isInputValidated = validateUserInput(userInputNumbers);
    if (isInputValidated) {
      const resultHtml = checkResult(computerInputNumbers, userInputNumbers);
      return resultHtml;
    }
    showError();
    this.resetInput();
    return false;
  }

  resetInput() {
    const $input = $("#user-input");
    $input.value = "";
  }

  getUserInput() {
    const $input = $("#user-input");
    return $input.value;
  }

  restartGame() {
    renderInit();
    this.init();
    this.resetInput();
  }

  addEventlistenerToRestartButton() {
    const $restartButton = $("#game-restart-button");
    $restartButton.addEventListener("click", this.restartGame);
  }
}

const baseBallGame = new BaseballGame();
baseBallGame.init();
