import gameEventHandler from "./game/gameEventHandler.js";
import getGameResult from "./game/getGameResult.js";

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return getGameResult(computerInputNumbers, userInputNumbers);
  };
  gameEventHandler(this.play);
}

new BaseballGame();