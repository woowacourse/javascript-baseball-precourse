import numberGenerator from "./numberGenerator.js";

export default function BaseballGame() {
  const $userInput = document.querySelector("#user-input");
  const $submitBtn = document.querySelector("button");
  const $result = document.querySelector("#result");

  let computerInputNumbers = new numberGenerator();
  const CORRECT = "🎉 정답을 맞추셨습니다. 🎉";

  const restart = () => {
    $userInput.value = "";
    $result.innerHTML = "";
    computerInputNumbers = new numberGenerator();
  };

  const getResult = (text) => {
    if (text !== CORRECT) {
      $result.innerHTML = `<p>${text}</p>`;
      return;
    }

    $result.innerHTML = `<p><strong>${text}</strong></p>
      <span>게임을 새로 시작하겠습니까?</span>
      <button id="game-restart-button">게임 재시작</button>`;

    const $restart = $result.querySelector("#game-restart-button");
    $restart.addEventListener("click", restart);
  };

  const getHint = (computerInputNumbers, userInputNumbers) => {
    let hint = "";
    let strike = 0;
    let ball = 0;

    userInputNumbers.forEach((value, index) => {
      if (computerInputNumbers.indexOf(value) === index) {
        strike++;
      } else if (computerInputNumbers.indexOf(value) !== -1) {
        ball++;
      }
    });

    if (strike === 0 && ball === 0) hint = `낫싱`;
    else {
      hint =
        `${ball === 0 ? "" : `${ball}볼`} ` +
        `${strike === 0 ? "" : `${strike}스트라이크`}`;
    }

    return hint;
  };

  const play = (computerInputNumbers, userInputNumbers) => {
    const answer =
      JSON.stringify(computerInputNumbers) === JSON.stringify(userInputNumbers)
        ? CORRECT
        : getHint(computerInputNumbers, userInputNumbers);

    getResult(answer);
    return answer;
  };

  const hasSameNumber = (numberArray) => {
    const sameIndex = numberArray.filter(
      (value, index) => value === numberArray[index + 1]
    );
    return sameIndex.length !== 0;
  };

  const isValidNumber = (numberArray) => {
    if (hasSameNumber(numberArray)) {
      alert("서로 다른 숫자를 입력해주세요");
      return false;
    }

    if (numberArray.indexOf("0") !== -1) {
      alert("1부터 9까지의 숫자 중에서 입력해주세요");
      return false;
    }

    if (numberArray.length !== 3) {
      alert("숫자 3개를 입력해주세요");
      return false;
    }

    return true;
  };

  const handleUserInputSubmit = (e) => {
    let userInputNumbers = null;

    const currentInputNumber = $userInput.value.split("");
    if (!isValidNumber(currentInputNumber)) return;

    userInputNumbers = currentInputNumber.map((value) => parseInt(value));
    play(computerInputNumbers, userInputNumbers);
  };

  $submitBtn.addEventListener("click", handleUserInputSubmit);
}

new BaseballGame();
