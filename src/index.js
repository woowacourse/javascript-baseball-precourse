import { isNotDuplicateExist } from "./utils/validator.js";
import { $ } from "./utils/selector.js";
import { renderResult, renderInit } from "./utils/render.js";
import { checkResult } from "./utils/checkResult.js";
import { resetInput } from "./utils/resetInput.js";

export default class BaseballGame {
  constructor() {
    this.computerInput = "";
    this.handleSubmit = this.handleSubmit.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }
  init() {
    const $form = $("form");
    $form.addEventListener("submit", this.handleSubmit);
    this.generateComputerInput();
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
    this.computerInput = randomNum;
  }

  handleSubmit(event) {
    event.preventDefault();
    const playResult = this.play(this.computerInput, this.getUserInput());
    if (playResult) {
      renderResult(playResult);
      $("#game-restart-button") && this.addEventlistenerToRestartButton();
    }
  }

  play(computerInputNumbers, userInputNumbers) {
    return checkResult(computerInputNumbers, userInputNumbers);
  }

  getUserInput() {
    const $input = $("#user-input");
    return $input.value;
  }

  restartGame() {
    resetInput();
    renderInit();
    this.generateComputerInput();
  }

  addEventlistenerToRestartButton() {
    const $restartButton = $("#game-restart-button");
    $restartButton.addEventListener("click", this.restartGame);
  }
}

const baseBallGame = new BaseballGame();
baseBallGame.init();
