export default class BaseballGame {
  constructor() {
    this.PITCH_COUNT = 3;

    this.computerInputNumber = this.getComputerInputNumbers();
    this.userSubmitButton = document.getElementById('submit');
    this.userInputNumber = document.getElementById('user-input');

    this.userSubmitButton.addEventListener('click', () => {
      let userInputNumbers = this.parseUserInput(this.userInputNumber.value);
      
      // 사용자 입력에 오류가 있을 겨우 반환 숫자 배열이 없음으로 play 메소드를 실행하지 않음
      if (userInputNumbers.length === 0) {
        return;
      }
      
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
      gameResult = this.getGameResultString(computerInputNumbers, userInputNumbers);
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

  getGameResultString(computerInputNumbers, userInputNumbers) {
    const ballCountResult = this.getBallCount(computerInputNumbers, userInputNumbers);
    const strikeCountResult = this.getStrikeCount(computerInputNumbers, userInputNumbers);
    let totalCountResultString;

    if (ballCountResult > 0 && strikeCountResult > 0) {
       totalCountResultString = `${ballCountResult}볼 ${strikeCountResult}스트라이크`;
    } else if (ballCountResult > 0 && strikeCountResult === 0) {
      totalCountResultString = `${ballCountResult}볼`;
    } else if (ballCountResult === 0 && strikeCountResult > 0) {
      totalCountResultString = `${strikeCountResult}스트라이크`;
    }

    return totalCountResultString;
  }

  getBallCount(computerInputNumbers, userInputNumbers) {
    let ballCount = 0;
    
    for (let pitch = 0; pitch < this.PITCH_COUNT; pitch++) {
      if (computerInputNumbers.includes(userInputNumbers[pitch]) && 
        computerInputNumbers[pitch] !== userInputNumbers[pitch]) {
          ballCount++;
        }
    }

    return ballCount;
  }

  getStrikeCount(computerInputNumbers, userInputNumbers) {
    let strikeCount = 0;
    for (let pitch = 0; pitch < this.PITCH_COUNT; pitch++) {
      if (computerInputNumbers[pitch] === userInputNumbers[pitch]) {
        strikeCount++;
      }
    }

    return strikeCount;
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
    this.isIncludeZero(userInputNumbers)) {

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

  isIncludeZero(userInputNumbers) {
    if (userInputNumbers.includes(0)) {
      console.log('Zero contain error');

      return true;
    }
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
