let userInputNumbers = ""

function getComputerInputNumbers() {
  let numberCandidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let numberArray = new Array();
  for (let i = 0; i < 3; i += 1) {
    let selectedNumber = numberCandidate.splice(Math.floor(Math.random()*(9-i)), 1);
    numberArray.push(selectedNumber[0])
  }
  return numberArray
}

function setInputMaxLength() {
  const input = document.querySelector("#user-input");
  input.maxLength = 3;
}

function isValidation(numberString) {
  let number = Number(numberString)
  if (isNaN(number)) {
    return false
  }
  if (number < 123 || number > 999) {
    return false
  }
  // TODO: 범위 내 숫자 유효성 검사. 서로 다른 세 자리 수
  let numberSet = new Set(numberString.split(""))
  if (numberSet.size !== 3) {
    return false
  }
  return true
}

function getUserInputNumbers() {
  const input = document.querySelector("#user-input")
  userInputNumbers = input.value
  if (!isValidation(userInputNumbers)) {
    alert("유효한 숫자(서로 다른 세 자리 수)를 입력해 주세요")
    input.value = ""
  }
}

function btnEvent() {
  const btn = document.querySelector("#submit")
  btn.addEventListener("click", ()=>getUserInputNumbers())
}



export default function BaseballGame() {
  // TODO 1: 컴퓨터가 임의의 서로 다른 3개의 숫자로 세자리 수를 만드는 기능
  let numberString = getComputerInputNumbers().join('')
  console.log(numberString)

  // TODO 2: 사용자로부터 입력받은 값의 유효성 판단해서 게임 진행 여부를 결정하는 기능
  setInputMaxLength()
  btnEvent()
  console.log(numberString, userInputNumbers)




  this.play = function (computerInputNumbers, userInputNumbers) {
    /**
    * TODO 3:
    * 컴퓨터가 만든 숫자열과 사용자에게 받은 입력 값(숫자열)을 비교하는 `play`메서드 작성
    * 
    * 아래 로직 기반으로 만들기
    *   1. 두 입력 값 사이에 같은 숫자가 있는지, 있으면 몇 개인지 여부를 판단한다.
    *   2. 같은 숫자에 대해서 위치를 따진다.
    *   3. 결과를 `String` 타입으로 리턴한다.
    */
    return `${0} 볼 ${0} 스트라이크`;
  };

  // TODO 4: 결과가 정답이면 게임 재시작 여부를 묻는 버튼 활성화
}

// export default class BaseballGame {
//   play(computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   }
// }

new BaseballGame();
