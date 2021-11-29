export default class BaseballGame {
  static validNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  #size; // 추리해야 하는 숫자 개수

  constructor(size) {
    this.#size = size;
  }

  get size() {
    return this.#size;
  }

  static inValidRange(num) {
    return BaseballGame.validNumbers.includes(num);
  }

  isValidInputString(inputString) {
    const inputNumbers = inputString.split("").map(Number);
    const hasNoNaN = !inputNumbers.some(Number.isNaN);
    const isValidSize = inputNumbers.length === this.#size;
    const isValidValue = inputNumbers.every(BaseballGame.inValidRange);
    const isUnique = inputNumbers.length === new Set(inputNumbers).size;
    return hasNoNaN && isValidSize && isValidValue && isUnique;
  }

  parseInputString(inputString) {
    if (!this.isValidInputString(inputString)) {
      return null;
    }
    return inputString.split("").map(Number);
  }

  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }
}
