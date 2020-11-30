export default class BaseballGame {
  constructor() {
    this.NUMBERS_LENGTH = 3;
    this.computerRandomNumbers;
    this.getComputerRandomNumbers();
    this.addClickEventListener();
  }
  // 볼, 스트라이크의 횟수를 계산하는 함수
  checkBallAndStrike(computerInputNumbers, userInputNumbers) {
    const length = computerInputNumbers.length;
    // 볼과 스트라이크 수를 담는 배열
    let count = [0, 0];
    for(let i = 0; i < length; i++) {
      const position = userInputNumbers.indexOf(computerInputNumbers[i]);
      if(position > -1) {
        const ballOrStrike = position === i ? 1 : 0;
        count[ballOrStrike]++;
      }
    }
    return count;
  }
  // 볼과 스트라이크의 횟수에 따라 결과값을 설정하는 함수
  getResult(count) {
    let result = '';
    if(count[0] > 0) {
      result += `${count[0]}볼 `;
    }
    if(count[1] > 0) {
      result += `${count[1]}스트라이크`;
    }
    if(result === '') {
      result = '낫싱';
    }
    return result;
  }
  // 컴퓨터의 숫자와 사용자의 입력값을 비교하여 결과값을 반환하는 함수
  play(computerInputNumbers, userInputNumbers) {
    let result;
    if(computerInputNumbers === userInputNumbers) {
      result = '정답';
    }
    else {
      result = this.getResult(this.checkBallAndStrike(computerInputNumbers, userInputNumbers));
    }
    return result;
  }
  // 3개의 랜덤 숫자를 생성하는 함수
  getComputerRandomNumbers() {
    let result = '';
    while(result.length < this.NUMBERS_LENGTH) {
      const tempNum = Math.floor(Math.random() * 9) + 1;
      if(!result.includes(tempNum)) {
        result += tempNum;
      }
    }
    this.computerRandomNumbers = result;
  }
  // 게임진행을 위해 입력창, 확인버튼, 결과창을 재생성하는 함수
  addGameElements() {
    const gameResult = document.getElementById('game-result');
    const userInput = document.createElement('input');
    const submit = document.createElement('button');
    const resultText = document.createElement('h3');
    const result = document.createElement('div');
    userInput.setAttribute('type', 'text');
    userInput.setAttribute('id', 'user-input');
    submit.setAttribute('id', `submit`);
    result.setAttribute('id', `result`);
    submit.append("확인");
    submit.style.marginLeft = '6px';
    resultText.append("📄 결과");
    gameResult.append(userInput, submit, resultText, result);
    this.addClickEventListener();
  }
  // 게임을 재시작하기 위해서 결과들을 모두 초기화하는 함수
  gameRestart() {
    const playResult = document.getElementById('game-result');
    playResult.innerHTML = "";
    this.addGameElements();
    this.getComputerRandomNumbers();
  }
  // 기존 엘리먼트들의 id속성값을 제거하는 함수
  removeElementsAttribute() {
    const userInput = document.getElementById('user-input');
    const submit = document.getElementById('submit');
    const result = document.getElementById('result');
    //submit.removeEventListener('click', this.checkUserInputNumbers);
    userInput.removeAttribute('id');
    submit.removeAttribute('id');
    result.removeAttribute('id'); 
  }
  // 정답을 못 맞췄을때 실행되는 함수
  wrongResult() {
    this.removeElementsAttribute();
    this.addGameElements();
  }
  // 정답을 맞췄을때 엘리먼트들을 새로 생성하는 함수
  correctResult(result) {
    result.innerHTML = `<p><strong>🎉정답을 맞추셨습니다!🎉</strong></p>
                        <span>게임을 새로 시작하시겠습니까?</span>
                        <button id="game-restart-button">재시작</button>`;
    const gameRestartBtn = document.getElementById('game-restart-button');
    gameRestartBtn.addEventListener('click', () => {this.gameRestart()});
  }
  // 게임 결과를 화면에 출력하는 함수
  printResult(playResult) {
    const result = document.getElementById(`result`);
    if(playResult === '정답') {
      this.correctResult(result);
    }
    else {
      result.innerHTML = `<p>${playResult}</p>`;
      this.wrongResult();
    }
  }
  // 사용자의 입력값이 조건에 맞는지 확인하는 함수
  isNumberValid(userInputNumbers) {
    let isValid = true;
    const length = userInputNumbers.length;
    const temp = new Set(userInputNumbers);
    if(length != this.NUMBERS_LENGTH || length != temp.size) {
      isValid = false;
    }
    for(let i = 0 ; i < this.NUMBERS_LENGTH; i++) {
      const elem = userInputNumbers[i];
      if(isNaN(elem) || elem == 0) {
        isValid = false;
        break;
      }
    }
    return isValid;
  }
  // 사용자의 입력값에 따라 알림창을 띄우거나 게임을 진행하는 함수
  checkUserInputNumbers() {
    const userInput = document.getElementById(`user-input`);
    const userInputNumbers = userInput.value;
    if(!this.isNumberValid(userInputNumbers)) {
      alert('1~9까지의 수를 중복없이 3개만 입력해 주세요😊');
      userInput.value = '';
    }
    else { 
      console.log(this.computerRandomNumbers);
      this.printResult(this.play(this.computerRandomNumbers, userInputNumbers));
    }
  }
  //버튼에 클릭 이벤트 리스너를 추가하는 함수
  addClickEventListener() {
    const submit = document.getElementById(`submit`);
    //this바인딩 문제로 화살표 함수 사용
    submit.addEventListener('click', () => {this.checkUserInputNumbers()});
  }
}

 new BaseballGame();
