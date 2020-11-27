export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    
    return "결과 값 String";
  };

  this.getComputerInputNumbers = function () {
    let computerNumbers = [];

    while (computerNumbers.length < 3) {
      let randomNumber = getRandomNumber();

      if( !computerNumbers.includes(randomNumber) ) {
        computerNumbers.push(randomNumber)
      }
    }

    return computerNumbers;
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 9) + 1;
}

new BaseballGame()