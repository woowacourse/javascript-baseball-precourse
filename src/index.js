import { INPUT_RULES } from './constants.js';

const $ = (selector) => document.querySelector(selector);

function generateRandomNumbers() {
  return MissionUtils.Random.pickUniqueNumbersInRange(
    INPUT_RULES.MIN_OF_RANGE,
    INPUT_RULES.MAX_OF_RANGE,
    INPUT_RULES.NUMBER_OF_DIGITS
  );
}

function handleSubmit(e) {
  e.preventDefault();
  const $userInput = $('#user-input');

  const currentUserInput = $userInput.value;
  console.log(currentUserInput);

  $userInput.value = '';
}

const $submitBtn = $('#submit');
$submitBtn.addEventListener('click', handleSubmit);

export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = generateRandomNumbers();
  }
}
