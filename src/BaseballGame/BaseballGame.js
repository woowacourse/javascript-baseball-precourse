import {
  generateRandomNumbers,
  compareNumbers,
  generateResultString,
} from "./BaseballGameUtils.js";

export default function BaseballGame() {
  this.answer = generateRandomNumbers();

  this.initAnswer = function initAnswer() {
    this.answer = generateRandomNumbers();
  };

  this.play = function play(computerInputNumbers, userInputNumbers) {
    const result = compareNumbers(computerInputNumbers, userInputNumbers);
    const resultString = generateResultString(result);

    return resultString;
  };

  // play wrapper
  this.playWithGeneratedNumber = function playWithGeneratedNumber(
    userInputNumbers
  ) {
    return this.play(this.answer, userInputNumbers);
  };
}
