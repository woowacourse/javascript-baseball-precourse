import { zip } from "./utils.js";

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

  getStrikes(answerNumbers, inputNumbers) {
    return zip(answerNumbers, inputNumbers).filter(
      ([num1, num2]) => num1 === num2
    ).length;
  }

  getBalls(answerNumbers, inputNumbers) {
    const total = inputNumbers.filter((num) =>
      answerNumbers.includes(num)
    ).length;
    const strikes = this.getStrikes(answerNumbers, inputNumbers);
    return total - strikes;
  }

  play(computerInputNumbers, userInputNumbers) {
    const balls = this.getBalls(computerInputNumbers, userInputNumbers);
    const strikes = this.getStrikes(computerInputNumbers, userInputNumbers);

    if (balls === 0 && strikes === 0) {
      return "낫싱";
    }

    const spaceString = balls === 0 ? "" : " ";
    const ballString = balls === 0 ? "" : `${balls}볼`;
    const strikeString = strikes === 0 ? "" : `${strikes}스트라이크`;
    return `${ballString}${spaceString}${strikeString}`;
  }
}
