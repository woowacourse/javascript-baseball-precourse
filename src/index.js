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

    this.getComputerNumber();

    const submitBtn = document.querySelector('#submit');
    submitBtn.addEventListener('click', this.clickSubmit.bind(this));
  }

  clickSubmit() {
    // 유저의 입력값 검사
    const inputValue = document.querySelector('#user-input').value;
    const userInputNumbers = inputValue.split('').map(number => +number);
    console.log(userInputNumbers);
    this.printOnScreen(this.play(this.computerNumber, userInputNumbers));
    this.resetBallsAndStrikes();
  }

  printOnScreen(str) {
    const resultScreen = document.querySelector('#result');

    let tempHtml = "";
    if(this.strikes === 3) {
      tempHtml += `<p><b>🎉정답을 맞추셨습니다!🎉</b></p>
      <p>게임을 새로 시작하시겠습니까? <button id="restart">게임 재시작</button></p>`;

      document.querySelector('#user-input').disabled = true;
    } else {
      tempHtml += `<p>${str}</p>`;
    }

    resultScreen.innerHTML = tempHtml;
  }

  resetBallsAndStrikes() {
    this.balls = 0;
    this.strikes = 0;
  }

  getComputerNumber() {
    let index = 0;
    
    while(index < 3) {
      const randomNumber = Math.floor(Math.random() * 10);
      
      if(randomNumber !== 0 && this.computerNumber.indexOf(randomNumber) === -1) {
        this.computerNumber[index] = randomNumber;
        index++;
      }
    }
    console.log(this.computerNumber);
  }

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