import { validateInput } from "./validation.js";

const handleSubmitForm = (e) => {
  e.preventDefault();
};

const handleClickSubmitButton = () => {
  const userInput = document.querySelector("#user-input").value.trim();

  const validationResult = validateInput(userInput);

  if (!validationResult.result) {
    alert(validationResult.message);
    document.querySelector("#user-input").value = "";

    return;
  }

  console.log("play");
};

const initEventListener = () => {
  document.querySelector("form").addEventListener("submit", handleSubmitForm);

  document
    .querySelector("#submit")
    .addEventListener("click", handleClickSubmitButton);
};

export default initEventListener;

initEventListener();
