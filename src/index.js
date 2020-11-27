export default class BaseballGame {
  constructor() {
    this.submit = document.getElementById('submit');
    this.submit.addEventListener('click', this.checkUserInputNumbers);
    this.computerInputNumbers = this.getComputerInputNumbers();
  }
  // 3개의 랜덤 숫자를 생성하는 함수
  getComputerInputNumbers() {
    let result = "";
    while(result.length < 3) {
      let tempNum = Math.floor(Math.random() * (10 - 1)) + 1;
      // 중복되는 숫자가 아닐시에만 결과값에 추가함
      if(!result.includes(tempNum)) {
        result += tempNum;
      }
    }
    return result;
  }
  // 사용자의 입력값이 조건에 맞는지 확인하는 함수
  checkUserInputNumbers() {
    const userInputNumbers = document.getElementById('user-input').value;
    const temp = new Set(userInputNumbers);
    // 사용자의 입력값이 세자리를 넘거나 중복이 존재할 경우
    if(userInputNumbers.length > 3 || userInputNumbers.length !== temp.size) {
      // alert창을 띄우고 입력창 초기화함
      alert("1~9까지의 수를 중복없이 3개만 입력해 주세요😊");
      document.getElementById('user-input').value = "";
    }
  }

  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }

}

 new BaseballGame();
