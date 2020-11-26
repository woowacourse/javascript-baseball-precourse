import userInput, { isValidUserInput } from "./user-input.js";

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {

    return "결과 값 String";
  };
}

function randomNumberMaker(randomNumberLength) {
  const maxNum = 9;
  const minNum = 1;
  const range = maxNum - minNum + 1;
  let randomNumberArray = [];

  while (randomNumberArray.length < randomNumberLength) {
    let randomNumber = Math.floor((Math.random() * range) + minNum);

    if (!randomNumberArray.includes(randomNumber)) {
      randomNumberArray.push(randomNumber);
    }
  }

  return randomNumberArray;
}

document.getElementById('submit').addEventListener("click", () => {
  isValidUserInput(userInput());
})

new BaseballGame();

// const baseballGame = new BaseballGame();
// baseballGame.play();
