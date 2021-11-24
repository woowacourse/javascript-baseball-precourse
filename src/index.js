import { BASEBALL_NUMBER_LENGTH, randomNumberRange } from "./util/constant.js";

export default class BaseballGame {
  constructor() {
    this.answerNumber = this.generateAnswerNumber();
    this.setEvent();
  }

  play = (computerInputNumbers, userInputNumbers) => {
    const { strike, ball } = this.caculateStrikeAndBall(
      computerInputNumbers,
      userInputNumbers
    );
    const gameResultMessage = this.generateResultMessage(strike, ball);
    return gameResultMessage;
  };

  setEvent = () => {
    const $userInputForm = document.querySelector("form");
    $userInputForm.addEventListener("submit", this.onSubmitHandler);

    const $result = document.querySelector("#result");
    $result.addEventListener("click", this.restartGame);
  };

  restartGame = (event) => {
    if (event.target.id === "game-restart-button") {
      this.resetGame();
    }
  };

  setAnswerNumber = () => {
    this.answerNumber = this.generateAnswerNumber();
  };

  resetGame = () => {
    this.setAnswerNumber();
    this.resetUserInput();
    this.resetResult();
  };

  resetUserInput = () => {
    const $userInput = document.querySelector("#user-input");
    $userInput.value = "";
    $userInput.focus();
  };

  resetResult = () => {
    const $result = document.querySelector("#result");
    $result.innerHTML = "";
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    const $userInput = document.querySelector("#user-input");
    const userInputNumbers = $userInput.value;
    const alertMessage = this.generateAlertMessage(userInputNumbers);

    if (alertMessage) {
      this.showAlertMessage(alertMessage);
      return;
    }
    const gameResultMessage = this.play(
      this.answerNumber.split(""),
      userInputNumbers.split("")
    );
    this.printResultMessage(gameResultMessage);
  };

  isThreeDigit = (num) => {
    return num.length === BASEBALL_NUMBER_LENGTH;
  };

  isWithZero = (num) => {
    return num.match(/0/);
  };

  isValidNumber = (num) => {
    return num.match(/\D/);
  };

  isDuplicatedNumber = (num) => {
    const checkDuplicateNumberSet = new Set(num);
    return checkDuplicateNumberSet.size !== BASEBALL_NUMBER_LENGTH;
  };

  generateAnswerNumber = () => {
    const randomNumberSet = new Set();
    while (randomNumberSet.size < BASEBALL_NUMBER_LENGTH) {
      randomNumberSet.add(
        MissionUtils.Random.pickNumberInRange(
          randomNumberRange.MIN,
          randomNumberRange.MAX
        )
      );
    }

    return [...randomNumberSet].join("");
  };

  caculateStrikeAndBall = (computerInputNumbers, userInputNumbers) => {
    const strike = this.calculateStrikeCount(
      computerInputNumbers,
      userInputNumbers
    );
    const ball = this.calculateBallCount(
      computerInputNumbers,
      userInputNumbers
    );

    return { strike, ball };
  };

  calculateStrikeCount = (computerInputNumbers, userInputNumbers) => {
    let strikeCnt = 0;
    computerInputNumbers.forEach((computerNumber, idx) => {
      if (computerNumber === userInputNumbers[idx]) {
        strikeCnt += 1;
      }
    });

    return strikeCnt;
  };

  calculateBallCount = (computerInputNumbers, userInputNumbers) => {
    let ballCnt = 0;
    computerInputNumbers.forEach((computerNumber, idx) => {
      if (
        computerNumber !== userInputNumbers[idx] &&
        userInputNumbers.includes(computerNumber)
      ) {
        ballCnt += 1;
      }
    });

    return ballCnt;
  };

  generateAlertMessage = (userInputNumbers) => {
    if (this.isValidNumber(userInputNumbers)) {
      return "숫자만 입력해주세요";
    } else if (!this.isThreeDigit(userInputNumbers)) {
      return "3자리수의 숫자를 입력해주세요";
    } else if (this.isDuplicatedNumber(userInputNumbers)) {
      return "중복되지 않은 숫자들로 입력해주세요";
    } else if (this.isWithZero(userInputNumbers)) {
      return "1 ~ 9사이의 숫자로 입력해주세요";
    }

    return "";
  };

  showAlertMessage = (message) => {
    alert(message);
  };

  generateResultMessage = (strike, ball) => {
    if (strike === 3) {
      return this.generateCorrectMessage();
    }

    return this.generateHintMessage(strike, ball);
  };

  generateCorrectMessage = () => {
    return `
      <div>
        <div>
          <strong>🎉정답을 맞추셨습니다🎉</strong>
        </div>
        <span>게임을 새로 시작하시겠습니까?</span>
        <button id="game-restart-button">게임 재시작</button>
      </div>
    `;
  };

  generateHintMessage = (strike, ball) => {
    if (strike === 0 && ball === 0) {
      return "낫싱";
    }
    if (strike === 0 && ball > 0) {
      return `${ball}볼`;
    }
    if (strike > 0 && ball === 0) {
      return `${strike}스트라이크`;
    }
    if (strike > 0 && ball > 0) {
      return `${ball}볼 ${strike}스트라이크`;
    }
  };

  printResultMessage = (message) => {
    const $result = document.querySelector("#result");
    $result.innerHTML = message;
  };
}

const game = new BaseballGame();
