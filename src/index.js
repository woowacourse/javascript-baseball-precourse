export default class BaseballGame {

  generateAnswer() {
    const getRandomNumber = () => {
      const MIN = 1;
      const MAX = 9;

      return Math.floor(Math.random() * (MAX - MIN + 1) + MIN, 0);
    }

    const randomNumbers = [];
    const NUMBER_DIGITS = 3;

    while (randomNumbers.length < NUMBER_DIGITS) {
      const randomNumber = getRandomNumber();

      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    }

    const _answer = randomNumbers.join("");

    return _answer;
  }

  isValid(userInputNumbers) {
    const NUMBER_DIGITS = "123456789";
    let _isValid = null;

    if (userInputNumbers.length !== 3) {
      _isValid = false;
    } else if (!this.isContainingGivenCharacters(userInputNumbers, NUMBER_DIGITS)) {
      _isValid = false;
    } else if (!this.hasDifferentNumbers(userInputNumbers)) {
      _isValid = false;
    } else {
      _isValid = true;
    }
    
    return _isValid;
  }

  isContainingGivenCharacters(str, GIVEN_CHARACTERS) {
    const splittedStr = str.split("");
    const isContaining = splittedStr.every(char => GIVEN_CHARACTERS.includes(char));

    return isContaining;
  }

  hasDifferentNumbers(str) {
    const splittedStr = str.split("");
    const strSet = Array.from(new Set(splittedStr));

    return strSet.length === str.length;
  }

  play(computerInputNumbers, userInputNumbers) {

    return "";
  }

}

new BaseballGame();
