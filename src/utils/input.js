import { BASEBALL_RULE } from '../constants.js';

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
