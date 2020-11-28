import { ballAndStrike, makeHint } from "./ballManager.js";

// 숫자야구 게임
export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    console.log(computerInputNumbers, userInputNumbers);

    let [ball, strike] = ballAndStrike(computerInputNumbers, userInputNumbers);
    let resultString = makeHint(ball, strike);

    return resultString;
  };
}
