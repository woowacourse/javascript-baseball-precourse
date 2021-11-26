import {
  NAN_ALERT,
  BLANK_SPACE_ALERT,
  NEGATIVE_NUMBER_ALERT,
  WRONG_LENGTH_ALERT,
  OUT_RANGE_ALERT,
  DUPLICATED_NUMBER_ALERT,
} from './constants.js';

export const userInputException = (userInputNumbers) => {
  let isException = alertToUser(userInputNumbers);

  return isException;
};

const alertToUser = (userInputNumbers) => {
  if (!userInputNumbers || isNaN(Number(userInputNumbers))) alert(NAN_ALERT);
  else if (userInputNumbers.includes(' ')) alert(BLANK_SPACE_ALERT);
  else if (userInputNumbers.includes('-')) alert(NEGATIVE_NUMBER_ALERT);
  else if (userInputNumbers.length !== 3) alert(WRONG_LENGTH_ALERT);
  else if (!checkDigitsRangeCorrect(userInputNumbers)) alert(OUT_RANGE_ALERT);
  else if (isDuplicated(userInputNumbers)) alert(DUPLICATED_NUMBER_ALERT);
  else return false;
  return true;
};

const checkDigitsRangeCorrect = (userInputNumbers) => {
  let isCorrect = true;

  userInputNumbers.split('').forEach((element) => {
    if (Number(element) < 1) {
      isCorrect = false;
    }
  });

  return isCorrect;
};

const isDuplicated = (userInputNumbers) => {
  const removeDuplicates = new Set(userInputNumbers.split(''));

  if (removeDuplicates.size === 3) {
    return false;
  }
  return true;
};
