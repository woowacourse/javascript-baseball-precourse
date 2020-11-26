export default function BaseballGame() {
  this.MAX_DIGITS = 3;

  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };

  this.getRandomNumber = () => {
    const MIN_NUMBER = 1;
    const MAX_NUMBER = 9;

    return Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER;
  };

  this.setComputerInputNumbers = () => {
    const computerInputNumbers = [];

    while (computerInputNumbers.length < this.MAX_DIGITS) {
      const randomNumber = this.getRandomNumber();
      const isExistNumber = computerInputNumbers.includes(randomNumber)
        ? true
        : false;

      if (isExistNumber) {
        continue;
      }
      computerInputNumbers.push(randomNumber);
    }

    return computerInputNumbers;
  };

  this.checkValidInputValue = (value) => {
    const isNumber = isNaN(+value) ? false : true;
    const isThreeDigits = value.length === 3 ? true : false;

    if (!isNumber || !isThreeDigits) {
      return false;
    }

    const inputNumbers = value.split("");
    const hasZero = inputNumbers.includes("0");
    const uniqueNumberSet = [...new Set(value)];
    const isDifferentNumbers =
      uniqueNumberSet.length === this.MAX_DIGITS ? true : false;

    if (hasZero || !isDifferentNumbers) {
      return false;
    }

    return true;
  };
}

new BaseballGame();
