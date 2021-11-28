import gameResult from "./game/gameResult.js";
import gameResultRender from "./game/gameResultRender.js";
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
      gameResultRender(game_result);
    }
  });
}

new BaseballGame();
