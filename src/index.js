export default class BaseballGame {
  constructor() {
    this.answer = this.makeRandomNumbers();
    this.userInput = document.getElementById("user-input");
    this.result = document.getElementById("result");

    document
      .getElementById("submit")
      .addEventListener("click", this.userClickBtn);

    this.gameInitializing();
  }

  play(computerInputNumbers, userInputNumbers) {}

  makeRandomNumbers() {
    let randomNumbers = new Set();

    while (randomNumbers.size < 3) {
      randomNumbers.add(window.MissionUtils.Random.pickNumberInRange(1, 9));
    }

    return Array.from(randomNumbers);
  }

  gameInitializing() {
    this.result.innerText = "";
    document.getElementById("user-input").value = "";
  }

  userClickBtn = () => {
    if (!this.isCorrectInput(this.userInput.value)) {
      alert("입력 형식이 틀렸어요. 다시 확인해주세요");
      return;
    }

    this.play(this.answer, this.userInput.value);
  };

  isCorrectInput(inputString) {
    let inputNumbers = new Set();
    inputNumbers.add(Number(inputString.charAt(0)));
    inputNumbers.add(Number(inputString.charAt(1)));
    inputNumbers.add(Number(inputString.charAt(2)));

    if (
      inputString.length !== 3 ||
      isNaN(Number(inputString)) ||
      inputNumbers.has(0)
    ) {
      return false;
    }

    return true;
  }
}

new BaseballGame();
