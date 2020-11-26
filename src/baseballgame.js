import Util, { DIGITS } from "./util.js";

export default class BaseballGame {
  play(computerInputNumbers, userInputNumbers) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < computerInputNumbers.length; i++) {
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
    const answer = document.createElement("strong");
    const restart = document.createElement("span");
    const restartButton = document.createElement("button");

    result.innerText = "";
    if (ball === 0 && strike === 0) {
      result.innerText = "낫싱";
    } else if (strike === 0) {
      result.innerText = `${ball}볼`;
    } else {
      answer.innerText = "💯 정답을 맞추셨습니다! 💯";
      answer.id = "answer";
      result.appendChild(answer);
      restart.innerText = "게임을 새로 시작하시겠습니까?";
      result.appendChild(restart);
      restartButton.innerText = "게임 재시작";
      restartButton.addEventListener("click", () => location.reload());
      result.appendChild(restartButton);
    }
  }
}
