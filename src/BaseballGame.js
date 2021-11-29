/* global MissionUtils */

import {
  NUMBER_RANGE_MIN,
  NUMBER_RANGE_MAX,
  RESULT_NOTHING,
} from "./config.js";

export default function BaseballGame() {
  this.generateRandomNumbers = function generateRandomNumbers() {
    const numberSet = new Set();

    while (numberSet.size < 3) {
      const newNumber = MissionUtils.Random.pickNumberInRange(
        NUMBER_RANGE_MIN,
        NUMBER_RANGE_MAX
      );

      if (!numberSet.has(newNumber)) {
        numberSet.add(newNumber);
      }
    }

    return [...numberSet].join("");
  };

  this.answer = this.generateRandomNumbers();

  this.initAnswer = function initAnswer() {
    this.answer = this.generateRandomNumbers();
  };

  this.play = function play(computerInputNumbers, userInputNumbers) {
    const result = this.compareNumbers(computerInputNumbers, userInputNumbers);
    const resultString = this.generateResultString(result);

    return resultString;
  };

  // play wrapper
  this.playWithGeneratedNumber = function playWithGeneratedNumber(
    userInputNumbers
  ) {
    return this.play(this.answer, userInputNumbers);
  };

  this.compareNumbers = function compareNumbers(
    computerInputNumbers,
    userInputNumbers
  ) {
    const answerSet = new Set(computerInputNumbers);
    let ballCount = 0;
    let strikeCount = 0;
    let idx = 0;

    for (; idx < 3; idx += 1) {
      if (userInputNumbers[idx] === computerInputNumbers[idx]) {
        strikeCount += 1;
      } else if (answerSet.has(userInputNumbers[idx])) {
        ballCount += 1;
      }
    }

    return { ballCount, strikeCount };
  };

  this.generateResultString = function generateResultString({
    ballCount,
    strikeCount,
  }) {
    const resultString = [];

    if (ballCount) {
      resultString.push(`${ballCount}볼`);
    }

    if (strikeCount) {
      resultString.push(`${strikeCount}스트라이크`);
    }

    if (ballCount === 0 && strikeCount === 0) {
      resultString.push(RESULT_NOTHING);
    }

    return resultString.join(" ");
  };
}
