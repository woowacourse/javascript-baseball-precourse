export default function BaseballGame() {
  this.setTargetNumber = function () {
    const targetNumber = [];

    while (targetNumber.length < 3) {
      let randomNumber = Math.floor(Math.random() * 9) + 1;

      if (targetNumber.indexOf(randomNumber) == -1) {
        targetNumber.push(randomNumber);
      }
    }

    return targetNumber;
  };

  this.isZero = function (userInput) {
    const inputNumber = userInput.split('');

    if (inputNumber.indexOf('0') !== -1) {
      return true;
    }
  };

  this.isDuplication = function (userInput) {
    const inputNumber = userInput.split('');
    let checkNumber = [];

    for (let i = 0; i < inputNumber.length; i++) {
      if (checkNumber.indexOf(inputNumber[i]) == -1) {
        checkNumber.push(inputNumber[i]);
      }
    }

    if (checkNumber.length !== 3) {
      return true;
    }
  };

  this.getInputNumber = function () {
    const userInput = document.getElementById("user-input").value;

    if (isNaN(userInput)) {
      alert("숫자를 입력해 주세요.");
      document.getElementById("user-input").value = '';
    } else if (userInput.length !== 3 || this.isZero(userInput) || this.isDuplication(userInput)) {
      alert("1~9까지의 수를 중복없이 3개를 작성해주세요.");
    } else {
      const inputNumber = userInput.split('').map(x => Number(x));

      return inputNumber;
    }
  };

  this.formatArray = function (computerInputNumbers, userInputNumbers) {
    if ((typeof computerInputNumbers) !== 'object') {
      computerInputNumbers = String(computerInputNumbers).split('');
    }

    if ((typeof userInputNumbers) !== 'object') {
      userInputNumbers = String(userInputNumbers).split('');
    }

    return [computerInputNumbers, userInputNumbers];
  };

  this.compareNumbers = function (computerInputNumbers, userInputNumbers) {
    let ball = 0;
    let strike = 0;

    for (let i = 0; i < 3; i++) {
      const pitching = computerInputNumbers.indexOf(userInputNumbers[i]);

      if (pitching == i) {
        strike += 1;
      } else if (pitching !== -1) {
        ball += 1;
      }
    }

    return [ball, strike];
  };

  this.printResult = function (ball, strike) {
    if (ball == 0 && strike == 0) {
      return "낫싱";
    }

    if (strike == 3) {
      document.getElementById("restart").hidden = false;
      return "🎉정답을 맞추셨습니다!🎉";
    }

    let result = '';

    if (ball !== 0) {
      result += `${ball}볼 `;
    }

    if (strike !== 0) {
      result += `${strike}스트라이크`;
    }

    return result;
  };

  this.play = function (computerInputNumbers, userInputNumbers) {
    [computerInputNumbers, userInputNumbers] = this.formatArray(computerInputNumbers, userInputNumbers);

    const [ball, strike] = this.compareNumbers(computerInputNumbers, userInputNumbers);
    const result = this.printResult(ball,strike);

    return result;
  };

  this.start = function () {
    const userInputNumbers = this.getInputNumber()

    if (userInputNumbers) {
      const result = this.play(computerInputNumbers, userInputNumbers);

      document.getElementById("result").innerText = result;

      console.log(computerInputNumbers, userInputNumbers);
    }
  };

  const computerInputNumbers = this.setTargetNumber();
  const submitBtn = document.getElementById("submit");
  const submitEnter = document.getElementById("user-input");

  submitBtn.addEventListener("click", () => {
    this.start();
  });

  submitEnter.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
      this.start();
    }
  });
}

new BaseballGame();
