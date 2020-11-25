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

const userInput = document.getElementById("user-input");
const submitButton = document.getElementById("submit");
submitButton.onclick = () => {
  console.log(userInput.value);
};

new BaseballGame();
