import { pickRandomNumbers } from "./utils.js";

export default function BaseballGame() {
    let computerInputNumbers = pickRandomNumbers();
    console.log(computerInputNumbers);

    this.play = function (computerInputNumbers, userInputNumbers) {
        return "결과 값 String";
    };
}

new BaseballGame();
