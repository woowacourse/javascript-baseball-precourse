import gameEventHandler from "./game/gameEventHandler.js";

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    console.log(computerInputNumbers, userInputNumbers);
    // return getGameResult(computerInputNumbers, userInputNumbers);
  };
  gameEventHandler(this.play);
}

new BaseballGame();