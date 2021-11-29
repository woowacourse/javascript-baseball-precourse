/**
 * 무작위로 선택된 숫자를 힌트를 통해 맞춰가는 베이스볼 게임 클래스
 */
export default class BaseballGame {
  /**
   * 클래스 초기화시 index.html element와 정답시 로드할 element를 
    property로 저장 및 정답 숫자를 생성
   */
  constructor() {
    this.configureElementProperties();
    this.configureAnswerElementProperties();
    this.answerNumbers = this.generateAnswerNumbers();
  }
  
  /**
   * index.html의 element reference들을 property로 저장하는 메소드
   * submit 이벤트 발생시 onClickSubmitButton 동작
   */
  configureElementProperties() {
    this.$input = document.querySelector('#user-input');
    this.$submit = document.querySelector('#submit');
    this.$submit.addEventListener('click', this.onClickSubmitButton);
    this.$result = document.querySelector('#result');
  }
    
  /**
   * 정답 시 로드, 재시작 시 삭제되는 element를 property로 저장하는 메소드
   */
  configureAnswerElementProperties() {
    this.$answerResultComment = document.createElement('h4');
    this.$answerResultComment.textContent = "🎉정답을 맞추셨습니다!🎉";
    
    this.$resetComment = document.createElement('span');
    this.$resetComment.textContent = "게임을 새로 시작하시겠습니까? ";
    
    this.$resetButton = document.createElement('button');
    this.$resetButton.id = "game-restart-button";
    this.$resetButton.innerText = "게임 재시작";
    this.$resetButton.addEventListener('click', this.onClickResetButton);
  }

  /**
   * 1~9까지의 숫자를 중복없이 3자리 생성하는 메소드
   * @return {String} 3자리 숫자
   */
  generateAnswerNumbers() {
    const listSize = 3;
    const minNumber = 1;
    const maxNumber = 9;
    let numbers = new Set();

    while (numbers.size < listSize) {
      numbers.add(MissionUtils.Random.pickNumberInRange(minNumber, maxNumber));
    }

    return Array.from(numbers).join("");
  }

  /**
   * submit버튼 클릭시 play메소드를 정답 숫자, 입력 숫자로 실행 시키는 메소드
   * @param {*} event 
   */
  onClickSubmitButton = (event) => {
    event.preventDefault();
    console.log(this.answerNumbers)
    this.play(Number(this.answerNumbers), Number(this.$input.value));
  }

  /**
   * reset버튼 클릭시 answer element들 삭제, 정답 재생성하는 메소드
   * @param {*} event 
   */
  onClickResetButton = (event) => {
    this.$input.value = '';
    this.$input.focus();
    this.$answerResultComment.remove();
    this.$resetComment.remove();
    this.$resetButton.remove();
    this.answerNumbers = this.generateAnswerNumbers();
  }

  /**
   * 스트라이크, 볼의 결과를 담은 result객체를 받아서 화면에 로드 또는
    로드하는 함수를 실행
   * @param {Object} result {strike, ball}
   * @returns {String} 결과, 정답, 낫싱 텍스트 
   */
  displayResult(result) {
    if (result.strike === this.answerNumbers.length){
      this.displayCorrectAnswerResult();
      return "정답";
    }
    
    if (!result.strike && !result.ball){
      this.$result.textContent = "낫싱";
      return "낫싱";
    }
  
    return this.displayStrikeAndBallHint(result);
  }
  
  /**
   * 정답일 경우 answer element들을 화면에 로드하는 메소드
   * 정답 텍스트, 재시작을 물어보는 텍스트, 재시작 버튼을
    result element에 추가
   */
  displayCorrectAnswerResult() {
    this.$result.textContent = "";
    this.$resetComment.appendChild(this.$resetButton);
    this.$result.appendChild(this.$answerResultComment);
    this.$result.appendChild(this.$resetComment);
  }
  
  /**
   * 정답과 낫싱이 아닐경우 스트라이크와 볼을 화면에 로드하는 메소드
   * @param {Object} result {strike, ball}
   * @returns {String} 스트라이크, 볼 텍스트
   */
  displayStrikeAndBallHint(result) {
    const resultText = `${result.ball ? result.ball+"볼" : ""}` +
      `${result.strike && result.ball ? " " : ""}`+
      `${result.strike ? result.strike+"스트라이크" : ""}`;
      
    this.$result.textContent = resultText;
    return resultText;
  }

  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }
}