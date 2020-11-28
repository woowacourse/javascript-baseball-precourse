export default function BaseballGame() {
  // 1. 컴퓨터의 랜덤값 생성 기능
  const arrayLength = 3;
  let computerInputNumbers = [];
  
  this.notSameNumber = function(randomNumber) { 
    return computerInputNumbers.every((computerInputNumber) => randomNumber !== computerInputNumber);
  };

  this.createComputerInputNumbers = function() {
    let i = 0;

    while (i < arrayLength) {
      const randomNumber = String(Math.floor(Math.random() * 9 + 1))
      if (this.notSameNumber(randomNumber)) {
        computerInputNumbers.push(randomNumber);
        i++;
      }
    }
    console.log(computerInputNumbers)
    return computerInputNumbers;
  };

  // 2. 유저의 입력값 판별 기능
  const submitButton = document.querySelector("#submit");
  const userInput = document.querySelector("#user-input")
  
  this.getUserInputNumbers = function() {
    const userInputNumbers = userInput.value.split('');
    const isDuplicated = new Set(userInputNumbers);
  
    if (userInputNumbers.length === arrayLength && userInputNumbers.length === isDuplicated.size) {
      return userInputNumbers
    } else {
      alert("1~9까지의 수를 중복없이 3개 작성해 주세요.")
    }
  };

  // 3. 컴퓨터의 랜덤값과 유저의 입력값 비교 기능
  this.play = function (computerInputNumbers, userInputNumbers) {
    console.log(computerInputNumbers, userInputNumbers)
    return result;
  };

  // init()
  this.init = function() {
    this.createComputerInputNumbers();
    submitButton.addEventListener("click", () => {
      const userInputNumbers = this.getUserInputNumbers();
      
      if (userInputNumbers) {
        this.play(computerInputNumbers, userInputNumbers)
      }
    });
  };

  this.init();
}

new BaseballGame();
