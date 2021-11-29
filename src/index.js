import {
  isNumber,
  isNotDuplicateExist,
  isLengthThree,
} from "./util/validator.js";
import { $ } from "./util/selector.js";
import { renderResult, renderInit } from "./util/render.js";
import { checkResult } from "./util/checkResult.js";

export default class BaseballGame {
  constructor() {
    this.computerInput = generateComputerInput();
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
    if (playResult.isSuccess) this.addEventlistenerToRestartButton();
  }

  play(computerInputNumbers, userInputNumbers) {
    if (
      isLengthThree(userInputNumbers) &&
      isNumber(userInputNumbers) &&
      isNotDuplicateExist(userInputNumbers)
    ) {
      const result = checkResult(computerInputNumbers, userInputNumbers);
      return result;
    }
    alert("입력값을 다시 확인해주세요");
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
