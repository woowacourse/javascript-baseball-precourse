const USER_INPUT = document.getElementById('user-input');
const SUBMIT_BTN = document.getElementById('submit');
const RESULT_DIV = document.getElementById('result');
const THREE_STRIKES = 3;
const INVALID_NUMBER = 0;

export default class BaseballGame {
  constructor() {
    // game variables
    this.computerNumber = [];
    this.balls = 0;
    this.strikes = 0;
    this.emojis = ['🎁', '⚽', '⚾', '😀', '😁', '😺', '👽', '🧐', '🙉', '🐼', '👍', '👌', '🤲'];
    
    this.getComputerNumber();
    this.setEventListeners();
    USER_INPUT.focus();
  }

  setEventListeners() {
    SUBMIT_BTN.addEventListener('click', this.clickSubmit.bind(this));
    USER_INPUT.addEventListener('keydown', e => {
      if (e.key === "Enter") {
        this.clickSubmit.bind(this)();
      }
    });
    RESULT_DIV.addEventListener('click', this.clickRestartBtn.bind(this));
  }

  clickRestartBtn(e) {
    const { target: { id }} = e;
    if (id && id === 'game-restart-button') {
      // get new random number & reset ball counts and strike counts
      this.getComputerNumber();
      this.resetBallsAndStrikes();

      this.setTextInput();
      RESULT_DIV.innerHTML = "";
    }
  }
  
  clickSubmit() {
    const inputValue = USER_INPUT.value;
    
    // test the user input suitability
    if (!this.isSuitableInputValue(inputValue)) {
      alert('올바른 값을 입력해주세요.');
      this.setTextInput();

      return;
    }
    
    // change user input string into an array of numbers
    const userInputNumbers = inputValue.split('').map(number => +number);
    
    this.printOnScreen(this.play(this.computerNumber, userInputNumbers));
    this.resetBallsAndStrikes();
  }
  
  // reset and focus on text input
  setTextInput() {
    USER_INPUT.readOnly = false;
    USER_INPUT.value = "";
    USER_INPUT.focus();
  }

  // returns true if the input value is suitable
  // suitable = not emptystring, not NaN, 3 length, not duplicated, not zero 
  isSuitableInputValue(val) {
    if (!val || isNaN(val) || val.length !== 3 || this.hasDuplicatedNumber(val) || this.hasZero(val)) {
      return false;
    }

    return true;
  }

  // returns true if the input value has zero in it
  hasZero(val) {
    if (val.includes('0')) {
      return true;
    }

    return false;
  }

  // returns true if the input value has duplicated numbers in it
  hasDuplicatedNumber(val) {
    const valueArray = val.split('');

    let i;
    for (i = 0; i < valueArray.length; i++) {
      if (valueArray.indexOf(valueArray[i]) !== i) {
        return true;
      }
    }
    
    return false;
  }

  // print the result on the screen
  printOnScreen(val) {
    let tempHTML = "";
    if (this.strikes === THREE_STRIKES) {
      tempHTML += `<p><b>🎉정답을 맞추셨습니다!🎉</b></p>
                   <p>게임을 새로 시작하시겠습니까? <button id="game-restart-button">게임 재시작</button></p>`;

      USER_INPUT.readOnly = true;
    } else {
      tempHTML += `<p>${val}</p>`;
    }

    RESULT_DIV.innerHTML = tempHTML;
  }

  // reset balls and strikes
  resetBallsAndStrikes() {
    this.balls = 0;
    this.strikes = 0;
  }

  // get computer's random number
  getComputerNumber() {
    let index = 0;
    
    while (index < 3) {
      const randomNumber = Math.floor(Math.random() * 10);
      
      if (randomNumber !== INVALID_NUMBER && this.computerNumber.indexOf(randomNumber) === -1) {
        this.computerNumber[index] = randomNumber;
        index++;
      }
    }
  }

  // get the result string based on the ball count and strike count
  getReturnString() {
    let returnString = "";
    if (this.balls && this.strikes) {
      returnString += `${this.balls}볼 ${this.strikes}스트라이크`;
    } else if (!this.balls && this.strikes) {
      returnString += `${this.strikes}스트라이크`;
    } else if (this.balls && !this.strikes) {
      returnString += `${this.balls}볼`;
    } else {
      returnString += "낫싱";
    }
    returnString += this.getRandomEmoji();

    return returnString;
  }

  getRandomEmoji() {
    return this.emojis[Math.floor(Math.random() * this.emojis.length)];
  }

  // compare the numbers and returns the result
  play(computerInputNumbers, userInputNumbers) {
    computerInputNumbers.forEach((number, idx) => {
      const indexOfNumber = userInputNumbers.indexOf(number);
      if (indexOfNumber === -1) {
      } else if (indexOfNumber === idx) {
        this.strikes++;
      } else {
        this.balls++;
      }
    });

    const result = this.getReturnString();

    return result;
  }
}

new BaseballGame();