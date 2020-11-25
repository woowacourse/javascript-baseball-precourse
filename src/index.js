// export default function BaseballGame() {
//   this.play = function (computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   };
// }

export default class BaseballGame {
  constructor() {
    this.computerNumber = [];
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

  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }
}

new BaseballGame().getComputerNumber();