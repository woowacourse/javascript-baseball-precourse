import { isNumberObject } from '../common/index.js';
import { BASEBALL, EMPTY } from '../constants/index.js';

/* eslint-disable no-undef */
const { pickNumberInRange } = MissionUtils.Random;

export default class BaseballGame {
  /**
   * BaseballGame 설정을 진행합니다.
   *
   * @param {HTMLElement} element
   * @param {Object} state : {
   *                            digit: 자리수,
   *                            exclude: 예외,
   *                            start: 시작 숫자,
   *                            end: 종료 숫자
   *                          }
   */
  constructor(element, state) {
    const { digit, exclude, start, end } = isNumberObject(state);

    this.$element = element;
    this.digit = digit;
    this.exclude = exclude;
    this.start = start;
    this.end = end;

    this.initGame();
  }

  /**
   * 게임을 초기화합니다.
   */
  initGame() {
    this.$element.innerHTML = EMPTY;
    this.computerInputNumbers = this.getRandomNumbers(this.start, this.end);
  }

  /**
   * 컴퓨터의 랜덤 타겟 넘버를 반환합니다.
   *
   * @returns String(Number(any))
   */
  getRandomNumbers() {
    const result = new Set();
    /* eslint-disable no-constant-condition */
    while (result.size < this.digit) {
      result.add(pickNumberInRange(this.start, this.end));
    }
    return [...result].join(EMPTY);
  }

  /**
   * 스트라이크 개수(자리수 - 불일치 개수)를 반환합니다.
   *
   * @param {Number} digit
   * @param {Number} mismatch
   * @returns {Number} StrikeCount
   */
  getStrikeCount(digit, mismatch) {
    return digit - mismatch;
  }

  /**
   * 볼 개수(자리수 - 비슷한 개수 + 불일치 개수)를 반환합니다.
   *
   * @param {Number} digit
   * @param {Number} similar
   * @param {Number} mismatch
   * @returns {Number} BallCount
   */
  getBallCount(digit, similar, mismatch) {
    return digit - similar + mismatch;
  }

  /**
   * 입력 받은 값과 컴퓨터의 타겟 넘버를 비교합니다.
   *
   * @param {String} userInputNumbers
   * @returns {Number[]}
   */
  checkCorrectNumber(userInputNumbers) {
    const targetNumbers = this.computerInputNumbers.split(EMPTY);
    const restNumbers = targetNumbers.reduce((numbers, value, index) => {
      if (userInputNumbers[index] !== value) numbers.push(userInputNumbers[index]);
      return numbers;
    }, []);

    const { length: mismatch } = restNumbers;
    const { size: similar } = new Set([...restNumbers, ...targetNumbers]);

    const strike = this.getStrikeCount(this.digit, mismatch);
    const ball = this.getBallCount(this.digit, similar, mismatch);

    return [strike, ball];
  }

  /**
   * 게임 결과를 반환합니다.
   *
   * @param {Number} strike
   * @param {Number} ball
   * @returns {String}
   */
  getGameResult(strike, ball) {
    if (strike === this.digit) return BASEBALL.WIN;
    if (strike + ball === BASEBALL.ZERO) return BASEBALL.NOTING;
    return `${ball ? `${ball}볼` : EMPTY} ${strike ? `${strike}스트라이크` : EMPTY}`.trim();
  }

  /**
   * 게임을 진행합니다.
   *
   * @param {String} userInputNumbers
   */
  play(userInputNumbers) {
    const [strike, ball] = this.checkCorrectNumber(userInputNumbers);
    const gameResult = this.getGameResult(strike, ball);
    this.render(gameResult);
  }

  /**
   * play의 결과를 받아 해당 컴포넌트에 선언된 엘리먼트에 렌더링합니다.
   *
   * @param {String} sentence
   */
  render(sentence) {
    let resultText = `<p>${sentence}</p>`;

    if (sentence === BASEBALL.WIN) {
      resultText = `
      <p>🎉<strong>정답을 맞추셨습니다</strong>🎉</p>
      <p>게임을 새로 시작하시겠습니까? <button id="game-restart-button">재시작</button></p>`;
    }

    this.$element.innerHTML = resultText;
  }
}
