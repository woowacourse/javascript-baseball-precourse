export default class BaseballGame {
  constructor() {
    // game variables
    this.computerNumber = [];
    this.balls = 0;
    this.strikes = 0;

    // DOM elements
    this.userInput = document.getElementById('user-input');
    this.submitBtn = document.getElementById('submit');
    this.resultDiv = document.getElementById('result');
    
    this.getComputerNumber();

    this.userInput.focus();
    this.submitBtn.addEventListener('click', this.clickSubmit.bind(this));
    this.userInput.addEventListener('keydown', e => {
      if(e.key === "Enter") {
        this.clickSubmit.bind(this)();
      }
    });
    this.resultDiv.addEventListener('click', this.clickRestartBtn.bind(this));
  }

  clickRestartBtn(e) {
    if(e.target.id && e.target.id === 'game-restart-button') {
      // get new random number & reset ball counts and strike counts
      this.getComputerNumber();
      this.resetBallsAndStrikes();

      this.setTextInput();
      
      // result div setting
      this.resultDiv.innerHTML = "";
    }
  }
  
  clickSubmit() {
    const inputValue = this.userInput.value;
    
    // test the user input suitability
    if(!this.isSuitableInputValue(inputValue)) {
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
    this.userInput.disabled = false;
    this.userInput.value = "";
    this.userInput.focus();
  }

  // returns true if the input value is suitable
  isSuitableInputValue(val) {
    if(!val || isNaN(val) || val.length !== 3 || this.hasDuplicatedNumber(val) || this.hasZero(val)) {
      return false;
    }
    return true;
  }

  // returns true if the input value has zero in it
  hasZero(val) {
    if(val.includes('0')) {
      return true;
    }
    return false;
  }

  // returns true if the input value has duplicated numbers in it
  hasDuplicatedNumber(val) {
    const valueArray = val.split('');

    for(let i = 0; i < valueArray.length; i++) {
      if(valueArray.indexOf(valueArray[i]) !== i) {
        return true;
      }
    }
    
    return false;
  }

  // print the result on the screen
  printOnScreen(val) {
    let tempHTML = "";
    if(this.strikes === 3) {
      tempHTML += `<p><b>🎉정답을 맞추셨습니다!🎉</b></p>
                   <p>게임을 새로 시작하시겠습니까? <button id="game-restart-button">게임 재시작</button></p>`;

      this.userInput.disabled = true;
    } else {
      tempHTML += `<p>${val}</p>`;
    }

    this.resultDiv.innerHTML = tempHTML;
  }

  // reset balls and strikes
  resetBallsAndStrikes() {
    this.balls = 0;
    this.strikes = 0;
  }

  // get computer's random number
  getComputerNumber() {
    let index = 0;
    
    while(index < 3) {
      const randomNumber = Math.floor(Math.random() * 10);
      
      if(randomNumber !== 0 && this.computerNumber.indexOf(randomNumber) === -1) {
        this.computerNumber[index] = randomNumber;
        index++;
      }
    }
  }

  // get the result string based on the ball count and strike count
  getReturnString() {
    if(this.balls && this.strikes) {
      return `${this.balls}볼 ${this.strikes}스트라이크`;
    } else if(!this.balls && this.strikes) {
      return `${this.strikes}스트라이크`;
    } else if(this.balls && !this.strikes) {
      return `${this.balls}볼`;
    } else {
      return "낫싱";
    }
  }

  // compare the numbers and returns the result
  play(computerInputNumbers, userInputNumbers) {
    computerInputNumbers.forEach((number, idx) => {
      const indexOfNumber = userInputNumbers.indexOf(number);
      if(indexOfNumber === -1) {
      } else if(indexOfNumber === idx) {
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