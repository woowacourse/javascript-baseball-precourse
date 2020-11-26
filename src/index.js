export default function BaseballGame() {
  const baseballWrapper = document.body.querySelector("#app");
  const userInput = baseballWrapper.querySelector("#user-input");

  let strike = 0;
  let ball = 0;

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

    return (this.answer = makeOnAnswer());
  };

  this.answer = makeOnAnswer();

  this.play = function (computerInputNumbers, userInputNumbers) {
    console.log(computerInputNumbers);
    initValue();
    compareInput(computerInputNumbers, userInputNumbers);

    if (!strike && !ball) return "낫싱";
    if (!strike) return `${ball}볼`;
    if (!ball) return `${strike}스트라이크`;
    return `${ball}볼 ${strike}스트라이크`;
  };

  this.gameFinish = () => {
    const resultDiv = baseballWrapper.querySelector("#result");

    resultDiv.innerHTML = `<h3>정답을 맞추셨습니다!</h3> 
    <div id=restart-text>게임을 새로 시작하시겠습니까? </div>`;

    return reStartButton();
  };
}
