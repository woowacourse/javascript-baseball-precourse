import { RETRY_MESSAGE } from "../assets/constant.js";
import { $app } from "../assets/domElement.js";

export function countStrike(computerInputNumbers, userInputNumbers) {
  var numOfStrike = 0;
  const computerInputNumberArr = String(computerInputNumbers).split("");
  const userInputNumberArr = String(userInputNumbers).split("");

  computerInputNumberArr.map((item, index) => {
    if (item === userInputNumberArr[index]) numOfStrike += 1;
  });

  return numOfStrike;
}

export function countBall(computerInputNumbers, userInputNumbers) {
  var numOfBall = 0;
  const computerInputNumberArr = String(computerInputNumbers).split("");
  const userInputNumberArr = String(userInputNumbers).split("");

  computerInputNumberArr.map((item, index) => {
    if (index === 0) {
      if (item === userInputNumberArr[1] || item === userInputNumberArr[2])
        numOfBall += 1;
    } else if (index === 1) {
      if (item === userInputNumberArr[0] || item === userInputNumberArr[2])
        numOfBall += 1;
    } else {
      if (item === userInputNumberArr[0] || item === userInputNumberArr[1])
        numOfBall += 1;
    }
  });

  return numOfBall;
}

export function win() {
  const span = document.createElement("span");
  span.innerText = RETRY_MESSAGE;
  const button = document.createElement("button");
  button.id = "game-restart-button";
  button.innerText = "게임 재시작";

  $app.appendChild(span);
  $app.appendChild(button);
}
