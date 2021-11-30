import {$userInput, $submit, $result} from './constants.js';
import {checkWarning} from './validation.js';
import {checkAnswer} from './compare.js';
import {setResult} from './result.js';

// Radom Number Setting
export function createAnswer() {
  const answer = [];

  while (answer.length !== 3) {
    // eslint-disable-next-line no-undef
    const random = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!answer.includes(String(random))) {
      answer.push(String(random));
    }
  }

  return answer;
}

// Start Game function
export default function BaseballGame() {
  const answer = createAnswer();

  $userInput.value = '';
  $result.innerHTML = '';

  // submit button function
  $submit.addEventListener('click', e => {
    e.preventDefault();

    const userInput = ($userInput.value).split('');
    const warning = checkWarning(userInput);

    if (warning) {
      const resultArr = this.play(answer, userInput);
      setResult(resultArr);
    }
  });

  // check and make result
  this.play = function(computerInputNumbers, userInputNumbers) {
    const result = checkAnswer(computerInputNumbers, userInputNumbers);

    return result;
  };
}

// eslint-disable-next-line no-new
new BaseballGame();
