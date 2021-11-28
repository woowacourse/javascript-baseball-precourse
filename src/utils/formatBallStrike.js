import { RESULT_BALL, RESULT_STRIKE } from '../consts.js';

function formatBallStrike(ball, strike) {
  let result = '';
  if (ball) result += `${ball}${RESULT_BALL} `;
  if (strike) result += `${strike}${RESULT_STRIKE}`;

  return result;
}

export default formatBallStrike;
