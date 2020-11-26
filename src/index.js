export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = this.getComputerInputNumbers();
  }
  //3개의 랜덤 숫자를 생성하는 함수
  getComputerInputNumbers() {
    let result = "";
    while(result.length < 3) {
      let tempNum = Math.floor(Math.random() * (10 - 1)) + 1;
      //중복되는 숫자가 아닐시에만 결과값에 추가함
      if(!result.includes(tempNum)) {
        result += tempNum;
      }
    }
    return result;
  }

  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }
}

 new BaseballGame();
