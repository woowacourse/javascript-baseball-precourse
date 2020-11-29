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

const compareNumbers = (computerNumbers, userNumbers) => {
  let ball = 0;
  let strike = 0;
  let correct = false;

  if (computerNumbers === userNumbers) {
    correct = true;
  }
  for (let i = 0; i < userNumbers.length; i++) {
    if (!computerNumbers.includes(userNumbers[i])) {
      continue;
    }
    computerNumbers.indexOf(userNumbers[i]) === i ? (strike += 1) : (ball += 1);
  }

  return [ball, strike, correct];
};

const getResultMessage = (ball, strike, correct) => {
  let resultMessage = "";

  if (correct) {
    resultMessage = `<p>🎉<strong> 정답을 맞추셨습니다! </strong>🎉</p>`;
  } else {
    if (!ball && !strike) {
      resultMessage = "낫싱";
    } else if (ball && strike) {
      resultMessage = `${ball}볼 ${strike}스트라이크`;
    } else if (!ball && strike) {
      resultMessage = `${strike}스트라이크`;
    } else if (ball & !strike) {
      resultMessage = `${ball}볼`;
    }
  }

  return resultMessage;
};

export default function BaseballGame() {
  const submitButton = document.querySelector("#submit");
  const userInput = document.querySelector("#user-input");
  const resultContainer = document.querySelector("#result");
  const computerNumbers = getComputerNumbers();
  let correctState = false;

  const play = (computerInputNumbers, userInputNumbers) => {
    const [ball, strike, correct] = compareNumbers(
      computerInputNumbers,
      userInputNumbers,
    );
    correctState = correct;

    return getResultMessage(ball, strike, correct);
  };

  const resultProvider = (message) => {
    if (!correctState) {
      resultContainer.textContent = message;
    } else {
      resultContainer.innerHTML = message;
    }
  };

  const gameStart = () => {
    if (isValidNumbers(userInput.value)) {
      const resultMessage = play(computerNumbers, userInput.value);
      resultProvider(resultMessage);
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
