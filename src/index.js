import {generateTargetNumber} from './utils/targetNumber.js';
import { inputNumberValidator } from './Validators/NumberValidator.js';

export default class BaseballGame {

    constructor(){
      this.targetNumber = generateTargetNumber();
      this.$submitButton = document.getElementById("submit");
      this.$input = document.getElementById("user-input");
      this.bindEvents();
    }

    bindEvents(){
      this.$submitButton.addEventListener("click",this.onClick.bind(this));
    }
    onClick(event){
      event.preventDefault();
      const errorMessage = inputNumberValidator(this.$input.value);
      if(errorMessage){
        return alert(errorMessage);
      }
    }

    play(computerInputNumbers, userInputNumbers) {
      return "결과 값 String";
    }
}

new BaseballGame()