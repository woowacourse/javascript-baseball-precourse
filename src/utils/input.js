import { BASEBALL_RULE } from '../constants.js';

const hasZero = numbers => numbers.indexOf('0') !== -1;

const isValidLength = numbers =>
  new Set(numbers.split('')).size === BASEBALL_RULE.DIGITS;

export const isNotValidInput = input =>
  !input || !isValidLength(input) || hasZero(input) || Number.isNaN(+input);

export const parseInput = input => String(parseInt(input.trim(), 10));
