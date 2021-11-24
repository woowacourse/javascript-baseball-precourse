export default class BaseballGame {
  constructor() {
    this.setEvent();
  }
  play = (computerInputNumbers, userInputNumbers) => {
    return "";
  };

  setEvent = () => {
    const $userInputForm = document.querySelector("form");
    $userInputForm.addEventListener("submit", this.onSubmitHandler);
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    const $userInput = document.querySelector("#user-input");
    const value = $userInput.value;
  };

  isThreeDigit = (num) => {
    return num.length === 3;
  };

  isWithZero = (num) => {
    return num.match(/0/);
  };

  isValidNumber = (num) => {
    return num.match(/\D/);
  };

  isDuplicatedNumber = (num) => {
    const checkDuplicateNumberSet = new Set(num);
    return checkDuplicateNumberSet.size !== 3;
  };
}

const game = new BaseballGame();
