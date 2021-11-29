import { createAnswer, setButton, clearButton} from './restart.js';
import { TEXT, $userInput, $result, $submit } from './constants.js';

export default function BaseballGame() {
  createAnswer();

  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };
}

function createResult() {
  
}

function setResult() {

}

new BaseballGame();