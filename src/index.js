export default function BaseballGame() {
  const baseballWrapper = document.body.querySelector("#app");
  const submitButton = baseballWrapper.querySelector("#submit");
  const userInput = baseballWrapper.querySelector("#user-input");
  let boundSubmitUserInput = null;
  let answer = null;

  this.play = function (computerInputNumbers, userInputNumbers) {
    const result = {
      strike: 0,
      ball: 0,
      out: 0,
    };
    compareInput(result, computerInputNumbers, userInputNumbers);

    if (result.out === 3) return "낫싱";
    if (result.strike === 0) return `${result.ball}볼`;
    if (result.ball === 0) return `${result.strike}스트라이크`;
    return `${result.ball}볼 ${result.strike}스트라이크`;
  };

  const compareInput = (result, answer, userInput) => {
    for (let userIndex = 0; userIndex < 3; userIndex++) {
      const answerNumberIndex = answer.indexOf(userInput[userIndex]);
      answerNumberIndex >= 0
        ? answerNumberIndex === userIndex
          ? result.strike++
          : result.ball++
        : result.out++;
    }

    return result;
  };

  const makeOnAnswer = () => {
    const ALL_NUMBERS = 9;
    const numberArray = Array(ALL_NUMBERS)
      .fill()
      .map((v, i) => i + 1);
    let answer = "";

    for (let i = 1; i <= 3; i++) {
      const selectedNumber = numberArray.splice(
        selectRandomNumber(numberArray.length),
        1
      );
      answer += selectedNumber;
    }

    return answer;
  };

  const selectRandomNumber = (length) => {
    const randomNumber = Math.floor(Math.random() * length);

    return randomNumber;
  };

  const submitUserInput = (answer) => {
    if (isInputRight()) {
      const resultText = this.play(answer, userInput.value);
      showResultOnScreen(resultText);
    }
  };

  const isInputRight = () => {
    const { value } = userInput;

    if (value.match(/[^1-9]/g)) return alert("숫자가 아닙니다.");
    if (value.length !== new Set(value).size) {
      return alert("숫자가 중복됩니다.");
    }
    if (value.length !== 3) return alert("3자리의 숫자를 입력해주세요.");

    return true;
  };

  const showResultOnScreen = (resultText) => {
    const resultDiv = baseballWrapper.querySelector("#result");
    resultDiv.innerText = resultText;

    if (resultDiv.innerText === "3스트라이크") {
      return gameFinish();
    }
  };

  const gameStart = () => {
    const resultDiv = baseballWrapper.querySelector("#result");
    while (resultDiv.firstChild) {
      resultDiv.removeChild(resultDiv.firstChild);
    }

    userInput.value = "";
    answer = makeOnAnswer();
    boundSubmitUserInput = submitUserInput.bind(null, makeOnAnswer());
    submitButton.addEventListener("click", boundSubmitUserInput);
  };

  const gameFinish = () => {
    const resultDiv = baseballWrapper.querySelector("#result");

    submitButton.removeEventListener("click", boundSubmitUserInput);
    resultDiv.innerHTML = `<h3>정답을 맞추셨습니다!</h3> 
    <div id=restart-text>게임을 새로 시작하시겠습니까? </div>`;

    return reStartButton();
  };

  const reStartButton = () => {
    const restartDiv = baseballWrapper.querySelector("#restart-text");
    const reStartButton = document.createElement("button");
    reStartButton.id = "game-restart-button";
    reStartButton.innerText = "게임 재시작";
    restartDiv.appendChild(reStartButton);

    return reStartButton.addEventListener("click", gameStart, { once: true });
  };

  gameStart();
}

new BaseballGame();
