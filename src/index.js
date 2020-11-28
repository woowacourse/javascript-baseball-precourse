export default function BaseballGame() {
  const submit = document.getElementById("submit");
  const userInput = document.getElementById("user-input");
  
  
  this.play = function (computerInputNumbers, userInputNumbers) {
    console.log("playing...");
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
  };

  this.showError = function(userInputNumber) {
    if(userInputNumber.length != 3) { 
      alert("3개의 숫자를 작성해주세요!");
      return ;
    } else if( isDuplication(userInputNumber) ){
      alert("중복된 숫자를 입력하셨습니다!");
      return ;
    } else if( userInputNumber.includes(0) ){
      alert("1-9까지의 숫자만 입력해주세요!");
      return ;
    }
  };

  this.getUserInput = function() {
    let userInputNumber = userInput.value;
    this.showError(userInputNumber);
    this.play(computerInputNumbers, userInputNumber);
  };

  submit.addEventListener('click',() => this.getUserInput());
  const computerInputNumbers = this.getComputerInputNumbers();

}

function isDuplication(numbers) {
  return (
    numbers[0] === numbers[1] ||
    numbers[0] === numbers[2] ||
    numbers[1] === numbers[2]
    );
}

function getRandomNumber() {
  return Math.floor(Math.random() * 9) + 1;
}

new BaseballGame()