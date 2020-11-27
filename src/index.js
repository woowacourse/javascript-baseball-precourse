"use strict";

export default function BaseballGame() {
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

    return computerNumber;
  };

  console.log(getComputerNumber());
}

new BaseballGame();
