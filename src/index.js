import { $userInput, $result } from "./constants/constants.js";
import gameResult from "./game/gameResult.js";
import playGame from "./game/playGame.js";
import makeAnswer from "./game/makeAnswer.js";

export default function BaseballGame() {
  const reset = () => {
    $userInput.value = "";
    $result.innerText = "";
    const answer = makeAnswer();
    playGame(answer, this.play);
  };

  this.play = function (computerInputNumbers, userInputNumbers) {
    return gameResult(computerInputNumbers, userInputNumbers);
  };

  reset();
}

new BaseballGame();
