import { BASEBALL_RULE, GAME_RESULT } from '../constants.js';

export const generateRandomNumber = () => {
  const numberSet = new Set();
  while (numberSet.size < BASEBALL_RULE.DIGITS) {
    numberSet.add(
      MissionUtils.Random.pickNumberInRange(
        BASEBALL_RULE.MIN,
        BASEBALL_RULE.MAX
      )
    );
  }
  return [...numberSet].join('');
};

const convertToHashMap = (input) => {
  const hashMap = new Map();
  input.split('').forEach((number, index) => {
    hashMap.set(number, index);
  });
  return hashMap;
};

export const calculateBaseBall = (computerInputNumbers, userInputNumbers) => {
  let strike = 0;
  let ball = 0;

  const computerInputHashMap = convertToHashMap(computerInputNumbers);
  const userInputHashMap = convertToHashMap(userInputNumbers);

  for (const [number, index] of computerInputHashMap.entries()) {
    if (userInputHashMap.has(number)) {
      const userInputIndex = userInputHashMap.get(number);
      index === userInputIndex ? (strike += 1) : (ball += 1);
    }
  }
  return [strike, ball];
};

export const getGameResult = (strike, ball) => {
  if (strike === BASEBALL_RULE.DIGITS) {
    return GAME_RESULT.END;
  }
  if (strike && ball) {
    return `${ball}${GAME_RESULT.BALL} ${strike}${GAME_RESULT.STRIKE}`;
  }
  if (ball) {
    return `${ball}${GAME_RESULT.BALL}`;
  }
  if (strike) {
    return `${strike}${GAME_RESULT.STRIKE}`;
  }
  return GAME_RESULT.NOTHING;
};
