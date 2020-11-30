import { NUMBERS_LENGTH, NO_MATCH_TEXT, ALL_MATCH_TEXT } from '../constants/configuration.js'
import { checkInputNumbers } from '../utils/validation.js';

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
  _getPlayResultString({ strikeCount, ballCount }) {
    let resultString;
    if (strikeCount == 0 && ballCount == 0) {
      resultString = NO_MATCH_TEXT;
    } else if (strikeCount === NUMBERS_LENGTH) {
      resultString = ALL_MATCH_TEXT;
    } else if (strikeCount === 0) {
      resultString = `${ballCount}볼`;
    } else if (ballCount === 0) {
      resultString = `${strikeCount}스트라이크`;
    } else {
      resultString = `${ballCount}볼 ${strikeCount}스트라이크`;
    }

    return resultString;
  }
  play(computerInputNumbers, userInputNumbers) {
    let resultString = '';
    if (checkInputNumbers(userInputNumbers)) {
      const points = this._calculatePoints(computerInputNumbers, userInputNumbers);
      resultString = this._getPlayResultString(points);
    }

    return resultString;
  }
}