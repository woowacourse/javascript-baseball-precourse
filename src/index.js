"use strict";

export default function BaseballGame() {
  let computerInputNumbers = 0;
  const resultContainer = document.getElementById("result");
  const submitButton = document.getElementById("submit");

  const countStrike = function (computerInputNumbers, userInputNumbers) {
    let strikeCnt = 0;
    let strComputerNumbers = String(computerInputNumbers);
    let strUserNumbers = String(userInputNumbers);

    for (let i = 0; i < 3; i++) {
      if (strComputerNumbers[i] === strUserNumbers[i]) {
        strikeCnt++;
      }
    }
    return strikeCnt;
  };

  const countBall = function (computerInputNumbers, userInputNumbers) {
    let ballCnt = 0;
    let strComputerNumbers = String(computerInputNumbers);
    let strUserNumbers = String(userInputNumbers);

    for (let i = 0; i < 3; i++) {
      if (
        strComputerNumbers.indexOf(strUserNumbers[i]) !== -1 &&
        strUserNumbers[i] !== strComputerNumbers[i]
      ) {
        ballCnt++;
      }
    }
    return ballCnt;
  };

  const play = function (computerInputNumbers, userInputNumbers) {
    let resultString = "";
    let strikes = countStrike(computerInputNumbers, userInputNumbers);
    let balls = countBall(computerInputNumbers, userInputNumbers);

    if (computerInputNumbers === userInputNumbers) {
      resultString =
        "<h3>🎉정답을 맞추셨습니다!🎉</h3>" +
        `<br> 게임을 새로 시작하시겠습니까? <button id = "restart-button">게임 재시작</button>`;
    } else {
      if (balls > 0) {
        resultString += `${balls}볼 `;
      }
      if (strikes > 0) {
        resultString += `${strikes}스트라이크`;
      } else if (!balls && !strikes) {
        resultString += "낫싱";
      }
    }

    return resultString;
  };

  const getComputerNumber = function () {
    let computerNumber = "";
    let candidateNumber = 0;

    while (computerNumber.length < 3) {
      candidateNumber = Math.floor(Math.random() * 9 + 1);
      if (computerNumber.indexOf(candidateNumber) !== -1) {
        continue;
      } else {
        computerNumber += candidateNumber;
      }
    }
    computerInputNumbers = parseInt(computerNumber);
    console.log(computerInputNumbers);

    return;
  };

  const startGame = function () {
    resultContainer.innerHTML = "";
    getComputerNumber();
  };

  const showResult = function (userInputNumbers) {
    let resultString = play(computerInputNumbers, userInputNumbers);
    resultContainer.innerHTML = resultString;

    const restartButton = document.getElementById("restart-button");
    if (restartButton) {
      restartButton.addEventListener("click", startGame);
    }
  };

  // 123 ~ 987 사이에 있는 수인지
  const confirmThreeDigits = function (userInput) {
    let set = new Set(userInput);
    if (set.size < 3 || !(userInput >= 123 && userInput <= 987)) {
      alert("세 자리의 중복되지 않는 숫자를 입력해주세요!");
      return false;
    } else {
      return true;
    }
  };

  // 0 포함되어 있지 않은지
  const confirmNoZero = function (userInput) {
    if (userInput.indexOf(0) !== -1) {
      alert("1~9 사이에 있는 수 세 개를 입력해주세요!");
      return false;
    } else {
      return true;
    }
  };

  const validateInput = function (userInput) {
    if (confirmThreeDigits(userInput) && confirmNoZero(userInput)) {
      return true;
    } else {
      return false;
    }
  };

  const getUserInput = function () {
    let userInput = document.getElementById("user-input").value;
    let userInputNumbers = 0;

    if (validateInput(userInput)) {
      userInputNumbers = parseInt(userInput, 10);
      showResult(userInputNumbers);
    }

    return;
  };

  startGame();

  if (submitButton) {
    submitButton.addEventListener("click", getUserInput);
  }
}

new BaseballGame();
