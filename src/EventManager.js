/* eslint-disable func-names */
import { validateInput } from "./validation.js";
import { $, $on } from "./helpers.js";
import {
  RESULT_CORRECT,
  MESSAGE_CORRECT_ANSWER,
  MESSAGE_RESTART_GAME,
} from "./config.js";

export default function EventManager(baseballGame) {
  this.baseballGame = baseballGame;
  this.form = $("form");
  this.$userInput = $("#user-input");
  this.$submitButton = $("#submit");
  this.$resultDiv = $("#result");

  this.initEventListeners = () => {
    $on(this.form, "submit", this.handleSubmitForm);
    $on(this.$submitButton, "click", this.handleClickSubmitButton.bind(this));
    $on(this.$resultDiv, "click", (e) => {
      if (e.target.id === "game-restart-button") {
        this.handleClickGameRestartButton.call(this);
      }
    });
  };

  this.handleSubmitForm = function (e) {
    e.preventDefault();
  };

  this.handleClickSubmitButton = function () {
    const userInputNumbers = this.$userInput.value.trim();
    const validationResult = validateInput(userInputNumbers);

    if (!validationResult.result) {
      alert(validationResult.message);
      this.$userInput.value = "";

      return;
    }

    const resultString =
      this.baseballGame.playWithGeneratedNumber(userInputNumbers);

    this.render(resultString);
  };

  this.handleClickGameRestartButton = function () {
    this.baseballGame.initAnswer();
    this.$resultDiv.innerHTML = "";
    this.$userInput.value = "";
  };

  this.render = function (resultString) {
    const correctResultTemplate = `
        <h4>${MESSAGE_CORRECT_ANSWER}</h4>
        ${MESSAGE_RESTART_GAME}
        <button id="game-restart-button">재시작</button>
      `;

    this.$resultDiv.innerHTML =
      resultString === RESULT_CORRECT ? correctResultTemplate : resultString;
  };
}
