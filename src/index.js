import { generateRandomNumbers } from "./init.js";

export default function BaseballGame() {
  const setRandomNumbers = generateRandomNumbers();

  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };

  console.log(setRandomNumbers);
}

const buttonSubmit = document.getElementById("submit");

buttonSubmit.addEventListener("click", (e) => {
  console.log("hi");
});

new BaseballGame();
