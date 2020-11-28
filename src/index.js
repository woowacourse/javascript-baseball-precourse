export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = "";
    this.resetGame();
  }

  // 랜덤 3자리 수 생성 메서드
  generateRandomNumber() {
    let computerInputNumbers = [];

    while (computerInputNumbers.length < 3) {
      const randomNumber = Math.floor(Math.random() * 8 + 1);

      if (!computerInputNumbers.includes(randomNumber)) {
        computerInputNumbers.push(randomNumber);
      }
    }

    return computerInputNumbers;
  }

  // 주어진 숫자가 유효한지 확인 메서드
  checkVaild(userInputNumbers) {
    // 숫자인지 검사
    if (isNaN(userInputNumbers.join(""))) {
      alert("입력한 값이 숫자가 아닙니다");

      return false;
    }

    // 0이 포함되어있는지 검사
    if (userInputNumbers.includes("0")) {
      alert("입력한 숫자에 0이 포함됩니다");

      return false;
    }

    // 주어진 숫자의 길이가 3인지 검사
    if (userInputNumbers.length !== 3) {
      alert("입력한 값이 3자리가 아닙니다");

      return false;
    }

    // 주어진 숫자내 중복되는 값이 있는지 검사
    const dupNumbers = userInputNumbers.filter(
      (num, index) => userInputNumbers.indexOf(num) !== index
    );

    if (dupNumbers.length > 0) {
      alert("입력한 값에 중복된 값이 있습니다");

      return false;
    }

    return true;
  }

  // 스트라이크 개수 반환 메서드
  countStrike(computerInputNumbers, userInputNumbers) {
    let strike = 0;

    for (let i = 0; i < 3; i++) {
      if (computerInputNumbers[i] === userInputNumbers[i]) {
        strike += 1;
      }
    }

    return strike;
  }

  // 볼 개수 반환 메서드
  countBall(computerInputNumbers, userInputNumbers) {
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (
        userInputNumbers.includes(computerInputNumbers[i]) &&
        computerInputNumbers[i] !== userInputNumbers[i]
      ) {
        ball += 1;
      }
    }

    return ball;
  }

  // 야구게임 수행 메서드 반환
  play(computerInputNumbers, userInputNumbers) {
    const strike = this.countStrike(computerInputNumbers, userInputNumbers);
    const ball = this.countBall(computerInputNumbers, userInputNumbers);

    let answer = "";
    if (ball === 0 && strike === 0) {
      answer = "낫싱";
    }

    if (ball > 0) {
      answer += `${ball}볼 `;
    }

    if (strike > 0) {
      answer += `${strike}스트라이크`;
    }

    return answer;
  }

  // 결과 내용 출력 메서드
  showGameResult(answer) {
    const resultContainer = document.getElementById("result");

    if (answer !== "3스트라이크") {
      resultContainer.innerHTML = answer;
    } else {
      resultContainer.innerHTML = "<h3>🎉 정답을 맞추셨습니다! 🎉</h3>";
      resultContainer.innerHTML += "게임을 새로 시작하시겠습니까? ";
      resultContainer.innerHTML +=
        "<button id='game-restart-button'>게임 재시작</button>";

      const restartBtn = document.getElementById("game-restart-button");
      restartBtn.addEventListener("click", () => this.resetGame());
    }
  }

  // 확인 버튼 클릭 handle 메서드
  handleClick() {
    const submitBtn = document.getElementById("submit");
    submitBtn.addEventListener("click", () =>
      this.startGame(this.computerInputNumbers)
    );
  }

  // 게임 시작 메서드
  startGame(computerInputNumbers) {
    const userInputContainer = document.getElementById("user-input");
    const userInputValue = userInputContainer.value;
    const userInputNumbers = Array.from(userInputValue, Number);

    if (this.checkVaild(userInputNumbers)) {
      const answer = this.play(computerInputNumbers, userInputNumbers);

      this.showGameResult(answer);
    }

    this.handleClick(computerInputNumbers);
  }
}

new BaseballGame();
