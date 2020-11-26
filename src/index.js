// export default function BaseballGame() {
//   this.play = function (computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   };
// }

export default class BaseballGame {
  constructor() {
    this.computerNumber = [];
    this.balls = 0;
    this.strikes = 0;

    this.userInput = document.getElementById('user-input');
    this.submitBtn = document.getElementById('submit');
    this.resultDiv = document.getElementById('result');
    
    this.getComputerNumber();

    this.userInput.focus();
    this.submitBtn.addEventListener('click', this.clickSubmit.bind(this));
    this.resultDiv.addEventListener('click', this.clickRestartBtn.bind(this));
  }

  clickRestartBtn(e) {
    if(e.target.id && e.target.id === 'restart') {
      this.getComputerNumber();
      this.resetBallsAndStrikes();

      this.userInput.disabled = false;
      this.userInput.value = "";
      this.userInput.focus();
      
      this.resultDiv.innerHTML = "";
    }
  }

  clickSubmit() {
    const inputValue = this.userInput.value;

    // test the user input suitability
    if(!this.isSuitableInputValue(inputValue)) {
      alert('올바른 값을 입력해주세요.');
      this.userInput.value = "";
      this.userInput.focus();
      return;
    }

    const userInputNumbers = inputValue.split('').map(number => +number);
    this.printOnScreen(this.play(this.computerNumber, userInputNumbers));
    this.resetBallsAndStrikes();
  }

  isSuitableInputValue(value) {
    // returns true if the input value is suitable
    if(!value || isNaN(value) || value.length !== 3 || this.hasDuplicatedNumber(value) || this.hasZero(value)) {
      return false;
    }
    return true;
  }

  hasZero(value) {
    // returns true if the input value has zero in it
    if(value.includes('0')) {
      return true;
    }
    return false;
  }

  hasDuplicatedNumber(value) {
    // returns true if the input value has duplicated numbers in it
    const valueArray = value.split('');

    for(let i = 0; i < valueArray.length; i++) {
      if(valueArray.indexOf(valueArray[i]) !== i) {
        return true;
      }
    }
    
    return false;
  }

  printOnScreen(value) {
    // print the result on the screen
    let tempHtml = "";
    if(this.strikes === 3) {
      tempHtml += `<p><b>🎉정답을 맞추셨습니다!🎉</b></p>
      <p>게임을 새로 시작하시겠습니까? <button id="restart">게임 재시작</button></p>`;

      this.userInput.disabled = true;
    } else {
      tempHtml += `<p>${value}</p>`;
    }

    this.resultDiv.innerHTML = tempHtml;
  }

  resetBallsAndStrikes() {
    // reset balls and strikes after submit the input
    this.balls = 0;
    this.strikes = 0;
  }

  getComputerNumber() {
    // get computer's random number
    let index = 0;
    
    while(index < 3) {
      const randomNumber = Math.floor(Math.random() * 10);
      
      if(randomNumber !== 0 && this.computerNumber.indexOf(randomNumber) === -1) {
        this.computerNumber[index] = randomNumber;
        index++;
      }
    }
  }

  getReturnString() {
    // get the result string based on the ball count and strike count
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

  play(computerInputNumbers, userInputNumbers) {
    // compare the numbers and returns the result

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