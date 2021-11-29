import { createAnswer, setButton, clearButton} from './restart.js';
import { TEXT, $userInput, $result, $submit } from './constants.js';
import { checkInput } from './validation.js';

//Start Game function
export default function BaseballGame() {
  const answer = createAnswer();
  
  //submit button function -> check answers
  $submit.addEventListener("click", (e) => {
    e.preventDefault();

    const userInput = ($userInput.value).split("");
    const checkResult = checkInput(userInput);

  });

  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };
}


function createResult() {
  
}

function setResult() {

}

new BaseballGame();