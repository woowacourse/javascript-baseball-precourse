import Util, { DIGITS } from "./util.js";
import BaseballGame from "./baseballgame.js";

const form = document.querySelector("#form");
const userInput = document.querySelector("#user-input");
const submitButton = document.querySelector("#submit");
const computerInputNumbers = createRandomNumbers();
const result = document.querySelector("#result");
let userInputNumbers = null;

function createRandomNumbers() {
  let result = 0;

  for (let i = 0; i < DIGITS; i++) {
    let randomNumber = Math.floor(Math.random() * 10);

    result = result * 10 + randomNumber;
    if (randomNumber === 0 || Util.prototype.checkOverlap(result)) {
      result = createRandomNumbers();
      return result;
    }
  }
  return result.toString();
}

function runBaseballGame(event) {
  event.preventDefault();
  userInputNumbers = userInput.value;
  userInput.value = "";
  if (!Util.prototype.isValidNumbers(userInputNumbers)) {
    alert("잘못된 입력값입니다. 다시 입력해주세요 :)");
    return;
  }
  if (result.firstChild !== null && result.firstChild.id === "answer") {
    alert("이미 정답을 맞히셨습니다!");
    return;
  }
  BaseballGame.prototype.play(computerInputNumbers, userInputNumbers);
}

console.log(computerInputNumbers);
form.addEventListener("submit", runBaseballGame);
