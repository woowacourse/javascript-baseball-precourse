import { $userInput, $result } from "./constants/constants.js";
import compareAnswers from "./game/compareAnswers.js";
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
    return compareAnswers(computerInputNumbers, userInputNumbers);
  };

  reset();
}

new BaseballGame();
