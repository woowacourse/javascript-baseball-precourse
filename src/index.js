import { $userInput, $submit } from './constants.js';
import { setResult, createResult } from './result.js';
import { checkWarning } from './validation.js';
import { checkAnswer } from './compare.js';
import { createAnswer } from './restart.js';

//Start Game function
export default function BaseballGame() {
  const answer = createAnswer();
  
  //submit button function -> check answers
  $submit.addEventListener("click", (e) => {
    e.preventDefault();

    const userInput = ($userInput.value).split("");
    const warning = checkWarning(userInput);

    if (warning) {
      this.play(answer, userInput);
    }
  });

  //check and make result
  this.play = function (computerInputNumbers, userInputNumbers) {
    const result = checkAnswer(computerInputNumbers, userInputNumbers);

    console.log("답 " , computerInputNumbers);
    console.log("입력 ", userInputNumbers);
    console.log("판단 ", result);

    return result;
  };
}


new BaseballGame();