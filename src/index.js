export default function BaseballGame() {
  const play = function (computerInputNumbers, userInputNumbers) {
    let resultString = "";

    const computerNumberArray = parseNumber(computerInputNumbers);
    const userNumberArray = parseNumber(userInputNumbers);

    let strikeCount = 0;
    let ballCount = 0;

    for (let i = 0; i < 3; i++) {
      if (computerNumberArray[i] === userNumberArray[i]) strikeCount++;
      else if (computerNumberArray.indexOf(userNumberArray[i]) !== -1)
        ballCount++;
    }

    if (ballCount > 0) {
      resultString += `${ballCount}볼`;
    }

    if (strikeCount > 0) {
      resultString +=
        ballCount > 0
          ? ` ${strikeCount}스트라이크`
          : `${strikeCount}스트라이크`;
    }

    if (ballCount === 0 && strikeCount === 0) {
      resultString += "낫싱";
    }

    if (strikeCount === 3) {
      resultString =
        "정답을 맞추셨습니다!" +
        '<br/>게임을 새로 시작하시겠습니까? <button id="game-restart-button">게임 재시작</button>';
    }

    // console.log({ ballCount, strikeCount })
    return resultString;
  };

  const handleClick = function () {
    const value = document.getElementById("user-input").value;
    const userInputNumbers = parseInt(value, 10);

    if (
      typeof userInputNumbers !== "number" ||
      !checkInput(userInputNumbers) ||
      userInputNumbers.toString() !== value
    ) {
      alert("Wrong type of input!");
      return;
    }

    const resultString = play(computerInputNumbers, userInputNumbers);
    resultElement.innerHTML = resultString;
    if (computerInputNumbers === userInputNumbers) {
      const restartButton = document.getElementById("game-restart-button");
      restartButton.addEventListener("click", handleRestart);
    }
  };

  const handleRestart = function () {
    document.getElementById("user-input").value = "";
    computerInputNumbers = computingNumber();
    resultElement.innerHTML = "";
  };

  let computerInputNumbers = computingNumber();
  const resultElement = document.getElementById("result");
  const submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", handleClick);
}

const getRandomNumber = function () {
  return Math.floor(Math.random() * Math.floor(9)) + 1;
};

const computingNumber = function () {
  const numberArray = [];
  let number = 0;
  let counter = 0;

  while (counter < 3) {
    const randomNumber = getRandomNumber();
    if (numberArray.indexOf(randomNumber) !== -1) {
      continue;
    } else {
      numberArray.push(randomNumber);
      number += Math.pow(10, counter) * randomNumber;
      counter++;
    }
  }

  return number;
};

const parseNumber = function (number) {
  const numberArray = [];
  for (let i = 0; i < 3; i++) {
    const partNumber = Math.floor(number / Math.pow(10, i)) % 10;
    if (numberArray.indexOf(partNumber) === -1) numberArray.push(partNumber);
  }

  return numberArray;
};

const checkInput = function (number) {
  if (number < 123 || number > 987) return false;

  const numberArray = parseNumber(number);
  if (numberArray.length === 3 && numberArray.indexOf(0) === -1) {
    return true;
  }

  return false;
};

new BaseballGame();
