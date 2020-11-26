export default function BaseballGame() {
  const baseballWrapper = document.body.querySelector("#app");
  const submitButton = baseballWrapper.querySelector("#submit");
  const userInput = baseballWrapper.querySelector("#user-input");

  let boundSubmitUserInput = null; // addEventListener을 제거하기 위해 bind
  let strike = 0;
  let ball = 0;

  this.play = function (computerInputNumbers, userInputNumbers) {
    initValue();
    compareInput(computerInputNumbers, userInputNumbers);

    if (!strike && !ball) return "낫싱";
    if (!strike) return `${ball}볼`;
    if (!ball) return `${strike}스트라이크`;
    return `${ball}볼 ${strike}스트라이크`;
  };

  const initValue = () => {
    strike = 0;
    ball = 0;
  };

  const compareInput = (answer, userInput) => {
    for (let userIndex = 0; userIndex < 3; userIndex++) {
      const answerNumberIndex = answer.indexOf(userInput[userIndex]);
      if (answerNumberIndex >= 0) {
        answerNumberIndex === userIndex ? strike++ : ball++;
      }
    }
  };

  const makeOnAnswer = () => {
    const MAX_NUMBER = 9;
    const numberArray = Array(MAX_NUMBER)
      .fill()
      .map((v, number) => number + 1);
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

      return showResultOnScreen(resultText);
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
    const answer = makeOnAnswer();
    boundSubmitUserInput = submitUserInput.bind(null, answer);

    return submitButton.addEventListener("click", boundSubmitUserInput);
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

    return reStartButton.addEventListener("click", gameReStart, { once: true });
  };

  const gameReStart = () => {
    const resultDiv = baseballWrapper.querySelector("#result");
    while (resultDiv.firstChild) {
      resultDiv.removeChild(resultDiv.firstChild);
    }

    userInput.value = "";

    return gameStart();
  };

  gameStart();
}

new BaseballGame();
