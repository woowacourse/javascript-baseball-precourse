/* eslint-disable func-names */
import { validateInput } from "./validation.js";
import { $, $on } from "./helpers.js";
import {
  RESULT_CORRECT,
  MESSAGE_CORRECT_ANSWER,
  MESSAGE_RESTART_GAME,
} from "./config.js";

export default function EventManager() {
  this.form = $("form");
  this.$userInput = $("#user-input");
  this.$submitButton = $("#submit");
  this.$resultDiv = $("#result");
  this.$gameRestartButton = document.createElement("button");
  this.$gameRestartButton.setAttribute("id", "game-restart-button");
  this.$gameRestartButton.innerText = "재시작";

  const handleSubmitForm = function (e) {
    e.preventDefault();
  };

  const handleClickSubmitButton = function (baseballGame) {
    const userInputNumbers = this.$userInput.value.trim();
    const validationResult = validateInput(userInputNumbers);

    if (!validationResult.result) {
      alert(validationResult.message);
      this.$userInput.value = "";

      return;
    }

    const resultString = baseballGame.playWithGeneratedNumber(userInputNumbers);

    if (resultString === RESULT_CORRECT) {
      const correctMessageTemplate = `
        <h4>${MESSAGE_CORRECT_ANSWER}</h4>
        ${MESSAGE_RESTART_GAME}
      `;

      this.$resultDiv.innerHTML = correctMessageTemplate;
      this.$resultDiv.appendChild(this.$gameRestartButton);

      $on(this.$gameRestartButton, "click", () => {
        baseballGame.initAnswer();
        this.$resultDiv.innerHTML = "";
        this.$userInput.value = "";
      });
    } else {
      this.$resultDiv.innerHTML = resultString;
    }
  };

  this.initEventListeners = (arg) => {
    $on(this.form, "submit", handleSubmitForm);
    $on(this.$submitButton, "click", handleClickSubmitButton.bind(this, arg));
  };
}
