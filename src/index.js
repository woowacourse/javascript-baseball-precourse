import { makeRandomNumber, verifyInput, ballAndStrike, makeHint } from "./ballManager.js";
import { GAME_SCORE } from "./constants.js";
import { createElement } from "./utils.js";

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    console.log(computerInputNumbers, userInputNumbers);

    let [strike, ball] = ballAndStrike(computerInputNumbers, userInputNumbers);
    let resultString = makeHint(strike, ball);

    return resultString;
  };
}

function main() {
  const result = document.getElementById("result");
  const button = document.getElementById("submit");
  const input = document.getElementById("user-input");
  const restart = createElement("div", "게임을 새로 시작하시겠습니까?");
  const restartBtn = createElement("button", "게임 재시작");
  const game = new BaseballGame();

  let randomNumber = makeRandomNumber();

  button.addEventListener("click", onClickHandler);

  function onClickHandler(event) {
    event.preventDefault();
    if (verifyInput(input.value) === false) {
      input.focus();
      return;
    }

    const inputValue = [...input.value].map(Number);
    const hint = game.play(randomNumber, inputValue);
    result.innerText = hint;
    input.focus();

    if (hint === GAME_SCORE.threeStrike) {
      gameOver();
    }
  }

  function gameOver() {
    result.innerText = "🎉 정답을 맞추셨습니다! 🎉";
    result.append(restart);
    restart.append(restartBtn);
    restartBtn.id = "game-restart-button";
    restartBtn.addEventListener("click", onClickRestartHandler);
  }

  const onClickRestartHandler = function (event) {
    randomNumber = makeRandomNumber();
    input.value = "";
    input.focus();
    result.innerHTML = "";
  };
}

main();
