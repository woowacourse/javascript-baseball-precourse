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

    const _answer = Number(randomNumbers.join(""));

    return _answer;
  }

  isValid(userInputString) {
    const AVAILABLE_DIGITS = "123456789";
    const NUMBER_DIGITS = 3;
    let _isValid = null;

    if (userInputString.length !== NUMBER_DIGITS) {
      _isValid = false;
    } else if (!this.isContainingGivenCharacters(userInputString, AVAILABLE_DIGITS)) {
      _isValid = false;
    } else if (!this.hasDifferentNumbers(userInputString)) {
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

    const splittedComputerInput = computerInputNumbers.toString().split("");
    const splittedUserInput = userInputNumbers.toString().split("");

    const total = splittedUserInput.filter(val => splittedComputerInput.includes(val)).length;
    const strike = splittedUserInput.filter((val, idx) => val === splittedComputerInput[idx]).length;
    const ball = total - strike;

    let _return = null;
    if (strike === 0 && ball === 0) {
      _return = "낫싱";
    } else if (strike === 0) {
      _return = `${ball}볼`;
    } else if (ball === 0) {
      _return = `${strike}스트라이크`;  
    } else {
      _return = `${ball}볼 ${strike}스트라이크`;
    }

    return _return;
  }

}

new BaseballGame();
