import gameResult from "./game/gameResult.js";
import gameResultRender from "./game/gameResultRender.js";
import getComputerNumber from "./number/getComputerNumber.js";
import getUserNumber from "./number/getUserNumber.js";
import { $ } from "./util/index.js";

export default function BaseballGame() {
  let computerInputNumbers = getComputerNumber();

  this.play = function (computerInputNumbers, userInputNumbers) {
    return gameResult(computerInputNumbers, userInputNumbers);
  };

  $("form").addEventListener("submit", (e) => e.preventDefault());

  $("#submit").addEventListener("click", () => {
    const userInputNumbers = getUserNumber();

    console.log(computerInputNumbers, userInputNumbers);

    if (userInputNumbers) {
      const game_result = this.play(computerInputNumbers, userInputNumbers);
      gameResultRender(game_result);
    }
  });

  $("#result").addEventListener("click", (e) => {
    if (e.target.id === "game-restart-button") {
      computerInputNumbers = getComputerNumber();
    }
  });
}

new BaseballGame();
