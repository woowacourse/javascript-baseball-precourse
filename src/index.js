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
    console.log($userInput.value);
  };
}

const game = new BaseballGame();
