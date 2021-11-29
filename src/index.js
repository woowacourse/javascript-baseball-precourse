import { createAnswer } from './restart.js';
import { TEXT, $userInput, $submit } from './constants.js';
import { checkWarning } from './validation.js';
import { checkAnswer } from './compare.js';

//Start Game function
export default function BaseballGame() {
  const answer = createAnswer();
  
  //submit button function -> check answers
  $submit.addEventListener("click", (e) => {
    e.preventDefault();

    const userInput = ($userInput.value).split("");
    const warning = checkWarning(userInput);

    if(warning) {
      this.play(answer, userInput);
    }
  });

  //check and make result
  this.play = function (computerInputNumbers, userInputNumbers) {
    const result = checkAnswer(computerInputNumbers, userInputNumbers);

    console.log(result);

    return "결과 값 String";
  };
}


new BaseballGame();