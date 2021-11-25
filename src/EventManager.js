/* eslint-disable func-names */
import { validateInput } from "./validation.js";
import { $, $on } from "./helpers.js";

export default function EventManager() {
  this.form = $("form");
  this.$submitButton = $("#submit");

  const handleSubmitForm = function (e) {
    e.preventDefault();
  };

  const handleClickSubmitButton = function (baseballGame) {
    const userInput = document.querySelector("#user-input").value.trim();
    const validationResult = validateInput(userInput);

    if (!validationResult.result) {
      alert(validationResult.message);
      document.querySelector("#user-input").value = "";

      return;
    }

    console.log(baseballGame.playWithGeneratedNumber(userInput));
  };

  this.initEventListeners = (arg) => {
    $on(this.form, "submit", handleSubmitForm);
    $on(this.$submitButton, "click", handleClickSubmitButton.bind(null, arg));
  };
}
