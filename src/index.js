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
  }
  
  /**
   * index.html의 element reference들을 property로 저장하는 메소드
   * submit 이벤트 발생시 onClickSubmitButton 동작
   */
  configureElementProperties() {
    this.$input = document.querySelector('#user-input');
    this.$submit = document.querySelector('#submit');
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
  }


  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }
}