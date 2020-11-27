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
const baseballGame = new BaseballGame();

let computerInputNumbers = "123";
let userInputNumbers = "0";

// 사용자 input 받기
const btnInput = document.getElementById("submit");

btnInput.onclick = function () {
  userInputNumbers = document.getElementById("user-input").value;
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
      computerInputNumbers = "245"; // computerInputNumber 바꾸기
      document.getElementById("user-input").value = ""; // input 초기화
      document.getElementById("result").innerHTML = ""; // result 초기화
    };
  } else {
    // 숫자를 못 맞힌경우
    document.getElementById("result").innerHTML = result;
  }
};
