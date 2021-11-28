import ComputerAnswer from "./components/computerAnswer.js";
import { checkValidUserInput } from "./functions/index.js";
import constants from './constants/index.js';

export default class BaseballGame {

  constructor() {
    this.numRange = constants.GAME_NUM_RANGE;
    this.numDigit = constants.GAME_NUM_DIGIT;
    this.computerNumber = new ComputerAnswer(this.numRange, this.numDigit);
    this.#initElements();
    this.#addOnClickListeners();
  }

  /**
   * @summary 확인 버튼, 텍스트 박스 elements 찾기
   */
  #initElements(){
    this.$inputText = document.getElementById('user-input');
    this.$submitButton = document.getElementById('submit');
    this.$resultDiv = document.getElementById('result');
    this.#initRestartButton();
  }

  /**
   * @summary 재시작 버튼 element 생성하고 속성에 저장하기.
   */
  #initRestartButton(){
    this.$restartButton = document.createElement('button');
    this.$restartButton.setAttribute('id', 'game-restart-button');
    this.$restartButton.textContent = constants.RESTART_GAME;
  }

  /**
   * @summary 확인 버튼, 재시작 버튼 Listener 추가
   */
  #addOnClickListeners(){
    this.$submitButton.addEventListener('click', this.#onClickSubmitHandler.bind(this));
    this.$restartButton.addEventListener('click', this.#onClickRestartHandler.bind(this));
  }

  /**
   * @summary 확인 버튼 누를 시 실행되는 함수. 유저 입력값을 확인하고 게임을 진행.
   */
  #onClickSubmitHandler(){
    const userInputNumbers = this.$inputText.value
    const [isValidInput, errorMsg] = checkValidUserInput(userInputNumbers, this.numRange, this.numDigit);
    if (isValidInput){
      const resultStr = this.play(this.computerNumber.getNumber(), parseInt(userInputNumbers));
      this.#displayResult(resultStr);
    }else{
      alert(errorMsg);
    }
  }

  /**
   * @summary 재시작 버튼 누를 시 실행되는 함수. 컴퓨터 숫자를 다시 생성. 텍스트 박스 초기화
   */
  #onClickRestartHandler(){
    this.#setNewComputerAnswer();
    this.#emptyTextInput();
    this.#removeResult();
  }

  /**
   * @summary 컴퓨터 숫자 다시 덤 생성.
   */
  #setNewComputerAnswer(){
    this.computerNumber.generateNewAnswer();
  }

  /**
   * @summary 텍스트 박스 입력값 초기화
   */
  #emptyTextInput(){
    this.$inputText.value = '';
  }

  /**
   * @summary 결과 초기화
   */
  #removeResult(){
    this.$resultDiv.innerHTML = "";
  }

  /**
   * @param {Number} computerInputNumbers 3자리 중복 없는 컴퓨터 숫자
   * @param {Number} userInputNumbers 3자리 중복 없는 유저값 숫자
   * @returns {String} 게임 결과 스트링 값 리턴.
   */
  play(computerInputNumbers, userInputNumbers) {
    console.log(computerInputNumbers, userInputNumbers);
    const strikeCnt = this.#getStrikeCount(computerInputNumbers, userInputNumbers);
    const ballCnt = this.#getBallCount(computerInputNumbers, userInputNumbers);
    return this.#getResultString(strikeCnt,ballCnt);
  }

  /** 
   * @param {Number} computerInputNumbers 3자리 중복 없는 컴퓨터 숫자
   * @param {Number} userInputNumbers 3자리 중복 없는 유저값 숫자
   * @returns {Number} 스트라이크 횟수 리턴
   */
  #getStrikeCount(computerInputNumbers, userInputNumbers) {
    const userInputStr = userInputNumbers.toString();
    return [...computerInputNumbers.toString()].filter((num, i) => num === userInputStr[i]).length;
  }

  /** 
   * @param {Number} computerInputNumbers 3자리 중복 없는 컴퓨터 숫자
   * @param {Number} userInputNumbers 3자리 중복 없는 유저값 숫자
   * @returns {Number} 볼 횟수 리턴
   */
  #getBallCount(computerInputNumbers, userInputNumbers){
    const computerNumStr = computerInputNumbers.toString();
    const computerNumSet = new Set([...computerNumStr]);
    return [...userInputNumbers.toString()].filter((num, i) => computerNumSet.has(num) && num !== computerNumStr[i]).length;
  }

  /** 
   * @param {Number} strikeCount 스트라이크 횟수
   * @param {Number} ballCount 볼 횟수
   * @returns {Number} 스트라이크, 볼 결과 스트링으로 변환
   */
  #getResultString(strikeCount, ballCount){
    if(strikeCount === 0 && ballCount == 0) return constants.NOTHING_MSG;

    const msgList = []
    if (ballCount > 0) msgList.push(ballCount.toString() + constants.BALL_MSG);
    if (strikeCount > 0) msgList.push(strikeCount.toString() + constants.STRIKE_MSG);

    return msgList.join(' ');
  }

  /**
   * @summary play 결과를 html element로 추가
   * @param {String} resultMsg play 함수 결과값
   */
  #displayResult(resultMsg){
    if (this.#isCorrectResult(resultMsg)){
      this.#addReplayHTML()
    }else{
      this.#addTextHTML(resultMsg);
    }
  }

  /**
   * @summary 게임 정답 시 축하 메세지와 재시작 버튼 추가
   */
  #addReplayHTML(){
    this.$resultDiv.innerHTML = constants.WIN_MESSAGE;
    this.$resultDiv.appendChild(this.$restartButton);
  }

  /**
   * @summary play 메세지값을 통해 유저가 승리했는지 확인
   */
  #isCorrectResult(resultMsg){
    return resultMsg === this.numDigit+constants.STRIKE_MSG;
  }

  /**
   * @summary 주워진 String을 결과 div에 추가
   */
  #addTextHTML(message){
    this.$resultDiv.innerHTML = message;
  }
}

new BaseballGame();
