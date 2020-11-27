export default function BaseballGame() {
  // 1. 컴퓨터의 랜덤값 생성 기능
  const arrayLength = 3;
  let computerInputNumbers = [];
  
  function createComputerInputNumbers() {
    let i = 0;

    while (i < arrayLength) {
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

  // this.play = function (computerInputNumbers, userInputNumbers) {
  //   return "결과 값 String";
  // };

  function init() {
    createComputerInputNumbers();
  };

  init();
}

new BaseballGame();
