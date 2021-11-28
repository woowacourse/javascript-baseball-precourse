import gameResult from "./game/gameResult.js";
import getComputerNumber from "./number/getComputerNumber.js";
import getUserNumber from "./number/getUserNumber.js";
import { $ } from "./util/index.js";

export default function BaseballGame() {
  const computerInputNumbers = getComputerNumber();

  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };

  $("form").addEventListener("submit", (e) => e.preventDefault());

  $("#submit").addEventListener("click", () => {
    const userInputNumbers = getUserNumber();

    if (userInputNumbers) {
      const game_result = gameResult(computerInputNumbers, userInputNumbers);

      console.log(computerInputNumbers, userInputNumbers);
      if (game_result === "정답") {
        $("#result").innerHTML = `
          <div>정답을 맞추셨습니다!</div>
          게임을 새로 시작하시겠습니까? 
          <button id="game-restart-button">재시작</button>
        `;
        return;
      }
      $("#result").innerText = game_result;
      return;
    }
  });
}

new BaseballGame();
