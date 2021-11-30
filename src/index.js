import { $userInput, $submit } from './constants.js';
import { setResult, createResult } from './result.js';
import { checkWarning } from './validation.js';
import { checkAnswer } from './compare.js';

//Radom Number Setting
export function createAnswer() {
  const answer = [];
  
  while(answer.length !== 3) {
    const random = MissionUtils.Random.pickNumberInRange(1, 9);

    if(!answer.includes(String(random))) {
      answer.push(String(random));
    }
  }
  
  return answer;
}

//Start Game function
export default function BaseballGame() {
  const answer = createAnswer();
  
  //submit button function
  $submit.addEventListener("click", (e) => {
    e.preventDefault();

    const userInput = ($userInput.value).split("");
    const warning = checkWarning(userInput);

    if (warning) {
      const resultArr = this.play(answer, userInput);
      setResult(resultArr);
    }
  });

  //check and make result
  this.play = function (computerInputNumbers, userInputNumbers) {
    const result = checkAnswer(computerInputNumbers, userInputNumbers);
    
    console.log("답 ", answer);
    console.log("입력 ", userInputNumbers);

    return result;
  };
}

new BaseballGame();