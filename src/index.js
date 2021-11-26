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

  const setUserInput = () => {
    this.userInput = getUserInput();
  };
  const getUserInput = () => $userInput.value;

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
