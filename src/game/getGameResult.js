import {
  ANSWER,
  BALL,
  GAME_NUMBER_LENGTH,
  NOTHING,
  STRIKE,
} from "../constants/index.js";

const checkStrikeCount = (computerInputNumbers, userInputNumbers) => {
  return userInputNumbers.reduce((count, cur, index) => {
    if (cur === computerInputNumbers[index]) count += 1;
    return count;
  }, 0);
};

const checkBallCount = (computerInputNumbers, userInputNumbers) => {
  return userInputNumbers.reduce((count, cur, index) => {
    if (
      cur !== computerInputNumbers[index] &&
      computerInputNumbers.includes(cur)
    )
      count += 1;

    return count;
  }, 0);
};

const numberToArray = (number) =>
  number
    .toString()
    .split("")
    .map((value) => parseInt(value, 10));

const getGameResultText = (strikeCount, ballCount) => {
  if (ballCount === 0 && strikeCount === 0) {
    return NOTHING;
  }
  if (ballCount === 0 && strikeCount === GAME_NUMBER_LENGTH) return ANSWER;
  if (ballCount === 0) return `${strikeCount}${STRIKE}`;
  if (strikeCount === 0) return `${ballCount}${BALL}`;

  return `${ballCount}${BALL} ${strikeCount}${STRIKE}`;
};

const getGameResult = (computerInputNumbers, userInputNumbers) => {
  computerInputNumbers = numberToArray(computerInputNumbers);
  userInputNumbers = numberToArray(userInputNumbers);

  const strikeCount = checkStrikeCount(computerInputNumbers, userInputNumbers);
  const ballCount = checkBallCount(computerInputNumbers, userInputNumbers);

  return getGameResultText(strikeCount, ballCount);
};

export default getGameResult;
