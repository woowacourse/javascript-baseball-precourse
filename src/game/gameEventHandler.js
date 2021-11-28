import getComputerInput from "../input/getComputerInput.js";
import getUserInput from "../input/getUserInput.js";

export default function gameEventHandler(play) {
  const $userSubmitButton = document.querySelector("#submit");
  const computerInput = getComputerInput(); //let으로 바꿔야 재시작할 때 재할당할 수 있을 것이다

  $userSubmitButton.addEventListener("click", (event) => {
    event.preventDefault(); // 개발을 위해서 잠시 페이지 새로고침을 일단 막아둠
    const userInput = getUserInput();
    if (userInput) play(computerInput, userInput);
  });
}