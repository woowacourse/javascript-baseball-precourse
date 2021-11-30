import getComputerNumber from "../number/getComputerNumber.js";
import getUserNumber from "../number/getUserNumber.js";
import renderGameResult from "./renderGameResult.js";
import { $ } from "../util/index.js";

const resetGame = () => {
  $("#user-input").value = "";
  $("#result").innerHTML = "";
};

const playGame = (computerInputNumbers, play) => {
  $("form").addEventListener("submit", (e) => e.preventDefault());

  $("#submit").addEventListener("click", () => {
    const userInputNumbers = getUserNumber();

    if (userInputNumbers) {
      const game_result = play(computerInputNumbers, userInputNumbers);
      renderGameResult(game_result);
    }
  });

  $("#result").addEventListener("click", (e) => {
    if (e.target.id === "game-restart-button") {
      resetGame();
      computerInputNumbers = getComputerNumber();
    }
  });
};
export default playGame;
