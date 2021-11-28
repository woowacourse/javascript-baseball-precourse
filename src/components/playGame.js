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
