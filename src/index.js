import utils from "./utils.js";
import { $input, $result, $submit, RESTART } from "./constant.js";
import validate from "./validate.js";
import getResult from "./result.js";

export default class BaseballGame {
  constructor() {
    this.answer = utils();
    this.onPressSubmit();
  }
  play(computerInputNumbers, userInputNumbers) {
    return getResult(computerInputNumbers, userInputNumbers);
  }

  onPressSubmit() {
    $submit.addEventListener("click", (event) => {
      event.preventDefault();
      if (validate($input.value)) {
        $result.innerHTML = this.play(this.answer, $input.value); // innerHTML과 다른 것들과의 차이
      }
      if (this.play(this.answer, $input.value) === RESTART) {
        this.onPressRestart();
      }
    });
  }

  onPressRestart() {
    const $restart = document.getElementById("game-restart-button");
    $restart.addEventListener("click", (event) => {
      event.preventDefault();
      $input.value = "";
      this.answer = utils();
      $result.innerHTML = "";
    });
  }
}

new BaseballGame();

// 예시
// play(123, 456); // '낫싱'
// play(123, 345); // '1볼'
// play(123, 432); // '2볼'
// play(123, 312); // '3볼'
// play(123, 145); // '1스트라이크'
// play(123, 134); // '1볼 1스트라이크'
// play(123, 132); // '2볼 1스트라이크'
// play(123, 124); // '2스트라이크'
