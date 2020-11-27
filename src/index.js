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

  // 2. 유저의 입력값 판별 기능
  const submitButton = document.querySelector("#submit");
  const userInput = document.querySelector("#user-input")
  
  function getUserInputNumbers() {
    const userInputNumbers = userInput.value.split('');
    const isDuplicated = new Set(userInputNumbers);
  
    if (userInputNumbers.length === arrayLength && userInputNumbers.length === isDuplicated.size) {
      // 3번 기능 만들면서 수정
      console.log("pass")
    } else {
      alert("1~9까지의 수를 중복없이 3개 작성해 주세요.")
    }
  };

  // 3. 컴퓨터의 랜덤값과 유저의 입력값 비교 기능
  // this.play = function (computerInputNumbers, userInputNumbers) {
  //   return "결과 값 String";
  // };

  function init() {
    createComputerInputNumbers();
    submitButton.addEventListener("click", getUserInputNumbers);
  };

  init();
}

new BaseballGame();
