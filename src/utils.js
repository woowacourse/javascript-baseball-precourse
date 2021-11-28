import { BASEBALL_RULE } from './constants.js';

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

const hasZero = (target) => {
  return target.indexOf('0') !== -1;
};

const isValidLength = (target) => {
  return new Set(target.split('')).size === BASEBALL_RULE.DIGITS;
};

export const isNotValidInput = (input) => {
  return (
    !input || !isValidLength(input) || hasZero(input) || Number.isNaN(+input)
  );
};

export const parseInput = (input) => {
  return String(parseInt(input.trim(), 10));
};

const convertToHashMap = (input) => {
  const hashMap = new Map();
  input.split('').forEach((number, index) => {
    hashMap.set(number, index);
  });
  return hashMap;
};

export const getStrikeAndBall = (computerInputNumbers, userInputNumbers) => {
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
