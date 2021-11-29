import { $input, $result, $submit, RESTART } from "./constatns/constants.js";
import makeAnswer from "./computer/makeAnswer.js";
import validateInput from "./user/validateInput.js";
import getResult from "./computer/getResult.js";

export default class Baseball { 
  constructor() {
    this.answer = makeAnswer();
    this.onPressSubmit();
  }

  onPressSubmit() {
    $submit.addEventListener('click', (e) => {
      e.preventDefault();
      if(validateInput($input.value)) {
        $result.innerHTML = this.play(this.answer, $input.value);
      }
      if(this.play(this.answer, $input.value) === RESTART){
        this.onPressRestart();
      }
    })
  }
  
  onPressRestart() {
    const $restart = document.getElementById('game-restart-button') 
    $restart.addEventListener('click', (e) => {
      e.preventDefault();
      $input.value = "";
      this.answer = makeAnswer();
    })
  }
  
  play(computerInputNumbers, userInputNumbers) {
    return getResult(computerInputNumbers, userInputNumbers);
  }
}

new Baseball();