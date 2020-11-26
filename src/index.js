export default class BaseballGame {
  constructor() {
    this.PITCH_COUNT = 3;
    this.computerInputNumber = this.getComputerInputNumbers();
    this.userSubmitButton = document.getElementById('submit');
    this.userInputNumber = document.getElementById('user-input');

    this.userSubmitButton.addEventListener('click', (event) => {
      let userInputNumbers = this.parseUserInput(this.userInputNumber.value);
      event.preventDefault();
      console.log(this.play(this.computerInputNumber, userInputNumbers));
    });
  }

  play(computerInputNumbers, userInputNumbers) {
    console.log(computerInputNumbers, userInputNumbers);
    let gameResult;
    if (this.isEveryNumberSame(computerInputNumbers, userInputNumbers)) {
      gameResult = '정답';
    } else if (this.isNothing(computerInputNumbers, userInputNumbers)) {
      gameResult = '나싱';
    } else if (this.isSomeNumberSame(computerInputNumbers, userInputNumbers)) {
      gamerResult = getGameResultString(computerInputNumbers, userInputNumbers);
    }

    return gameResult;
  }

  isEveryNumberSame(computerInputNumbers, userInputNumbers) {
    let result = true;
    for (let pitch = 0; pitch < this.PITCH_COUNT; pitch++) {
      if (computerInputNumbers[pitch] !== userInputNumbers[pitch]) {
        result = false;
        break;
      }
    }

    return result;
  }

  isNothing(computerInputNumbers, userInputNumbers) {
    let result = true;
    for (let pitch = 0; pitch < this.PITCH_COUNT; pitch++) {
      if (computerInputNumbers.includes(userInputNumbers[pitch])) {
        result = false;
        break;
      }
    }

    return result;
  }

  isSomeNumberSame(computerInputNumbers, userInputNumbers) {
    let result = false;
    for (let pitch = 0; pitch < this.PITCH_COUNT; pitch++) {
      if (computerInputNumbers.includes(userInputNumbers[pitch])) {
        result = true;
      }
    }

    return true;
  }

  parseUserInput(userInputNumberAsString) {
    const userInputNumbers = userInputNumberAsString.split('').map((numberAsString) => parseInt(numberAsString, 10));

    if (this.isInputError(userInputNumbers)) {
      alert('올바르지 않은 입력입니다.');

      return [];
    }

    return userInputNumbers;
  }

  isInputError(userInputNumbers) {
    if (this.isWrongNumberLength(userInputNumbers) || 
    this.isNotNumberType(userInputNumbers) || 
    this.isNumberOverlap(userInputNumbers) || 
    this.isContainZero(userInputNumbers)) {

      return true;
    }
  }

  isWrongNumberLength(userInputNumbers) {
    if (userInputNumbers.length !== this.PITCH_COUNT) {
      console.log('Number length error');

      return true;
    }
  }

  isNotNumberType(userInputNumbers) {
    for (let pitch = 0; pitch < this.PITCH_COUNT; pitch++) {
      if (isNaN(userInputNumbers[0])) {
        console.log('Wrong number type');

        return true;
      }
    }
  }

  isNumberOverlap(userInputNumbers) {
    const userInputNumberSet = new Set(userInputNumbers);
    if (userInputNumbers.length !== userInputNumberSet.size) {
      console.log('Number overlap error');

      return true;
    }
  }

  isContainZero(userInputNumbers) {
    userInputNumbers.forEach((number) => {
      if (number === 0) {
        console.log('Zero error');

        return true;
      }
    });
  }

  getComputerInputNumbers() {
    let computerInputNumbers = [];
    let pitch = 0;
    let randomNumber;

    while (pitch < this.PITCH_COUNT) {
      randomNumber = this.getRandomNumber();
      if (!computerInputNumbers.includes(randomNumber)) {
        computerInputNumbers.push(randomNumber);
        pitch++;
      }
    }

    return computerInputNumbers;
  }

  getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 9 + 1);

    return randomNumber;
  }
}

new BaseballGame();
