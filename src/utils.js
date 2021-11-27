import { BASEBALL_RULL } from './constants.js';

export const generateRandomNumber = () => {
  const numberSet = new Set();
  while (numberSet.size < BASEBALL_RULL.DIGITS) {
    numberSet.add(
      MissionUtils.Random.pickNumberInRange(
        BASEBALL_RULL.MIN,
        BASEBALL_RULL.MAX
      )
    );
  }
  return [...numberSet].join('');
};

const hasZero = (target) => {
  return target.indexOf('0') !== -1;
};

const isValidLength = (target) => {
  return (
    target.length === BASEBALL_RULL.DIGITS &&
    new Set(target.split('')).size === BASEBALL_RULL.DIGITS
  );
};

export const isNotValidInput = (input) => {
  return (
    !input || !isValidLength(input) || hasZero(input) || Number.isNaN(+input)
  );
};

export const parseInput = (input) => {
  return String(parseInt(input.trim(), 10));
};

export const convertToHashMap = (input) => {
  const hashMap = new Map();
  input.split('').forEach((number, index) => {
    hashMap.set(number, index);
  });
  return hashMap;
};
