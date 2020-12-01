import { ballAndStrike, makeHint } from "./ballManager.js";

// 숫자 야구 게임
export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    let [ball, strike] = ballAndStrike(computerInputNumbers, userInputNumbers);
    let resultString = makeHint(ball, strike);

    return resultString;
  };
}
