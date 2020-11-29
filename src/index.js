export default class BaseballGame {
  constructor() {
    this.answerNumbers = this.makeAnswerNumbers();
    this.userInputNumbers = [];

    this.bindEventListener();
  }

  makeAnswerNumbers = () => {
    const numberSet = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = [];

    for (let i = 0; i < 3; i++) {
      const randomNumberIndex = Math.floor(Math.random() * numberSet.length);

      result.push(numberSet[randomNumberIndex]);
      numberSet.splice(randomNumberIndex, 1);
    }

    return result;
  };

  checkUserInput = (userInput) => {
    if (userInput.length === 0) {
      alert("1~9까지의 수를 중복없이 3개 작성해주세요");
    }
  };

  bindEventListener = () => {
    document
      .querySelector("#submit")
      .addEventListener("click", (e) => this.checkUserInput(document.querySelector("#user-input").value));
  };

  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }
}

new BaseballGame();
