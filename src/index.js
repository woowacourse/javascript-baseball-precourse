import getComputerNumber from "./number/getComputerNumber.js";
import getUserNumber from "./number/getUserNumber.js";
import { $ } from "./util/index.js";

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };

  $("form").addEventListener("submit", (e) => e.preventDefault());

  $("#submit").addEventListener("click", () => {
    console.log(getUserNumber());
    console.log(getComputerNumber());
  });
}

new BaseballGame();
