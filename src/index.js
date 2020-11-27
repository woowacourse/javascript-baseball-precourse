import Util, { DIGITS } from "./util.js";

const form = document.querySelector("#form");
const userInput = document.querySelector("#user-input");
const computerInputNumbers = createRandomNumbers();
const result = document.querySelector("#result");

export default class BaseballGame {
  correctAnswer = false;

  play(computerInputNumbers, userInputNumbers) {
    let strike = 0;
    let ball = 0;
    let responseMessage = "";

    for (let i = 0; i < DIGITS; i++) {
      let compare = computerInputNumbers[i];

      if (compare === userInputNumbers[i]) {
        strike++;
      } else if (userInputNumbers.includes(compare)) {
        ball++;
      }
    }
    if (strike === 3) {
      this.correctAnswer = true;
      return "💯 정답을 맞추셨습니다! 💯";
    }
    if (strike === 0 && ball === 0) {
      return "낫싱";
    }
    responseMessage =
      ball > 0 ? responseMessage + `${ball}볼 ` : responseMessage;
    responseMessage =
      strike > 0 ? responseMessage + `${strike}스트라이크` : responseMessage;
    return responseMessage;
  }

  renderResult(computerInputNumbers, userInputNumbers) {
    const answerSection = document.createElement("div");
    const answer = document.createElement("div");
    const restartMessage = document.createElement("span");
    const restartButton = document.createElement("button");

    result.innerText = "";
    answer.innerText = this.play(computerInputNumbers, userInputNumbers);
    if (!this.correctAnswer) {
      result.appendChild(answer);
      return;
    }
    answerSection.appendChild(answer);
    answerSection.id = "answer";
    result.appendChild(answerSection);
    restartMessage.innerText = "게임을 새로 시작하시겠습니까?";
    result.appendChild(restartMessage);
    restartButton.innerText = "게임 재시작";
    restartButton.id = "game-restart-button";
    restartButton.addEventListener("click", () => location.reload());
    result.appendChild(restartButton);
  }
}

function createRandomNumbers() {
  let result = 0;

  for (let i = 0; i < DIGITS; i++) {
    let randomNumber = Math.floor(Math.random() * 10);

    result = result * 10 + randomNumber;
    if (randomNumber === 0 || Util.prototype.isOverlaped(result)) {
      result = createRandomNumbers();
      return result;
    }
  }
  return result.toString();
}

function runBaseballGame(event) {
  event.preventDefault();
  const userInputNumbers = userInput.value;
  let baseballGame = new BaseballGame();

  userInput.value = "";
  if (!Util.prototype.isValidNumbers(userInputNumbers)) {
    alert("잘못된 입력값입니다. 다시 입력해주세요 :)");
    return;
  }
  if (result.firstChild !== null && result.firstChild.id === "answer") {
    alert("이미 정답을 맞히셨습니다!");
    return;
  }
  baseballGame.renderResult(computerInputNumbers, userInputNumbers);
}

form.addEventListener("submit", runBaseballGame);
