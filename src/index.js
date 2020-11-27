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

const clearAll = () => {
  setRandomNumber();
  setNextgame();
  userInput.onkeyup = undefined;
  userInput.onkeydown = undefined;
  resultDiv.innerHTML = "";
  userInput.value = "";
};
const done = () => {
  userInput.onkeydown = (e) => {
    e.target.value = RandomNumber;
  };
  userInput.onkeyup = (e) => {
    e.target.value = RandomNumber;
  };

  resultDiv.innerHTML = `게임을 새로 시작하시겠습니까? <button id="game-restart-button">재시작</button>`;

  const restartButton = document.getElementById("game-restart-button");
  restartButton.onclick = () => {
    clearAll();
  };
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

// 여기부터는 computer input 만드는 내용

// 여기부터는 user input 유효성 검사

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

// 여기부터는 random value, user input 비교해서 최종 결과값 반환하는 내용

const getBallAndStrike = (computerInput, userInput) => {
  return userInput.split("").reduce(
    (acc, val, index) => {
      if (computerInput[index] === val) {
        acc.strike += 1;
      } else if (getAllIndexsByValue(computerInput, val).length === 1) {
        acc.ball += 1;
      }
      return acc;
    },
    { ball: 0, strike: 0 }
  );
};

const setRandomNumber = () => {
  RandomNumber = getComputerInput();
};

const setNextgame = () => {
  CurrentBaseballGame = new BaseballGame();
};

// <button id="game-restart-button"></button>
// 여기부터는 html에 대한 내용(인가, 암튼 아직 진행중임)

submitButton.onclick = () => {
  const checkValidify = checkUserInput(userInput.value);
  if (!checkValidify.isValid) {
    alert(checkValidify.errorMessage);
    return;
  }
  CurrentBaseballGame.play(RandomNumber, userInput.value);
  // CurrentBaseballGame.setDone(true);
};
