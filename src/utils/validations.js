import { GAME } from './constants.js';

export const isValidInputData = (data) => {
  if (isNaN(data)) {
    return false;
  }

  const numbers = new Set(data.split(''));
  if (numbers.size !== GAME.THREE) {
    return false;
  }

  return true;
};
