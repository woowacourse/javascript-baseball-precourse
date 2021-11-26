import { BALL, STRIKE, NOTHING, WIN } from './constants.js';

export const compareInputWithAnswer = (
  computerInputNumbers,
  userInputNumbers
) => {
  let result = {
    strike: 0,
    ball: 0,
  };

  computerInputNumbers.split('').forEach((element) => {
    if (userInputNumbers.includes(element)) {
      result.ball += 1;
    }
  });

  for (let index = 0; index < computerInputNumbers.length; index++) {
    if (computerInputNumbers[index] === userInputNumbers[index]) {
      result.strike += 1;
    }
  }

  result.ball -= result.strike;

  return result;
};

export const getHintString = (result) => {
  const { strike, ball } = result;

  if (strike == 0 && ball > 0) {
    return ball + BALL;
  } else if (ball === 0 && strike > 0 && strike < 3) {
    return strike + STRIKE;
  } else if (ball > 0 && strike > 0 && strike < 3) {
    return ball + BALL + ' ' + strike + STRIKE;
  } else if (ball === 0 && strike === 0) {
    return NOTHING;
  } else {
    return WIN;
  }
};
