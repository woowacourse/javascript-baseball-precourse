export default function BaseballGame() {
  function createComputerInputNumbers() {
    const length = 3;
    let computerInputNumbers = [];
    let i = 0;

    while (i < length) {
      const randomNumber = Math.floor(Math.random() * 9 + 1);
      if (notSameNumber(randomNumber)) {
        computerInputNumbers.push(randomNumber);
        i++;
      }
    }

    function notSameNumber(randomNumber) { 
      return computerInputNumbers.every((computerInputNumber) => randomNumber !== computerInputNumber);
    };

    return computerInputNumbers;
  };

  createComputerInputNumbers();

  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };
}

new BaseballGame();
