const gameData = {
  computerNumbers: -1,
  isSuccess: false,
};

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return compareNums(computerInputNumbers, userInputNumbers);
  };
}

const findLocation = (target, nums) => {
  const numArray = nums.split("");
  const idx = numArray.findIndex((num) => num === target);
  return idx;
};

const compareNums = (computerNum, inputNum) => {
  let ball = 0;
  let strike = 0;
  for (let i = 0; i <= inputNum.length; i++) {
    let idx = findLocation(inputNum[i], computerNum);
    if (idx === -1) continue;
    else if (idx === i) strike++;
    else ball++;
  }

  if (strike === 3 && ball === 0) gameData.isSuccess = true;
  else if (strike === 0 && ball === 0) return "낫싱";
  else if (strike !== 0 && ball === 0) return `${strike}스트라이크`;
  else if (strike === 0 && ball !== 0) return `${ball}볼`;
  else return `${ball}볼 ${strike}스트라이크`;
};

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
