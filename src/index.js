export default class BaseballGame {
  constructor() {
    this.answerNumber = this.generateAnswerNumber();
    console.log(this.answerNumber);
    this.setEvent();
  }

  play = (computerInputNumbers, userInputNumbers) => {
    const { strike, ball } = this.caculateStrikeAndBall(
      computerInputNumbers,
      userInputNumbers
    );
    console.log(strike, ball);
  };

  setEvent = () => {
    const $userInputForm = document.querySelector("form");
    $userInputForm.addEventListener("submit", this.onSubmitHandler);
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    const $userInput = document.querySelector("#user-input");
    const userInputNumber = $userInput.value;
    this.play(this.answerNumber.split(""), userInputNumber.split(""));
  };

  isThreeDigit = (num) => {
    return num.length === 3;
  };

  isWithZero = (num) => {
    return num.match(/0/);
  };

  isValidNumber = (num) => {
    return num.match(/\D/);
  };

  isDuplicatedNumber = (num) => {
    const checkDuplicateNumberSet = new Set(num);
    return checkDuplicateNumberSet.size !== 3;
  };

  generateAnswerNumber = () => {
    let randomNumber = MissionUtils.Random.pickNumberInRange(
      111,
      999
    ).toString();

    if (
      this.isDuplicatedNumber(randomNumber) ||
      this.isWithZero(randomNumber)
    ) {
      return this.generateAnswerNumber();
    }

    return randomNumber;
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
}

const game = new BaseballGame();
