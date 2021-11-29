import { $input, $submit } from "./constatns/constants.js";
import makeAnswer from "./computer/makeAnswer.js";
import validateInput from "./user/validateInput.js";
import getResult from "./computer/getResult.js";

export default class Baseball { 
  constructor() {
    this.answer = makeAnswer();
    this.onPressSubmit();
  }

  onPressSubmit() {
    $submit.addEventListener('click',(e)=>{
      e.preventDefault();
      if(validateInput($input.value)){
        this.play(this.answer, $input.value)
      }
    })

    return ;
  }

  play(computerInputNumbers, userInputNumbers) {
    
    return getResult(computerInputNumbers, userInputNumbers);
  }
}

new Baseball();