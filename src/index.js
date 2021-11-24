import {generateTargetNumber} from './utils/targetNumber.js';

export default class BaseballGame {

    constructor(){
        this.answer = generateTargetNumber();
        console.log(this.answer);
    }

    play(computerInputNumbers, userInputNumbers) {
      return "결과 값 String";
    }
}

new BaseballGame()