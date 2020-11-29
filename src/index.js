
export default function BaseballGame() {
  const inputLen = 3; // 입력받는 숫자의 길이
  var count = 1;
  var submitButton = document.getElementById("submit");

  // 각 자리의 스트라이크, 볼 카운트 측정
  function checkEachCount(computerInputNumbers, userInputNumbers, compareIndex) {
    let i;
    let userInputNumber;
    let strikeCount = 0;
    let ballCount = 0;

    computerInputNumbers = String(computerInputNumbers);
    userInputNumber = String(userInputNumbers[compareIndex]);

    for (i=0; i < inputLen; i++) {
      if (userInputNumber === computerInputNumbers[i] && compareIndex === i) {
        strikeCount++;
      } else if (userInputNumber === computerInputNumbers[i] && compareIndex !== i) {
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

    for (i=0; i < inputLen; i++) {
      result = checkEachCount(computerInputNumbers, userInputNumbers, i);
      strikeCount = result[0];
      ballCount = result[1];
      totalStrikeCount = totalStrikeCount + strikeCount;
      totalBallCount = totalBallCount + ballCount;
    }

    return [totalStrikeCount, totalBallCount];
  }

  // 숫자야구 결과를 리턴
  function play (computerInputNumbers, userInputNumbers) {
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
  };

  // 입력받은 숫자의 중복요소를 확인
  function checkEachInput(index, userInputNumbers) {
    let i;
    let result = true;
    
    for (i=0; i < inputLen; i++) {
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
    if (Number(userInputNumbers) === NaN) { // 숫자 외의 입력이 들어온 경우
      return false;
    }

    // 입력 길이가 다른 경우, 특히 '+78'과 같은 입력은 Number로 인식되므로 String을 해주어 길이를 체크한다.
    if (String(Number(userInputNumbers)).length !== inputLen) {
      return false;
    }

    for (i=0; i < inputLen; i++) { // 중복 숫자 확인
      if (!checkEachInput(i, userInputNumbers)) {
        return false;
      }
    }

    return true;
  }

  // appendchild를 위한 새로운 Element에 id와 text append
  function makeElement(element, id, text) {
    var newElement = document.createElement(element);
    var newElementText = document.createTextNode(text);
    if (element === "input") {
      newElement.type = "text";
    }
    newElement.id = id;
    newElement.appendChild(newElementText);

    return newElement;
  }

  // 사용자가 '확인'을 클릭했을 시 실행되는 함수
  function onSubmit() {
    const userInputNumbers = document.getElementById('user-input').value;
    console.log("clicked")
    if (checkRightInput(userInputNumbers)) {
      const resultId = document.getElementById("result");
      let result = play("456", userInputNumbers);
      if (result === "3스트라이크") {
        resultId.appendChild(makeElement("div", "correct", "🎉정답을 맞추셨습니다!🎉"));
      } else {
        resultId.appendChild(makeElement("span", "", `${result}`));
        document.getElementById('user-input').id = `user-input${count}`;
        resultId.id = `result${count}`;
        document.getElementById('submit').id = `submit${count}`;
        count++;
        const appId = document.getElementById("app");
        appId.appendChild(makeElement("input", "user-input", ""));
        appId.appendChild(makeElement("button", "submit", "확인"));
        appId.appendChild(makeElement("h3", "", "📄 결과"));
        appId.appendChild(makeElement("div", "result", ""));
        submitButton = document.getElementById("submit");
        submitButton.addEventListener("click", onSubmit);
      }
    } else {
      alert(`1~9까지의 수를 중복없이 ${inputLen}개를 작성해주세요!`);
    }
  }

  submitButton.addEventListener("click", onSubmit);

}

// export default class BaseballGame {
//   play(computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   }
// }

new BaseballGame();