import { NUMBERS_LENGTH } from '../constants/configuration.js'

export default class BaseballGame {
  _calculatePoints(numbers1, numbers2) {
    const points = {
      strikeCount: 0,
      ballCount: 0,
    };
    const nonStrikeNumbers = [];
    for (let i = 0; i < NUMBERS_LENGTH; i++) {
      if (numbers1[i] === numbers2[i]) {
        points.strikeCount += 1;
      } else {
        nonStrikeNumbers.push(numbers1[i]);
        nonStrikeNumbers.push(numbers2[i]);
      }
    }
    points.ballCount = nonStrikeNumbers.length - new Set(nonStrikeNumbers).size;

    return points;
  }
  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }
}