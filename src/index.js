import {generateTargetNumber} from './utils/targetNumber.js';
import { inputNumberValidator } from './Validators/NumberValidator.js';
import { resultElement,successElement, emptyElement } from './components/app.js';
import { caculateBallCount, countToString, combineCount } from './utils/ballCount.js';
import { COUNT,DOM_ID } from './constant.js';

export default class BaseballGame {

    constructor(){
      this.targetNumber = generateTargetNumber();
      this.$app = document.getElementById(DOM_ID.APP);
      this.$submitButton = document.getElementById(DOM_ID.SUBMIT);
      this.$input = document.getElementById(DOM_ID.INPUT);
      this.$resetButton = null;
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
      if(count===COUNT.SUCCESS){
        this.render(successElement())
        return this.activateResetButtton();
      }
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

    activateResetButtton(){
      this.$resetButton = document.getElementById(DOM_ID.RESET);
      this.$resetButton.addEventListener('click',this.reset.bind(this));
    }

    reset(){
      this.targetNumber = generateTargetNumber();
      this.render(emptyElement());
      this.$input.value = "";
    }

}

new BaseballGame()