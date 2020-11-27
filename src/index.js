export default function BaseballGame() {
  this.computerInputNumbers;
  this.isGameOver = false;
  this.MAX_DIGITS = 3;

  this.getRandomNumber = () => {
    const MIN_NUMBER = 1;
    const MAX_NUMBER = 9;

    return Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER;
  };

  this.setComputerInputNumbers = () => {
    const randomNumbers = [];

    while (randomNumbers.length < this.MAX_DIGITS) {
      const randomNumber = this.getRandomNumber();
      const isExistNumber = randomNumbers.includes(randomNumber) ? true : false;

      if (isExistNumber) {
        continue;
      }
      randomNumbers.push(randomNumber);
    }

    this.computerInputNumbers = randomNumbers.join("");
  };

  this.resetGame = () => {
    const resultContainer = document.querySelector("#result");
    resultContainer.innerHTML = "";

    this.setComputerInputNumbers();
    this.isGameOver = false;
  };

  this.getGameResult = (computerInputNumbers, userInputNumbers) => {
    const gameResult = {
      ball: 0,
      strike: 0,
    };

    for (let i = 0; i < this.MAX_DIGITS; i++) {
      const computerInputNumber = +computerInputNumbers[i];
      const userInputNumber = +userInputNumbers[i];

      if (computerInputNumber === userInputNumber) {
        gameResult.strike++;
        continue;
      }

      const computerInputNumbersArray = computerInputNumbers.split("");
      if (computerInputNumbersArray.includes(`${userInputNumber}`)) {
        gameResult.ball++;
      }
    }

    return gameResult;
  };

  this.printGameResult = (message) => {
    const resultContainer = document.querySelector("#result");
    resultContainer.innerHTML = message;

    if (this.isGameOver) {
      const restartQuestion = document.createElement("p");
      const restartButton = document.createElement("button");

      restartQuestion.innerText = "게임을 새로 시작하시겠습니까?";
      restartButton.innerText = "게임 재시작";
      restartButton.addEventListener("click", this.resetGame);

      restartQuestion.appendChild(restartButton);
      resultContainer.appendChild(restartQuestion);
    }
  };

  this.play = (computerInputNumbers, userInputNumbers) => {
    const gameResult = this.getGameResult(
      computerInputNumbers,
      userInputNumbers
    );
    const ball = gameResult.ball;
    const strike = gameResult.strike;
    let message = "";

    if (ball === 0 && strike === 0) {
      message = "낫싱";
    } else if (strike === this.MAX_DIGITS) {
      message = "<h4>🎉정답을 맞추셨습니다!🎉</h4>";
      this.isGameOver = true;
    } else {
      message += ball ? `${ball}볼 ` : "";
      message += strike ? `${strike}스트라이크` : "";
    }

    return message;
  };

  this.checkValidInputValue = (value) => {
    const isNumber = isNaN(+value) ? false : true;
    const isThreeDigits = value.length === 3 ? true : false;

    if (!isNumber || !isThreeDigits) {
      return false;
    }

    const inputNumbers = value.split("");
    const hasZero = inputNumbers.includes("0");
    const uniqueNumberSet = [...new Set(value)];
    const isDifferentNumbers =
      uniqueNumberSet.length === this.MAX_DIGITS ? true : false;

    if (hasZero || !isDifferentNumbers) {
      return false;
    }

    return true;
  };

  this.checkGameResult = () => {
    const userInput = document.querySelector("#user-input");
    const userInputNumbers = userInput.value;
    const isValidInputValue = this.checkValidInputValue(userInputNumbers);

    userInput.value = "";

    if (isValidInputValue) {
      const resultMessage = this.play(
        this.computerInputNumbers,
        userInputNumbers
      );
      this.printGameResult(resultMessage);
    } else {
      alert("1 ~ 9 사이의 서로 다른 세 자릿수를 입력해주세요.");
    }
  };

  this.resetGame();

  const submitButton = document.querySelector("#submit");
  submitButton.addEventListener("click", this.checkGameResult);
}

new BaseballGame();
