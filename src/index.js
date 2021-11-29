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

  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }
}