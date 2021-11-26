import getBallCount from './utils/getBallCount.js';
import getStrikeCount from './utils/getStrikeCount.js';
import { STR_SUCCESS, STR_NOTHING } from './consts.js';

export default class BaseballGame {
  static play(computerInputNumbers, userInputNumbers) {
    if (computerInputNumbers === userInputNumbers) return STR_SUCCESS;

    const ball = getBallCount(computerInputNumbers, userInputNumbers);
    const strike = getStrikeCount(computerInputNumbers, userInputNumbers);

    if (ball === 0 && strike === 0) return STR_NOTHING;

    let result = '';
    if (ball) result += `${ball}볼 `;
    if (strike) result += `${strike}스트라이크`;

    return result;
  }
}
