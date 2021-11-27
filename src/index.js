import playGame from "./game/playGame.js";

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    console.log(computerInputNumbers, userInputNumbers);
    // return getGameResult(computerInputNumbers, userInputNumbers);
  };
  playGame(this.play);
}

new BaseballGame();