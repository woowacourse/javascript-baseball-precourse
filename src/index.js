import { validateUserInput } from "./validate.js";
export default class BaseballGame {
  constructor() {
    this.init();
  }

  init = () => {
    this.computerInputNumbers = this.generateRandomNumbers();
  };

  generateRandomNumbers() {
    let randomNumbers = "";
    while (randomNumbers.length != 3) {
      const number = String(Math.floor(Math.random() * 9) + 1);
      if (!randomNumbers.includes(number)) randomNumbers += number;
    }
    return randomNumbers;
  }

  play(computerInputNumbers, userInputNumbers) {
    let resultMessage = "";
    let strikeCount = 0;
    let ballCount = 0;

    if (computerInputNumbers === userInputNumbers) {
      resultMessage = "🎉 정답을 맞추셨습니다. 🎉";
      this.isEnded = true;
      return resultMessage;
    }

    for (let i = 0; i < 3; i++) {
      if (computerInputNumbers[i] === userInputNumbers[i]) strikeCount++;
      else if (computerInputNumbers.includes(userInputNumbers[i])) ballCount++;
    }

    if (ballCount) resultMessage += `${ballCount}볼`;
    if (strikeCount) resultMessage += ` ${strikeCount}스트라이크`;
    if (!ballCount && !strikeCount) resultMessage = "낫싱";
    return resultMessage;
  }
}

//DOM Elements
const game = new BaseballGame();
const userInputBox = document.getElementById("user-input");
const submitButton = document.getElementById("submit");

function getUserInputNumbers() {
  const userInputNumbers = userInputBox.value;
  const isValid = validateUserInput(userInputNumbers);
  if (!isValid) {
    alert("입력값이 잘못되었습니다. 다시 입력해주세요 :)");
    userInputBox.value = "";
    return;
  }
  console.log(userInputNumbers);
  return userInputNumbers;
}
submitButton.onclick = getUserInputNumbers;
