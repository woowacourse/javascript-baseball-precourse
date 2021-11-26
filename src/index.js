const VALID_NUMBER_LENGTH = 3;
const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 9;

const $ = (selector) => document.querySelector(selector);
const $userInput = $('#user-input');
const $submit = $('#submit');
const $form = $('form');

function BaseballGame() {
  this.randomNumber;
  this.userInput;

  this.init = () => {
    setRandomNumber();
  };

  const setUserInput = () => {
    const input = getUserInput();
    if (!isValidInput(input)) {
      $userInput.value = '';
      alert('서로 다른 3자리 수를 입력해 주세요.');
      return;
    }
    this.userInput = input;
  };

  const getUserInput = () => $userInput.value;

  const isValidInput = (input) => {
    if (!isThreeDigitInteger(input)) {
      return false;
    }
    if (input.includes(0)) {
      return false;
    }
    if (isDuplicated(input)) {
      return false;
    }

    return true;
  };
  const isThreeDigitInteger = (input) => {
    if (input.length !== VALID_NUMBER_LENGTH) {
      return false;
    }
    if (isNaN(input)) {
      return false;
    }
    if (parseFloat(input) !== parseInt(input)) {
      return false;
    }
    if (parseInt(input) < 0) {
      return false;
    }

    return true;
  };
  const isDuplicated = (input) => input.length !== new Set(input).size;

  const setRandomNumber = () => {
    this.randomNumber = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  };
  const getRandomNumber = (MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER) => {
    const randomNumberArray = [];
    while (randomNumberArray.length < VALID_NUMBER_LENGTH) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(
        MIN_RANDOM_NUMBER,
        MAX_RANDOM_NUMBER,
      );
      if (!randomNumberArray.includes(randomNumber)) {
        randomNumberArray.push(randomNumber);
      }
    }

    return randomNumberArray.join('');
  };
  $form.addEventListener('submit', (e) => e.preventDefault());
  $submit.addEventListener('click', setUserInput);
}
const game = new BaseballGame();
game.init();
