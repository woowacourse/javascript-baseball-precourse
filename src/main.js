import { makeRandomNumber, verifyInput } from "./ballManager.js";
import { GAME_SCORE } from "./constants.js";
import { createElement } from "./utils.js";
import BaseballGame from "./BaseballGame.js";

export default function main() {
  const result = document.getElementById("result");
  const button = document.getElementById("submit");
  const input = document.getElementById("user-input");
  const restart = createElement("div", "게임을 새로 시작하시겠습니까?");
  const restartBtn = createElement("button", "게임 재시작");

  // 숫자 야구 게임 생성
  const game = new BaseballGame();

  let randomNumber = makeRandomNumber();

  button.addEventListener("click", onClickHandler);

  // 사용자 인풋 버튼 이벤트 리스너
  function onClickHandler(event) {
    event.preventDefault();

    let alertMsg = verifyInput(input.value);

    // 잘못된 인풋 입력 시 alert 메시지
    if (alertMsg !== undefined) {
      alert(alertMsg);
      input.focus();

      return;
    }

    const inputValue = [...input.value].map(Number);
    const hint = game.play(randomNumber, inputValue);

    result.innerText = hint;
    input.focus();

    if (hint === GAME_SCORE.threeStrike) {
      gameClear();
    }
  }

  // 정답을 맞췄을 경우 gameClear
  function gameClear() {
    result.innerText = "🎉 정답을 맞추셨습니다! 🎉";
    result.append(restart);
    restart.append(restartBtn);
    restartBtn.id = "game-restart-button";
    restartBtn.addEventListener("click", onClickRestartHandler);
  }

  // 게임 재시작 버튼 이벤트 리스너
  function onClickRestartHandler(event) {
    randomNumber = makeRandomNumber();
    input.value = "";
    input.focus();
    result.innerHTML = "";
  }
}
