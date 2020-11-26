export default function BaseballGame() {
  const userInput = document.querySelector("#user-input");
  const submitButton = document.querySelector("#submit");

  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };

  this.createRandomNumbers = function () {
    const DIGITS = 3;
    let result = 0;

    for (let i = 0; i < DIGITS; i++) {
      let number = Math.floor(Math.random() * 10);

      if (number === 0) {
        result = this.createRandomNumbers();
        return result;
      }
      result = result * 10 + number;
    }
    return result;
  };
}

new BaseballGame();
