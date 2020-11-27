import { makeRandomNumber, verifyInput } from "./ballManager.js";
import { GAME_SCORE } from "./constants.js";
import { createElement } from "./utils.js";

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    console.log(computerInputNumbers, userInputNumbers);

    //컴퓨터, 사용자 숫자 비교
    let strike = 0;
    let ball = 0;

    for (let i = 0; i <= 2; i++) {
      if (computerInputNumbers[i] === userInputNumbers[i]) {
        strike += 1;
      } else if (computerInputNumbers.includes(userInputNumbers[i]) === true) {
        ball += 1;
      }
    }

    //결과창
    if (strike === 3) {
      return GAME_SCORE.threeStrike;
    } else if (strike + ball === 0) {
      return GAME_SCORE.nothing;
    } else if ((strike >= 1) & (ball >= 1)) {
      return `${ball}볼 ${strike}스트라이크`;
    } else if ((strike === 0) & (ball >= 1)) {
      return `${ball}볼`;
    } else if ((strike >= 1) & (ball === 0)) {
      return `${strike}스트라이크`;
    }
    console.log("ball", ball, "strike", strike);
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

  //재시작 함수
  //버튼 이벤트 리스너 함수 호출
  button.addEventListener("click", onClickHandler);

  //온클릭핸들러
  function onClickHandler(event) {
    event.preventDefault();
    if (verifyInput(input.value) === false) return;

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
