export default function BaseballGame() {
  // 1. 컴퓨터의 랜덤값 생성 기능
  const arrayLength = 3;
  let computerInputNumbers = [];
  
  this.notSameNumber = function(randomNumber) { 
    return computerInputNumbers.every((computerInputNumber) => randomNumber !== computerInputNumber);
  };
  
  this.createComputerInputNumbers = function() {
    let i = 0;

    while (i < arrayLength) {
      const randomNumber = String(Math.floor(Math.random() * 9 + 1))
      if (this.notSameNumber(randomNumber)) {
        computerInputNumbers.push(randomNumber);
        i++;
      }
    }

    return computerInputNumbers;
  };

  // 2. 유저의 입력값 판별 기능
  const submitButton = document.querySelector("#submit");
  const userInput = document.querySelector("#user-input");
  
  this.getUserInputNumbers = function() {
    const userInputNumbers = userInput.value.split('');
    const isDuplicated = new Set(userInputNumbers);
  
    if (userInputNumbers.length === arrayLength && userInputNumbers.length === isDuplicated.size) {
      return userInputNumbers
    } else {
      alert("1~9까지의 수를 중복없이 3개 작성해 주세요.")
    }
  };

  // 4. 게임 재시작 기능
  const gameRestartButton = document.querySelector("#game-restart-button")
  gameRestartButton.style.display = 'none';

  this.gameRestart = function() {
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
      this.createComputerInputNumbers();
    });
  };

  // 3. 컴퓨터의 랜덤값과 유저의 입력값 비교 기능
  this.play = function (computerInputNumbers, userInputNumbers) {
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
      this.gameRestart();
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

  // init()
  this.init = function() {
    this.createComputerInputNumbers();
    submitButton.addEventListener("click", () => {
      const userInputNumbers = this.getUserInputNumbers();

      if (userInputNumbers) {
        this.play(computerInputNumbers, userInputNumbers)
      }
    });
  };

  this.init();
}

new BaseballGame();
