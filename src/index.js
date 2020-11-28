"use strict";

export default function BaseballGame() {
  let computerInputNumbers = 0;

  const play = function (computerInputNumbers, userInputNumbers) {
    let resultString = "";
    console.log(computerInputNumbers, userInputNumbers);

    if (computerInputNumbers === userInputNumbers) {
      resultString =
        "<h3>🎉정답을 맞추셨습니다!🎉</h3>" +
        `<br> 게임을 새로 시작하시겠습니까? <button id = "restart-button">게임 재시작</button>`;
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
    return;
  };

  const startGame = function (userInputNumbers) {
    let resultString = play(computerInputNumbers, userInputNumbers);
    showResult(resultString);
  };

  const showResult = function (resultString) {
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = resultString;
  };

  // 123 ~ 987 사이에 있는 수인지
  const confirmThreeDigits = function (userInput) {
    let set = new Set(userInput);
    console.log(set);
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
    if (!(confirmThreeDigits(userInput) && confirmNoZero(userInput))) {
      return false;
    } else {
      return true;
    }
  };

  const getUserInput = function () {
    let userInput = document.getElementById("user-input").value;
    let userInputNumbers = 0;

    if (validateInput(userInput)) {
      userInputNumbers = parseInt(userInput);
      startGame(userInputNumbers);
    }

    return;
  };

  getComputerNumber();
  const submitButton = document.getElementById("submit");
  if (submitButton) {
    submitButton.addEventListener("click", getUserInput);
  }

  console.log(computerInputNumbers);
}

new BaseballGame();
