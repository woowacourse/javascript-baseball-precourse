import isValidInput from "./isValidInput.js";

export default function getUserInput() {
  const $userSubmitButton = document.querySelector("#submit");

  $userSubmitButton.addEventListener("click", event => {
    event.preventDefault(); // 개발을 위해서 잠시 페이지 새로고침을 일단 막아둠
    const userInputValue = document.querySelector("#user-input").value;
    if (isValidInput(userInputValue.split('').map((elem) => +elem))) {
      console.log("valid!");
    }
  });
}
