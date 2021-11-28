export default class ComputerAnswer{
  
  /**
   * @param {Array} numRange 길이가 2인 배열. [startInclusive, endInclusive]. 배열 안 숫자가 [0-9]라고 가정한다.
   * @param {Number} numDigit 총 자리수
   */
  constructor(numRange, numDigit) {
    this.numRange = numRange;
    this.numDigit = numDigit;
    this.generateNewAnswer();
  }
  
  /**
   * @summary 새로운 랜덤 숫자 생성. this.numSet에 set로 저장.
   */
  generateNewAnswer() {
    this.numSet = new Set() 
    for (let i = 0; i < this.numDigit; i++) {
      this.#addRandomNumber();
    }
  }

  /**
   * @summary this.numSet에 새로운 중복되지 않는 랜덤 숫자 추가
   */
  #addRandomNumber() {
    let randNum = this.#generateSingleNumber();
    while (this.numSet.has(randNum)) {
      randNum = this.#generateSingleNumber();
    }
    this.numSet.add(randNum);
  }

  /**
   * @returns {number} this.numRange 범위를 기준으로 랜덤 정수 리턴
   */
  #generateSingleNumber() {
    return MissionUtils.Random.pickNumberInRange(this.numRange[0], this.numRange[1]);
  }

  /**
   * @returns {number} 생성된 this.numDigits 자릿수 숫자 리턴
   */
  getNumber() {
    return parseInt([...this.numSet].join(''));
  }
}
