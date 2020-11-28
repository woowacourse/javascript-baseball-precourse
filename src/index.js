"use strict";

export default function BaseballGame() {
  let computerInputNumbers = 0;

  const play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
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

  const startGame = function () {
    getComputerNumber();
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
      play(computerInputNumbers, userInputNumbers);
    }

    return;
  };

  startGame();
  const submitButton = document.getElementById("submit");
  if (submitButton) {
    submitButton.addEventListener("click", getUserInput);
  }

  console.log(computerInputNumbers);
}

new BaseballGame();
