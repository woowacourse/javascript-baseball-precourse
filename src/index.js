const getComputerNumbers = () => {
  let resultNumbers = [];

  while (resultNumbers.length < 3) {
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    if (!resultNumbers.includes(randomNumber)) {
      resultNumbers.push(randomNumber);
    }
  }

  return resultNumbers.join("");
};

const hasDuplicatedNumbers = (num) => {
  return new Set(num).size !== num.length;
};

const hasZero = (num) => {
  return num.indexOf("0") !== -1;
};

const isNumeric = (num) => {
  return !isNaN(Number(num));
};

const isThreeDigits = (num) => {
  return num.length === 3;
};

const isValidNumbers = (num) => {
  return (
    !hasDuplicatedNumbers(num) &&
    !hasZero(num) &&
    isNumeric(num) &&
    isThreeDigits(num)
  );
};

export default function BaseballGame() {
  const submitButton = document.querySelector("#submit");
  const userInput = document.querySelector("#user-input");
  const computerNumbers = getComputerNumbers();

  const play = (computerInputNumbers, userInputNumbers) => {
    console.log(computerInputNumbers, userInputNumbers);
    return "결과 값 String";
  };

  const gameStart = () => {
    if (isValidNumbers(userInput.value)) {
      play(computerNumbers, userInput.value);
    } else {
      alert("🙅 1~9까지의 수를 중복없이 3개 작성해주세요!");
      userInput.value = "";
    }
  };

  const init = () => {
    submitButton.addEventListener("click", () => gameStart());
    userInput.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        gameStart();
      }
    });
  };

  init();
}

new BaseballGame();
