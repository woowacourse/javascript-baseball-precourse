import validateInput from "./validation.js";
import { DOM, correctResultTemplate, $, $on } from "./domHelpers.js";
import { RESULT_CORRECT, ERROR_MESSAGE } from "../config/config.js";

export default function EventManager(baseballGame) {
  this.baseballGame = baseballGame;

  this.initEventListeners = function initEventListeners() {
    $on($(DOM.form), "submit", (e) => {
      e.preventDefault();
    });
    $on($(DOM.submitButton), "click", this.handleClickSubmitButton.bind(this));
    $on($(DOM.resultDiv), "click", (e) => {
      if (e.target.id === DOM.gameRestartButtonId) {
        this.handleClickGameRestartButton.call(this);
      }
    });
  };

  this.handleClickSubmitButton = function handleClickSubmitButton() {
    const userInputNumbers = $(DOM.userInput).value.trim();

    if (!validateInput(userInputNumbers)) {
      alert(ERROR_MESSAGE);
      $(DOM.userInput).value = "";

      return;
    }

    const resultString =
      this.baseballGame.playWithGeneratedNumber(userInputNumbers);

    this.render(resultString);
  };

  this.handleClickGameRestartButton = function handleClickGameRestartButton() {
    this.baseballGame.initAnswer();
    $(DOM.resultDiv).innerHTML = "";
    $(DOM.userInput).value = "";
  };

  this.render = function render(resultString) {
    $(DOM.resultDiv).innerHTML =
      resultString === RESULT_CORRECT
        ? correctResultTemplate
        : resultString;
  };
}
