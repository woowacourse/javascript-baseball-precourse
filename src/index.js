export default class BaseballGame {
  constructor() {
    this.answer = this.makeRandomNumbers();
    this.userInput = document.getElementById("user-input");
    this.result = document.getElementById("result");

    document
      .getElementById("submit")
      .addEventListener("click", this.userClickBtn);

    this.gameInitializing();
  }

  play(computerInputNumbers, userInputNumbers) {
    let comNumbersMap = this.arrayToMap(computerInputNumbers);
    let userNumbersMap = this.arrayToMap(userInputNumbers);
    let strike = this.getStrike(comNumbersMap, userNumbersMap);
    let ball = this.getBall(comNumbersMap, userNumbersMap);

    if (this.isGameClear(strike)) {
      this.printGameClear();
      return;
    }

    this.printGameResult(strike, ball);
  }

  makeRandomNumbers() {
    let randomNumbers = new Set();

    while (randomNumbers.size < 3) {
      randomNumbers.add(window.MissionUtils.Random.pickNumberInRange(1, 9));
    }

    return Array.from(randomNumbers);
  }

  gameInitializing() {
    this.result.innerText = "";
    document.getElementById("user-input").value = "";
  }

  userClickBtn = () => {
    if (!this.isCorrectInput(this.userInput.value)) {
      alert("입력 형식이 틀렸어요. 다시 확인해주세요");
      return;
    }

    this.play(this.answer, this.userInput.value);
  };

  isCorrectInput(inputString) {
    let inputNumbers = new Set();
    inputNumbers.add(Number(inputString.charAt(0)));
    inputNumbers.add(Number(inputString.charAt(1)));
    inputNumbers.add(Number(inputString.charAt(2)));

    if (
      inputString.length !== 3 ||
      isNaN(Number(inputString)) ||
      inputNumbers.has(0)
    ) {
      return false;
    }

    return true;
  }

  getStrike(comNumbersMap, userNumbersMap) {
    let strike = 0;

    for (let num of userNumbersMap.keys()) {

      if (
        comNumbersMap.has(num) &&
        comNumbersMap.get(num) === userNumbersMap.get(num)
      ) {
        strike++;
      }
    }

    return strike;
  }

  getBall(comNumbersMap, userNumbersMap) {
    let ball = 0;

    for (let num of userNumbersMap.keys()) {

      if (
        comNumbersMap.has(num) &&
        comNumbersMap.get(num) !== userNumbersMap.get(num)
      ) {
        ball++;
      }
    }
    
    return ball;
  }

  isNothing(comNumbersMap, userNumbersMap) {
    for (let num of userNumbersMap.keys()) {

      if (comNumbersMap.has(num)) {
        return false;
      }
    }

    return true;
  }

  printGameResult(strike, ball) {
    if (strike === 0 && ball === 0) {
      this.result.innerText = "낫싱";
      return;
    } else if (strike === 0 && ball !== 0) {
      this.result.innerText = `${ball}볼`;
      return;
    } else if (strike !== 0 && ball === 0) {
      this.result.innerText = `${strike}스트라이크`;
      return;
    }

    this.result.innerText = `${ball}볼 ${strike}스트라이크`;
  }

  isGameClear(countStrike) {
    if (countStrike !== 3) {
      return false;
    }

    return true;
  }

  printGameClear() {
    this.result.innerText =
      "🎉 정답을 맞추셨습니다!🎉\n게임을 새로 시작하시겠습니까?";
    let restartBtn = document.createElement("button");
    restartBtn.setAttribute("id", "game-restart-button");
    restartBtn.innerText = "게임 재시작";

    restartBtn.onclick = () => {
      this.answer = this.makeRandomNumbers();
      this.gameInitializing();
    };

    this.result.appendChild(restartBtn);
  }

  arrayToMap(arr) {
    let tmp = new Map();

    for (let idx in arr) {
      tmp.set(Number(arr[idx]), idx);
    }

    return tmp;
  }
}

new BaseballGame();
