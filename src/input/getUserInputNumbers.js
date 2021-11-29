import validate from "./validate.js";

const userInput = document.getElementById("user-input");
const submitButton = document.getElementById("submit");

function onClick(event) {
  console.log(userInput.value);
  event.preventDefault();
}

export default function getUserInputNumbers() {
  console.log(userInput.value);
  submitButton.addEventListener("click", onClick);

  console.log(userInput.value);
}
