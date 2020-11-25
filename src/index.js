const userInput = document.getElementById("user-input");
const submitButton = document.getElementById("submit");

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    console.log(computerInputNumbers, userInputNumbers);
    // if (isExist(userInputNumbers, numbers)) return "결과 값 String";
  };
  this.done = false;
}

// Math.floor(Math.random() * 9 + 1);

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
  return { isValid: true, errorMessage: "Perfect" };
};

const isAlreadyExist = (numbers, aNumber) => {
  if (numbers === []) return false;
  let result = false;

  numbers.forEach((val) => {
    if (val === aNumber) result = true;
  });
  return result;
};
const generateRandomNumber = (existingNumber) => {
  let result = Math.floor(Math.random() * 9 + 1);
  while (isAlreadyExist(existingNumber, result)) {
    result = Math.floor(Math.random() * 9 + 1);
  }
  return result;
};
const getComputerInput = () => {
  const firstNumber = generateRandomNumber([]);
  const secondNumber = generateRandomNumber([firstNumber]);
  const thirdNumber = generateRandomNumber([firstNumber, secondNumber]);
  const result = [firstNumber, secondNumber, thirdNumber];

  return result.join("");
};
submitButton.onclick = () => {
  const resultOfCheck = checkUserInput(userInput.value);
  if (!resultOfCheck.isValid) {
    alert(resultOfCheck.errorMessage);
    return;
  }
  CurrentBaseballGame.play(getComputerInput(), userInput.value);
};
