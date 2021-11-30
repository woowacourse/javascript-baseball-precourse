import validate from "./validate.js";

const userInput = document.getElementById("user-input");

export default function getUserInputNumbers() {
  if (validate(userInput.value)) {
    return userInput.value;
  }
  return "";
}
