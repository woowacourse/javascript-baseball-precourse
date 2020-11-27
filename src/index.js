
import gameResult from "./game-count.js";

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {

    return "결과 값 String";
  };
}

document.getElementById('submit').addEventListener("click", () => {
  const GAME_RESULT = gameResult()

  document.getElementById('result').innerHTML = GAME_RESULT;
})

new BaseballGame();

// const baseballGame = new BaseballGame();
// baseballGame.play();
