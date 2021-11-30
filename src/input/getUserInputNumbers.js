import validate from "./validate.js";

const userInput = document.getElementById("user-input");

export default function getUserInputNumbers() {
  if (validate(userInput.value)) {
    console.log("올바른 입력", userInput.value);
    return userInput.value;
  }
  return "";
}
