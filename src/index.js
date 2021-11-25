export default function BaseballGame() {
  let computerNumber = "";
  const hint = document.getElementById("result");
  const userInput = document.getElementById("user-input");
  const submitButton = document.getElementById("submit");

  // 컴퓨터 난수 생성
  const getComputerNumber = () => {
    let number = "";
    let checkUseNumber = new Array(10).fill(false);

    while (number.length < 3) {
      const newNumber = MissionUtils.Random.pickNumberInRange(1, 9);

      if (checkUseNumber[newNumber]) continue;

      checkUseNumber[newNumber] = true;
      number += newNumber.toString();
    }

    computerNumber = number;
  };

  // 3자리 숫자인지 확인
  const checkLengthThree = number => {
    if (number.length !== 3) {
      alert("세자리의 수를 입력해주세요.");
      return true;
    } else {
      return false;
    }
  };

  // 중복된 숫자 사용했는지 확인
  const checkOverlap = number => {
    if (
      number[0] === number[1] ||
      number[1] === number[2] ||
      number[0] === number[2]
    ) {
      alert("중복없는 세자리의 수를 입력해주세요.");
      return true;
    } else {
      return false;
    }
  };

  // 사용자가 입력한 수가 유효한지 확인
  const checkUserNumber = number => {
    if (checkLengthThree(number)) {
      return false;
    } else if (checkOverlap(number)) {
      return false;
    } else if (checkValidNumber(number)) {
      return false;
    } else {
      return true;
    }
  };

  // 1~9의 숫자인지 확인
  const checkValidNumber = number => {
    let i = 0;
    for (; i < 3; i++) {
      if (number[i] < "1" || number[i] > "9") {
        alert("1~9까지의 수를 입력해주세요.");
        return true;
      }
    }

    return false;
  };

  // 사용자로부터 입력받기
  const getUserNumber = () => {
    let userNumber = userInput.value;

    if (checkUserNumber(userNumber)) {
      return userNumber;
    } else {
      return "unvalid";
    }
  };

  // 스트라이크 갯수 확인
  const countStrike = (userNumber, computerNumber) => {
    let count = 0;
    let i = 0;
    for (; i < 3; i++) {
      if (userNumber[i] === computerNumber[i]) {
        count++;
      }
    }
    return count;
  };

  // 해당 인덱스의 수가 볼인지 확인
  const isBall = (userNumber, computerNumber, index) => {
    let i = 0;
    for (; i < 3; i++) {
      if (i === index) continue;
      if (userNumber[index] === computerNumber[i]) {
        return true;
      }
    }
    return false;
  };

  // 볼 갯수 확인
  const countBall = (userNumber, computerNumber) => {
    let count = 0;
    let i;
    for (i = 0; i < 3; i++) {
      if (isBall(userNumber, computerNumber, i)) {
        count++;
      }
    }
    return count;
  };

  const play = (userNumber, computerNumber) => {
    let result = "";
    const ball = countBall(userNumber, computerNumber);
    const strike = countStrike(userNumber, computerNumber);

    if (ball > 0) {
      result += `${ball}볼 `;
    }
    if (strike > 0) {
      result += `${strike}스트라이크`;
    }
    if (ball === 0 && strike === 0) {
      result = "낫싱";
    }

    return result;
  };

  // 재시작 기능 추가
  const addResetFunction = () => {
    const resetButton = document.getElementById("game-restart-button");
    resetButton.addEventListener("click", resetGame);
  };

  // 힌트 제공
  const showResult = () => {
    let userNumber = getUserNumber();
    let result = play(userNumber, computerNumber);
    if (userNumber === "unvalid") return;

    if (result === "3스트라이크") {
      hint.innerHTML = `
        <div>🎉정답을 맞추셨습니다!🎉<div>
        게임을 새로 시작하시겠습니까?<button id="game-restart-button">게임 재시작</button>
      `;
      addResetFunction();
    } else {
      hint.innerHTML = result;
    }
  };

  // 게임 재시작(난수 재생성, 힌트 및 입력 초기화)
  const resetGame = () => {
    getComputerNumber();
    hint.innerHTML = "";
    userInput.value = "";
  };

  resetGame();
  submitButton.addEventListener("click", showResult);
}

new BaseballGame();
