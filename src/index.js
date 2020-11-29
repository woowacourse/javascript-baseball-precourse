export default function BaseballGame() {
  // 중복 숫자 판별 함수
  this.isAvailableNumber = function(randomNumber, computerInputNumbers) { 
    return computerInputNumbers.every((computerInputNumber) => randomNumber !== computerInputNumber);
  };

  // 컴퓨터의 랜덤값 생성 함수
  this.createComputerNumbers = function() {
    const arrayLength = 3;
    let computerInputNumbers = [];
    let i = 0;

    while (i < arrayLength) {
      const randomNumber = String(Math.floor(Math.random() * 9 + 1))
      if (this.isAvailableNumber(randomNumber, computerInputNumbers)) {
        computerInputNumbers.push(randomNumber);
        i++;
      }
    }

    return computerInputNumbers;
  };

  // 유저의 입력값 판별 함수  
  this.getUserNumbers = function() {
    const arrayLength = 3;
    const userInput = document.querySelector("#user-input");
    const userNumbers = userInput.value.split('');
    const userNumbersSet = new Set(userNumbers);
  
    if (userNumbers.length === arrayLength && userNumbers.length === userNumbersSet.size) {
      return userNumbers
    } else {
      alert("1~9까지의 수를 중복없이 3개 작성해 주세요.")
    }
  };

  // 게임 재시작 함수
  this.gameRestart = function(computerInputNumbers) {
    const gameRestartButton = document.querySelector("#game-restart-button")
    const userInput = document.querySelector("#user-input");

    gameRestartButton.style.display = 'none';
    let gameRestartText = document.querySelector("#game-restart-text");
    result.innerText = "🎉정답을 맞추셨습니다! 🎉";
    result.style.fontWeight = "bold";
    gameRestartText.innerText = "게임을 다시 시작하시겠습니까?";
    gameRestartText.style.display = "inline-block";
    gameRestartButton.style.display = 'inline-block';
    gameRestartButton.addEventListener("click", () => {
      computerInputNumbers = [];
      userInput.value = '';
      gameRestartButton.style.display = 'none';
      gameRestartText.style.display = 'none';
      result.innerText = '';
      this.createComputerNumbers();
    }, {once : true});
  };

  // 컴퓨터의 랜덤값과 유저의 입력값 비교 함수
  this.play = function (computerInputNumbers, userInputNumbers) {
    const arrayLength = 3;
    let result = document.querySelector("#result");
    let ballNumbers = 0;
    let strikeNumbers = 0;
    let i = 0;

    for (i; i < arrayLength; i++) {
      const userInputNumber = userInputNumbers[i];
      const userNumberIndex = userInputNumbers.indexOf(userInputNumber);
      const computerNumberIndex = computerInputNumbers.indexOf(userInputNumber);

      if (computerInputNumbers.includes(userInputNumber) && userNumberIndex === computerNumberIndex) {
        strikeNumbers++;
      } else if ((computerInputNumbers.includes(userInputNumber) && userNumberIndex !== computerNumberIndex)) {
        ballNumbers++;
      }
    }

    if (ballNumbers === 0 && strikeNumbers === 3) {
      this.gameRestart(computerInputNumbers);
    } else if (ballNumbers === 0 && strikeNumbers === 0) {
      result.innerText = "낫싱";
    } else if (ballNumbers && strikeNumbers === 0) {
      result.innerText = `${ballNumbers}볼`;
    } else if (ballNumbers === 0 && strikeNumbers) {
      result.innerText = `${strikeNumbers}스트라이크`;
    } else if (ballNumbers && strikeNumbers) {
      result.innerText = `${ballNumbers}볼 ${strikeNumbers}스트라이크`;
    }

    return result;
  };

  // init 함수
  this.init = function() {
    const computerInputNumbers = this.createComputerNumbers();
    const submitButton = document.querySelector("#submit");
    const gameRestartButton = document.querySelector("#game-restart-button")
    gameRestartButton.style.display = "none";
    submitButton.addEventListener("click", () => {
      const userInputNumbers = this.getUserNumbers();

      if (userInputNumbers) {
        this.play(computerInputNumbers, userInputNumbers)
      }
    });
  };

  this.init();
}

new BaseballGame();
