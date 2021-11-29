import { BASEBALL } from '../constants.js';
 
 // get Ball
 export const getBallCount = (computerNum, userNum) => {
    let ball = 0;
    let i;
    for (i = 0; i < 3; i += 1) {
      if (computerNum[i] !== userNum[i] && computerNum.includes(userNum[i])) {
        ball += 1;
      }
    }

    return ball;
  };

  // get Strike
  export const getStrikeCount = (computerNum, userNum) => {
    let strike = 0;
    let i;
    for (i = 0; i < 3; i += 1) {
      if (computerNum[i] === userNum[i]) {
        strike += 1;
      }
    }

    return strike;
  };

  // return ball, strike result
  export const getResultText = (strike, ball) => {
    let result = '';
    if (strike === 3) {
      return BASEBALL.ANSWER;
    }
    if (strike === 0 && ball === 0) {
      return BASEBALL.NOTHING;
    }
    if (ball !== 0) {
      result += `${ball}${BASEBALL.BALL} `;
    }
    if (strike !== 0) {
      result += `${strike}${BASEBALL.STRIKE}`;
    }
    return result;
  }