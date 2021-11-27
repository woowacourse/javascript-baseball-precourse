export default class CompareInputNumbers {
  constructor(computerInputNumbers, userInputNumbers) {
    this.computerInputNumbers = computerInputNumbers;
    this.userInputNumbers = userInputNumbers;
    this.strikeCount = 0;
    this.ballCount = 0;
  }

  getResultMessage() {
    if (this.ballCount === 0 && this.strikeCount > 0) {
      return `${this.strikeCount}스트라이크`;
    }

    if (this.strikeCount === 0 && this.ballCount > 0) {
      return `${this.ballCount}볼`;
    }

    if (this.strikeCount > 0 && this.ballCount > 0) {
      return `${this.ballCount}볼 ${this.strikeCount}스트라이크`;
    }

    return '낫싱';
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

    return this.getResultMessage();
  }
}
