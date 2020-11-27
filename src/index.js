export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    let numOfStrike = 0;
    let numOfBall = 0;

    Array.from(userInputNumbers).forEach((num, idx) => {
      if (computerInputNumbers.includes(num)) {
        if (computerInputNumbers.indexOf(num) === idx) {
          numOfStrike++; // 같은 수가 같은 자리이면
        } else {
          numOfBall++; //같은 수가  다른 자리면
        }
      }
    });

    if (numOfStrike === 0 && numOfBall === 0) {
      return "낫싱"; // 같은 수가 0개면
    } else if (numOfStrike === 0 && numOfBall !== 0) {
      return `${numOfBall}볼`;
    } else if (numOfStrike !== 0 && numOfBall === 0) {
      return `${numOfStrike}스트라이크`;
    } else {
      return `${numOfBall}볼 ${numOfStrike}스트라이크`;
    }
  };
}

// 새로운 숫자 만들기
function makeNewNumber() {
  let newNumber = [];
  let i = 0;
  while (i < 3) {
    let n = Math.floor(Math.random() * 9) + 1;
    if (!isInclude(n, newNumber)) {
      newNumber.push(n);
      i++;
    }
  }
  console.log("새로운 숫자: ", newNumber.join(""));
  return newNumber.join("");
}

// 새로 생성된 숫자가 이미 존재하는지 안하는지 판별
function isInclude(num, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(num)) {
      return true;
    }
    return false;
  }
}

function isCorrectInput(userInput) {
  const userInputSet = new Set(Array.from(userInput));
  if (
    userInput.length === 3 &&
    userInputSet.size === 3 &&
    !userInput.includes("0")
  ) {
    return true;
  }
  return false;
}

const baseballGame = new BaseballGame();

let computerInputNumbers = makeNewNumber();
let userInputNumbers = "0";

// 사용자 input 받기
const btnInput = document.getElementById("submit");

btnInput.onclick = function () {
  userInputNumbers = document.getElementById("user-input").value;
  if (isCorrectInput(userInputNumbers)) {
    const result = baseballGame.play(computerInputNumbers, userInputNumbers);
    // 결과 출력
    if (result === "3스트라이크") {
      // 숫자를 전부 맞힌경우
      document.getElementById(
        "result"
      ).innerHTML = `<div>정답을 맞추셨습니다!</div><div>게임을 새로 시작하시겠습니까? <button id="game-restart-button">게임 재시작</button></div>`;

      const btnRestart = document.getElementById("game-restart-button");
      // 게임 재시작
      btnRestart.onclick = function () {
        computerInputNumbers = makeNewNumber(); // computerInputNumber 바꾸기
        document.getElementById("user-input").value = ""; // input 초기화
        document.getElementById("result").innerHTML = ""; // result 초기화
      };
    } else {
      // 숫자를 못 맞힌경우
      document.getElementById("result").innerHTML = result;
    }
  } else {
    alert("올바른 숫자를 입력하세요.");
    document.getElementById("user-input").value = ""; // input 초기화
    document.getElementById("result").innerHTML = ""; // result 초기화
  }
};
