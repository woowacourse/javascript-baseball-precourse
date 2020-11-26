import { DIGITS } from "./util.js";

export default class BaseballGame {
  play(computerInputNumbers, userInputNumbers) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < DIGITS; i++) {
      let compare = computerInputNumbers[i];

      if (compare === userInputNumbers[i]) {
        strike++;
      } else if (userInputNumbers.includes(compare)) {
        ball++;
      }
    }
    this.renderResult(ball, strike);
  }

  renderResult(ball, strike) {
    const result = document.querySelector("#result");

    result.innerText = "";
    if (strike === 0 && ball === 0) {
      result.innerText = "낫싱";
      return;
    }
    this.renderBallCount(ball, result);
    this.renderStrikeCount(strike, result);
  }

  renderBallCount(ball, result) {
    const ballCount = document.createElement("span");

    if (ball === 0) {
      return;
    }
    ballCount.innerText = `${ball}볼`;
    result.appendChild(ballCount);
  }

  renderStrikeCount(strike, result) {
    const strikeCount = document.createElement("span");
    const answer = document.createElement("strong");
    const restartMessage = document.createElement("span");
    const restartButton = document.createElement("button");

    if (strike === 0) {
      return;
    }
    if (strike < 3) {
      strikeCount.innerText = `${strike}스트라이크`;
      result.appendChild(strikeCount);
    } else {
      answer.innerText = "💯 정답을 맞추셨습니다! 💯";
      answer.id = "answer";
      result.appendChild(answer);
      restartMessage.innerText = "게임을 새로 시작하시겠습니까?";
      result.appendChild(restartMessage);
      restartButton.innerText = "게임 재시작";
      restartButton.addEventListener("click", () => location.reload());
      result.appendChild(restartButton);
    }
  }
}
