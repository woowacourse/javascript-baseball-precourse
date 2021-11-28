import { BASEBALL_RULE } from '../constants.js';

const hasZero = (numbers) => {
  return numbers.indexOf('0') !== -1;
};

const isValidLength = (numbers) => {
  return new Set(numbers.split('')).size === BASEBALL_RULE.DIGITS;
};

export const isNotValidInput = (input) => {
  return (
    !input || !isValidLength(input) || hasZero(input) || Number.isNaN(+input)
  );
};

export const parseInput = (input) => {
  return String(parseInt(input.trim(), 10));
};
