import {
  DUPLICATE_ERROR_MESSAGE,
  GAME_NUMBER_LENGTH,
  LENGTH_ERROR_MESSAGE,
  MAX_NUMBER,
  MIN_NUMBER,
  SCOPE_ERROR_MESSAGE,
} from "../constants/index.js";

const checkScopeValidation = (userInputNumbers) => {
  const result = userInputNumbers.every((number) =>
    number >= MIN_NUMBER && number <= MAX_NUMBER ? true : false
  );
  return result;
};

const checkLengthValidation = (userInputNumbers) => {
  return userInputNumbers.length === GAME_NUMBER_LENGTH;
};

const checkDuplicateValidation = (userInputNumbers) => {
  return userInputNumbers.length === new Set(userInputNumbers).size
    ? true
    : false;
};

const checkValidation = (userInputNumbers) => {
  if (!checkScopeValidation(userInputNumbers)) {
    alert(SCOPE_ERROR_MESSAGE);
    return false;
  }

  if (!checkLengthValidation(userInputNumbers)) {
    alert(LENGTH_ERROR_MESSAGE);
    return false;
  }

  if (!checkDuplicateValidation(userInputNumbers)) {
    alert(DUPLICATE_ERROR_MESSAGE);
    return false;
  }
  return true;
};

export default checkValidation;
