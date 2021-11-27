import ComputerAnswer from "./components/computerAnswer.js"
import { checkValidUserInput } from "./functions/index.js"
export default class BaseballGame {

  /**
   * @param {Array} numRange 길이가 2인 배열. [startInclusive, endInclusive]. 배열 안 숫자가 [0-9]라고 가정한다.
   * @param {Number} numDigit 총 자리수
   */
  constructor(numRange, numDigit){
    this.numRange = numRange;
    this.numDigit = numDigit;
    this.computerNumber = new ComputerAnswer(numRange, numDigit);
    this.#initElements();
    this.#addOnClickListeners();
  }

  /**
   * @summary 확인 버튼, 텍스트 박스 elements 찾기
   */
  #initElements(){
    this.$inputText = document.getElementById('user-input');
    this.$submitButton = document.getElementById('submit');
  }

  /**
   * @summary 확인 버튼, 재시작 버튼 Listener 추가
   */
  #addOnClickListeners(){
    this.$submitButton.addEventListener('click', this.#onClickSubmitHandler.bind(this))
  }

  /**
   * @summary 확인 버튼 누를 시 실행되는 함수. 유저 입력값을 확인하고 게임을 진행.
   */
  #onClickSubmitHandler(){
    const userInputNumbers = this.$inputText.value
    const [isValidInput, errorMsg] = checkValidUserInput(userInputNumbers, this.numRange, this.numDigit);
    if (isValidInput){
      const resultStr = this.play(this.computerNumber.getNumber(), userInputNumbers);
    }else{
      alert(errorMsg);
    }
  }

  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String"
  }


}

new BaseballGame([1,9], 3)
