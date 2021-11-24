export default class BaseballGame {
  constructor() {
    this.answerNumber = this.generateAnswerNumber();
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
    console.log(this.answerNumber);
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

  generateAnswerNumber = () => {
    let randomNumber = MissionUtils.Random.pickNumberInRange(
      111,
      999
    ).toString();

    if (
      this.isDuplicatedNumber(randomNumber) ||
      this.isWithZero(randomNumber)
    ) {
      return this.generateAnswerNumber();
    }

    return randomNumber;
  };
}

const game = new BaseballGame();
