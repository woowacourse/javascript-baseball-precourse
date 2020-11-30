const gameData = {
  computerNumbers: -1,
  isSuccess: false,
};

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };
}

const updateResult = (result) => {};

const validateInput = (input) => {
  const inputArray = input.split("");
  if (input.length !== 3 || input.includes("0") || isNaN(parseInt(input)))
    return false;
  if (new Set(inputArray).size !== inputArray.length) return false;
  return true;
};

const getUserInput = () => {
  let userInput = document.getElementById("user-input").value;
  if (!validateInput(userInput)) {
    alert("세 자리의 중복 없는 숫자를 다시 입력해주세요.");
    document.getElementById("user-input").value = "";
  } else {
    let result = new BaseballGame().play(gameData.computerNumbers, userInput);
    updateResult(result);
  }
};

const makeComputerInput = () => {
  const nums = [];
  let digit = Math.floor(Math.random() * 10);
  for (let i = 0; i < 3; i++) {
    while (nums.includes(digit)) digit = Math.floor(Math.random() * 10);
    nums.push(digit);
  }
  return nums.join("");
};

const init = () => {
  gameData.isSuccess = false;
  gameData.computerNumbers = makeComputerInput();
  document.getElementById("submit").addEventListener("click", getUserInput);
};

document.addEventListener("DOMContentLoaded", function () {
  init();
});
