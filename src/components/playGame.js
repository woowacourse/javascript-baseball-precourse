import { RESULT_MESSAGE } from "../constants/constants.js";

export function countStrikeAndBall(computerInputNumbers, userInputNumbers) {
  let count = {
    strike: 0,
    ball: 0,
  };

  for (let i = 0; i < computerInputNumbers.length; i++) {
    if (computerInputNumbers[i] === userInputNumbers[i]) {
      count.strike++;
    } else if (computerInputNumbers.includes(userInputNumbers[i])) {
      count.ball++;
    }
  }

  return count;
}

export function getResult(count) {
  let result = "";

  if (count.strike === 3) {
    return RESULT_MESSAGE.CORRECT;
  }
  if (count.strike === 0 && count.ball === 0) {
    return RESULT_MESSAGE.NOTHING;
  }
  if (count.ball > 0) {
    result += `${count.ball}${RESULT_MESSAGE.BALL} `;
  }
  if (count.strike > 0) {
    result += `${count.strike}${RESULT_MESSAGE.STRIKE}`;
  }

  return result;
}
