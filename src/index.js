import {generateTargetNumber} from './utils/targetNumber.js';
import { inputNumberValidator } from './Validators/NumberValidator.js';
import { resultElement } from './components/app.js';
import { caculateBallCount, countToString, combineCount } from './utils/ballCount.js';
import { COUNT } from './constant.js';

export default class BaseballGame {

    constructor(){
      this.targetNumber = generateTargetNumber();
      this.$app = document.getElementById("app");
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
      const userInputNumbers = this.$input.value.split('').map(Number);
      const count = this.play(this.targetNumber,userInputNumbers);
      this.render(resultElement(count))
    }

    play(computerInputNumbers, userInputNumbers) {
      const result = caculateBallCount(computerInputNumbers, userInputNumbers);
      if(!result.ball && !result.strike){
        return COUNT.NO_COUNT;
      }
      const ballCount = countToString(result.ball, COUNT.BALL);
      const strikeCount = countToString(result.strike, COUNT.STRIKE);
      return combineCount(ballCount,strikeCount);
    }

    render($element){
      this.$app.replaceChild($element,this.$app.lastElementChild);
    }
}

new BaseballGame()