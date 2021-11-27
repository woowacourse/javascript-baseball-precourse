export default class CompareInputNumbers {
  constructor(computerInputNumbers, userInputNumbers) {
    this.computerInputNumbers = computerInputNumbers;
    this.userInputNumbers = userInputNumbers;
    this.strikeCount = 0;
    this.ballCount = 0;
    this.resultMessage = '';
  }

  getResultMessage() {
    if (this.strikeCount === 0 && this.ballCount === 0) {
      this.resultMessage = '낫싱';
      return;
    }
    if (this.ballCount === 0 && this.strikeCount > 0) {
      this.resultMessage = `${this.strikeCount}스트라이크`;
      return;
    }
    if (this.strikeCount === 0 && this.ballCount > 0) {
      this.resultMessage = `${this.ballCount}볼`;
      return;
    }
    this.resultMessage = `${this.ballCount}볼 ${this.strikeCount}스트라이크`;
  }

  checkTheStrikeCount() {
    this.userInputNumbers.forEach((userNumber, index) => {
      const computerNumber = this.computerInputNumbers[index];
      if (computerNumber === userNumber) {
        this.userInputNumbers[index] = 0;
        this.strikeCount += 1;
      }
    });
  }

  checkTheBallCount() {
    this.userInputNumbers.forEach(userNumber => {
      if (this.computerInputNumbers.includes(userNumber)) {
        this.ballCount += 1;
      }
    });
  }

  main() {
    this.checkTheStrikeCount();
    this.checkTheBallCount();
    this.getResultMessage();
    return this.resultMessage;
  }
}
