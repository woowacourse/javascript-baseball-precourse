export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    console.log(computerInputNumbers, userInputNumbers);
    // if (isExist(userInputNumbers, numbers)) return "결과 값 String";
  };
  this.done = false;
  this.setDone = function (booleanInput) {
    this.done = booleanInput;
  };
}
let RandomNumber = getComputerInput();
let CurrentBaseballGame = new BaseballGame();
let userInput = document.getElementById("user-input");
let submitButton = document.getElementById("submit");

// 여기부터는 computer input 만드는 내용
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
  return userInput.reduce(
    (acc, val, index) => {
      if (computerInput[index] === val) {
        acc.strike += 1;
      } else if (getAllIndexsByValue(val, computerInput).length === 1) {
        acc.ball += 1;
      }
      return acc;
    },
    { ball: 0, strike: 0 }
  );
};

const getFinalResult = (computerInput, userInput) => {
  const { ball, strike } = getBallAndStrike(computerInput, userInput);
};

const checkInputs = (computerInput, userInput) => {
  for (let i = 0; i < userInput.length; i++) {}
};

// <button id="game-restart-button"></button>
// 여기부터는 html에 대한 내용(인가, 암튼 아직 진행중임)

const setRandomNumber = () => {
  RandomNumber = getComputerInput();
};

submitButton.onclick = () => {
  const resultOfCheck = checkUserInput(userInput.value);
  if (!resultOfCheck.isValid) {
    alert(resultOfCheck.errorMessage);
    return;
  }
  CurrentBaseballGame.play(RandomNumber, userInput.value);
  // CurrentBaseballGame.setDone(true);
};
