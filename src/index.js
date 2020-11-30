export function createRandomNums() {
  let randomNumbers = "";
  let i = 0;

  while (i < 3) {
    //이미 포함된 숫자가 아닌 다른 수가 나올때 까지 난수를 생성
    const num = String(Math.floor(Math.random() * 10));
    if (!randomNumbers.includes(num)) {
      randomNumbers += num;
      i += 1;
    }
  }

  return randomNumbers;
}

export function validateInput(userInputNumbers) {
  const nonDuplicateNumbers = Array.from(new Set(userInputNumbers));
  // 숫자가 아닐때, 글자수가 3이 아닐때,중복된 숫자로 전체 길이가 3이 안될때 걸러냄
  if (
    !Number(userInputNumbers) ||
    userInputNumbers.length !== 3 ||
    nonDuplicateNumbers.length !== 3
  ) {
    alert("숫자를 올바르게 입력하세요.[세 자리의 다른수 ex.127]");

    return false;
  }

  return true;
}

export default function BaseballGame() {
  const submitButton = document.querySelector("#submit");
  this.computerNumbers = createRandomNums();
  console.log(this.computerNumbers);
  this.balls = 0;
  this.strikes = 0;
  this.compareNumber = function (
    computerNumber,
    userNumber,
    computerIndex,
    userIndex
  ) {
    if (computerNumber === userNumber) {
      if (computerIndex === userIndex) {
        this.strikes += 1;
      } else {
        this.balls += 1;
      }
    }
  };

  this.getResult = function () {
    let gameResult = "";
    if (this.balls) {
      gameResult += `${this.balls}볼 `;
    }
    if (this.strikes) {
      gameResult += `${this.strikes}스트라이크`;
    }
    if (!this.strikes && !this.balls) {
      gameResult += "낫싱";
    }

    return gameResult;
  };

  this.play = function (computerInputNumbers, userInputNumbers) {
    for (const [i, computerNumber] of computerInputNumbers
      .split("")
      .entries()) {
      for (const [j, userNumber] of userInputNumbers.split("").entries()) {
        this.compareNumber(computerNumber, userNumber, i, j);
      }
    }
    return this.getResult();
  };

  this.retryGame = function () {
    // 재시작하기 위한 화면을 그려주는 함수
    const userInput = document.querySelector("#user-input");
    const result = document.querySelector("#result");
    const successNews = document.createElement("h4");
    const newGamePropal = document.createElement("span");
    const retryButton = document.createElement("button");

    retryButton.setAttribute("id", "game-restart-button");
    successNews.textContent = "🎉 정답을 맞추셨습니다 🎉";
    newGamePropal.innerHTML = "게임을 새로 시작하시겠습니까? ";
    retryButton.innerHTML = "게임 재시작";

    result.appendChild(successNews);
    result.appendChild(newGamePropal);
    result.appendChild(retryButton);

    retryButton.addEventListener("click", () => {
      // 재시작 버튼을 클릭하면 숫자를 재 셋팅
      this.computerNumbers = createRandomNums();
      console.log(this.computerNumbers);
      userInput.value = "";
      // 화면들 모두 지워주기
      result.removeChild(successNews);
      result.removeChild(newGamePropal);
      result.removeChild(retryButton);
    });
  };

  submitButton.addEventListener("click", () => {
    // 제출할때 마다 strikes와 balls ,result 초기화
    const userInput = document.querySelector("#user-input");
    const result = document.querySelector("#result");
    this.balls = 0;
    this.strikes = 0;
    result.textContent = "";
    userInput.focus();

    if (validateInput(userInput.value)) {
      const gameResult = this.play(this.computerNumbers, userInput.value);
      if (this.strikes === 3) {
        this.retryGame();
      } else {
        result.textContent = gameResult;
      }
    } else {
      userInput.value = "";
      userInput.focus();
    }
  });
}

new BaseballGame();
