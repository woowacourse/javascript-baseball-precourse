import { INPUT_RULES, ERROR_MESSAGE } from './constants.js';

const $ = (selector) => document.querySelector(selector);

function generateRandomNumbers() {
  return MissionUtils.Random.pickUniqueNumbersInRange(
    INPUT_RULES.MIN_OF_RANGE,
    INPUT_RULES.MAX_OF_RANGE,
    INPUT_RULES.NUMBER_OF_DIGITS
  );
}

function isValid(input) {
  const regex = /[^1-9]/g;
  const notValidChars = input.match(regex);
  const setString = new Set(input);

  if (input === '') {
    return false;
  }
  if (notValidChars) {
    return false;
  }
  if (input.length !== INPUT_RULES.NUMBER_OF_DIGITS) {
    return false;
  }
  if (setString.size !== input.length) {
    return false;
  }
  return true;
}

function handleSubmit(e) {
  e.preventDefault();
  const $userInput = $('#user-input');

  const currentUserInput = $userInput.value;
  if (!isValid(currentUserInput)) {
    alert(ERROR_MESSAGE);
  }

  $userInput.value = '';
}

const $submitBtn = $('#submit');
$submitBtn.addEventListener('click', handleSubmit);

export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = generateRandomNumbers();
  }
}
