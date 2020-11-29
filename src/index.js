export default class BaseballGame {
  constructor() {
    this.computerRandomNumbers = this.getComputerRandomNumbers();
    this.addClickEventListener();
  }
  
  // 3개의 랜덤 숫자를 생성하는 함수
  getComputerRandomNumbers() {
    let result = "";
    while(result.length < 3) {
      const tempNum = Math.floor(Math.random() * (10 - 1)) + 1;
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
    if(userInputNumbers.length != 3 || userInputNumbers.length !== temp.size) {
      alert("1~9까지의 수를 중복없이 3개를 입력해 주세요😊");
      document.getElementById('user-input').value = "";
    }
  }

  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }
  //버튼에 클릭 이벤트 리스너를 추가하는 함수
  addClickEventListener() {
    const submit = document.getElementById("submit");
    //this바인딩 문제로 화살표 함수 사용
    submit.addEventListener("click", () => {this.checkUserInputNumbers()}); 
  }
}

 new BaseballGame();
