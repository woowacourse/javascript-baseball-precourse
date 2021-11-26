import { $userInput, $result } from "./constants/constants.js";
import playGame from "./game/playGame.js";
import makeAnswer from "./makeAnswer.js";

export default function BaseballGame() {
  const reset = () => {
    $userInput.value = "";
    $result.innerText = "";
    const answer = makeAnswer();
    playGame(answer, this.play);
  };

  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };

  reset();
}

new BaseballGame();
