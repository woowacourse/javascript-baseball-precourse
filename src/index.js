export default function BaseballGame() {
  const inputLen = 3; // 입력받는 숫자의 길이
  const minValue = 123;
  const maxValue = 987;
  const randomNum = getRandomNum();
  let count = 1;
  let submitButton = document.getElementById("submit");

  // 각 자리의 스트라이크, 볼 카운트 측정
  function checkEachCount(
    computerInputNumbers,
    userInputNumbers,
    compareIndex
  ) {
    let i;
    let userInputNumber;
    let strikeCount = 0;
    let ballCount = 0;

    computerInputNumbers = String(computerInputNumbers);
    userInputNumber = String(userInputNumbers[compareIndex]);

    for (i = 0; i < inputLen; i++) {
      if (userInputNumber === computerInputNumbers[i] && compareIndex === i) {
        strikeCount++;
      } else if (
        userInputNumber === computerInputNumbers[i] &&
        compareIndex !== i
      ) {
        ballCount++;
      }
    }

    return [strikeCount, ballCount];
  }

  // 입력 받은 숫자 전체의 스트라이크, 볼 카운트 측정
  function checkAllCount(computerInputNumbers, userInputNumbers) {
    let i;
    let result;
    let strikeCount;
    let ballCount;
    let totalStrikeCount = 0;
    let totalBallCount = 0;

    for (i = 0; i < inputLen; i++) {
      result = checkEachCount(computerInputNumbers, userInputNumbers, i);
      strikeCount = result[0];
      ballCount = result[1];
      totalStrikeCount = totalStrikeCount + strikeCount;
      totalBallCount = totalBallCount + ballCount;
    }

    return [totalStrikeCount, totalBallCount];
  }

  // 숫자야구 결과를 string으로 리턴하는 함수
  function play(computerInputNumbers, userInputNumbers) {
    let totalStrikeCount;
    let totalBallCount;
    let answer;
    let result;

    answer = checkAllCount(computerInputNumbers, userInputNumbers);
    totalStrikeCount = answer[0];
    totalBallCount = answer[1];

    if (totalStrikeCount === 0 && totalBallCount === 0) {
      result = "낫싱";
    } else if (totalStrikeCount !== 0 && totalBallCount === 0) {
      result = `${totalStrikeCount}스트라이크`;
    } else if (totalStrikeCount === 0 && totalBallCount !== 0) {
      result = `${totalBallCount}볼`;
    } else {
      result = `${totalBallCount}볼 ${totalStrikeCount}스트라이크`;
    }

    return result;
  }

  // 입력받은 숫자의 중복요소를 확인
  function checkEachInput(index, userInputNumbers) {
    let i;
    let result = true;

    for (i = 0; i < inputLen; i++) {
      if (i !== index && userInputNumbers[index] === userInputNumbers[i]) {
        result = false;
        break;
      }
    }
    return result;
  }

  // 입력받은 값이 조건에 맞는지 확인
  function checkRightInput(userInputNumbers) {
    let i;
    let numUserInput = Number(userInputNumbers);

    // 숫자 외의 입력이 들어온 경우
    if (
      numUserInput === NaN ||
      numUserInput < minValue ||
      maxValue < numUserInput
    ) {
      return false;
    }

    // 입력 길이가 다른 경우, 특히 '+78'과 같은 입력은 Number로 인식되므로 String을 해주어 길이를 체크한다.
    if (String(numUserInput).length !== inputLen) {
      return false;
    }

    // 중복 숫자 확인
    for (i = 0; i < inputLen; i++) {
      if (!checkEachInput(i, userInputNumbers)) {
        return false;
      }
    }

    return true;
  }

  // appendchild를 위한 새로운 Element에 id와 text append
  function makeElement(element, id, text) {
    const newElement = document.createElement(element);
    const newElementText = document.createTextNode(text);

    // 특정 element에 대한 예외처리
    if (element === "input") {
      newElement.type = "text";
    } else if (element === "hr") {
      newElement.style = "width: 225px; margin-bottom: 20px;";
      newElement.align = "left";
    }

    // id가 주어진 경우
    if (id !== "") {
      newElement.id = id;
    }

    newElement.appendChild(newElementText);

    return newElement;
  }

  // 게임 재시작
  function onRestart() {
    window.location.reload(); // 새로고침으로 재시작
  }

  // 컴퓨터측 random 번호 생성
  function getRandomNum() {
    let number = [];

    number[0] = Math.floor(Math.random() * 9) + 1;
    do {
      number[1] = Math.floor(Math.random() * 9) + 1;
    } while (number[1] === number[0]);
    do {
      number[2] = Math.floor(Math.random() * 9) + 1;
    } while (number[2] === number[1] || number[2] === number[0]);

    return String(number[0]) + String(number[1]) + String(number[2]);
  }

  // 사용자가 '확인'을 클릭했을 시 실행되는 함수
  function onSubmit() {
    const appId = document.getElementById("app");
    const userInputNumbers = document.getElementById("user-input").value;

    if (checkRightInput(userInputNumbers)) {
      const resultId = document.getElementById("result");
      const result = play(randomNum, userInputNumbers);

      // 정답을 맞춘 경우
      if (result === "3스트라이크") {
        resultId.appendChild(
          makeElement("h3", "correct", "🎉정답을 맞추셨습니다!🎉")
        );
        resultId.appendChild(
          makeElement("span", "ask", "게임을 새로 시작하시겠습니까? ")
        );
        resultId.appendChild(
          makeElement("button", "game-restart-button", "게임 재시작")
        );
        const reStartButton = document.getElementById("game-restart-button");
        reStartButton.addEventListener("click", onRestart);
      } else {
        // 정답을 틀린 경우, html에 새로운 input과 button 추가
        resultId.appendChild(makeElement("h3", "", `${result}`));
        resultId.appendChild(makeElement("hr", "line", ""));
        document.getElementById("user-input").id = `user-input${count}`;
        resultId.id = `result${count}`;
        document.getElementById("submit").id = `submit${count}`;
        count++;
        appId.appendChild(makeElement("input", "user-input", ""));
        appId.appendChild(makeElement("button", "submit", "확인"));
        appId.appendChild(makeElement("h3", "", "📄 결과"));
        appId.appendChild(makeElement("div", "result", ""));
        submitButton = document.getElementById("submit");
        submitButton.addEventListener("click", onSubmit);
      }
    } else {
      // 조건에 맞지 않은 입력이 들어온 경우
      alert(`1~9까지의 수를 중복없이 ${inputLen}개를 작성해주세요!`);
    }
  }

  submitButton.addEventListener("click", onSubmit);
}

new BaseballGame();
