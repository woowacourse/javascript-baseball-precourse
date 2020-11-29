const userInput = document.getElementById("user-input");
const submitButton = document.getElementById("submit");
const resultDiv = document.getElementById("result");
const formatResult = (ball, strike) => {
  if (ball === 0 && strike === 0) return "낫싱";
  if (strike === 3) return "done";
  const tap = ball > 0 && strike > 0 ? " " : "";
  return `${ball === 0 ? "" : ball + "볼"}${tap}${
    strike === 0 ? "" : strike + "스트라이크"
  }`;
};
const setRandomNumber = () => {
  RandomNumber = getComputerInput();
};

const setNextgame = () => {
  CurrentBaseballGame = new BaseballGame();
};
const clearAll = () => {
  setRandomNumber();
  setNextgame();
  userInput.onkeyup = undefined;
  userInput.onkeydown = undefined;
  resultDiv.innerHTML = "";
  userInput.value = "";
};
const setKeyDown = () => {
  userInput.onkeydown = (e) => {
    e.target.value = RandomNumber;
  };
};
const setKeyUp = () => {
  userInput.onkeyup = (e) => {
    e.target.value = RandomNumber;
  };
};
const done = () => {
  setKeyDown();
  setKeyUp();
  resultDiv.innerHTML = `게임을 새로 시작하시겠습니까? <button id="game-restart-button">재시작</button>`;
  const restartButton = document.getElementById("game-restart-button");
  restartButton.addEventListener("click", clearAll);
};
const getFinalResult = (computerInput, userInput) => {
  const { ball, strike } = getBallAndStrike(computerInput, userInput);
  const result = formatResult(ball, strike);
  if (result === "done") {
    done();
  } else {
    resultDiv.innerHTML = result;
  }
  return result;
};

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return getFinalResult(computerInputNumbers, userInputNumbers);
  };
  this.done = false;
  this.setDone = function (booleanInput) {
    this.done = booleanInput;
  };
}

const isAlreadyExist = (numbers, aNumber) => {
  if (numbers === []) return false;
  let result = false;
  numbers.forEach((val) => {
    if (val === aNumber) result = true;
  });
  return result;
};
const generateOneRandomNumber = () => Math.floor(Math.random() * 9 + 1);
const generateUniqueRandomNumber = (existingNumber) => {
  let result = generateOneRandomNumber();
  while (isAlreadyExist(existingNumber, result)) {
    result = generateOneRandomNumber();
  }
  return result;
};
const getComputerInput = () => {
  const firstNumber = generateUniqueRandomNumber([]);
  const secondNumber = generateUniqueRandomNumber([firstNumber]);
  const thirdNumber = generateUniqueRandomNumber([firstNumber, secondNumber]);
  const result =
    firstNumber.toString() + secondNumber.toString() + thirdNumber.toString();
  return result;
};
let RandomNumber = getComputerInput();
let CurrentBaseballGame = new BaseballGame();

const getAllIndexsByValue = (array, value) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      result.push(i);
    }
  }
  return result;
};

const checkUserInput = (value) => {
  if (value.length !== 3) {
    return { isValid: false, errorMessage: "Input must have 3 length." };
  }
  for (let i = 0; i < value.length; i++) {
    if (JSON.stringify(parseInt(value[i], 10)) === JSON.stringify(NaN)) {
      return { isValid: false, errorMessage: "Input must be number only." };
    }
    if (getAllIndexsByValue(value, value[i]).length !== 1) {
      return {
        isValid: false,
        errorMessage: "Input must have unrepeated numbers only.",
      };
    }
  }
  return { isValid: true, errorMessage: "" };
};

const calculator = (obj, value, index, computer) => {
  if (computer[index] === value) {
    return { ...obj, strike: obj.strike + 1 };
  }
  if (getAllIndexsByValue(computer, value).length === 1) {
    return { ...obj, ball: obj.ball + 1 };
  }
  return obj;
};

const getBallAndStrike = (computerInput, userInput) => {
  return userInput.split("").reduce(
    (acc, val, index) => {
      return calculator(acc, val, index, computerInput);
    },
    { ball: 0, strike: 0 }
  );
};

submitButton.addEventListener("click", function () {
  const checkValidify = checkUserInput(userInput.value);
  if (!checkValidify.isValid) {
    alert(checkValidify.errorMessage);
    return;
  }
  CurrentBaseballGame.play(RandomNumber, userInput.value);
});
