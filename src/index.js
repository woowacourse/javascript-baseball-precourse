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

const hasDuplicatedNumbers = num => new Set(num).size !== num.length;

const hasZero = num => num.indexOf("0") !== -1;

const isNumeric = num => !isNaN(Number(num));

const isThreeDigits = num => num.length === 3;

const isValidNumbers = num => {
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
  let computerNumbers = getComputerNumbers();
  let correctState = false;

  const play = (computerInputNumbers, userInputNumbers) => {
    const [ball, strike, correct] = compareNumbers(
      computerInputNumbers,
      userInputNumbers,
    );
    correctState = correct;

    return getResultMessage(ball, strike, correct);
  };

  const gameRestart = () => {
    const appContainer = document.querySelector("#app");
    const restartWrap = document.createElement("div");
    const restartText = document.createElement("span");
    const restartButton = document.createElement("button");

    restartText.textContent = "게임을 새로 시작하시겠습니까? ";
    restartButton.setAttribute("id", "game-restart-button");
    restartButton.textContent = "게임 재시작";
    restartWrap.appendChild(restartText);
    restartWrap.appendChild(restartButton);
    appContainer.appendChild(restartWrap);

    restartButton.addEventListener("click", () => {
      resultContainer.textContent = "";
      userInput.value = "";
      computerNumbers = getComputerNumbers();
      appContainer.removeChild(restartWrap);
    });
  };

  const resultProvider = message => {
    if (!correctState) {
      resultContainer.textContent = message;
    } else {
      resultContainer.innerHTML = message;
      gameRestart();
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
    userInput.addEventListener("keyup", event => {
      if (event.keyCode === 13) {
        gameStart();
      }
    });
  };

  init();
}

new BaseballGame();
