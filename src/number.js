import { VALID_NUMBER_LENGTH } from './constants/index.js';

export const getRandomNumber = (MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER) => {
  const randomNumberArray = [];
  while (randomNumberArray.length < VALID_NUMBER_LENGTH) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(
      MIN_RANDOM_NUMBER,
      MAX_RANDOM_NUMBER,
    );
    if (!randomNumberArray.includes(randomNumber)) {
      randomNumberArray.push(randomNumber);
    }
  }

  return randomNumberArray.join('');
};
export const isValidInput = (input) => {
  if (!isValidLengthInteger(input)) {
    return false;
  }
  if (input.includes(0)) {
    return false;
  }
  if (isDuplicated(input)) {
    return false;
  }

  return true;
};
const isValidLengthInteger = (input) => {
  if (input.length !== VALID_NUMBER_LENGTH) {
    return false;
  }
  if (isNaN(input)) {
    return false;
  }
  if (parseFloat(input) !== parseInt(input)) {
    return false;
  }
  if (parseInt(input) < 0) {
    return false;
  }

  return true;
};
const isDuplicated = (input) => input.length !== new Set(input).size;
