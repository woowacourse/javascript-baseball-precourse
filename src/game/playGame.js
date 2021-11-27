import getComputerInput from "../input/getComputerInput.js";
import getUserInput from "../input/getUserInput.js";

export default function playGame(play) {
  const $userSubmitButton = document.querySelector("#submit");
  const computerInput = getComputerInput();

  $userSubmitButton.addEventListener("click", (event) => {
    event.preventDefault(); // 개발을 위해서 잠시 페이지 새로고침을 일단 막아둠
    const userInput = getUserInput();
    if (userInput) play(computerInput, userInput);
  });
}