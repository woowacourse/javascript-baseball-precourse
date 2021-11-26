export default class CompareInputNumbers {
  constructor(computerInputNumbers, userInputNumbers) {
    this.computerInputNumbers = computerInputNumbers;
    this.userInputNumbers = userInputNumbers;
    this.strikeCount = 0;
    this.ballCount = 0;
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
    this.userInputNumbers.forEach((userNumber) => {
      if (this.computerInputNumbers.includes(userNumber)) {
        this.ballCount += 1;
      }
    });
  }

  main() {
    this.checkTheStrikeCount();
    this.checkTheBallCount();
    console.log(this.computerInputNumbers);
    console.log(this.userInputNumbers);
    console.log(this.strikeCount, this.ballCount);
  }
}
