const userInput = document.getElementById("user-input");
const submitButton = document.getElementById("submit");

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    if (isExist(userInputNumbers, numbers)) return "결과 값 String";
  };
}

// Math.floor(Math.random() * 9 + 1);

const isExist = (aNumber, numbers) => {
  let result = false;
  for (let i = 0; i < numbers.length; i++) {
    if (aNumber === numbers[i]) {
      result = true;
    }
  }
  return result;
};

const done = false;
const CurrentBaseballGame = new BaseballGame();

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
  CurrentBaseballGame.play(getComputerInput(), userInput.value);
};

new BaseballGame();
