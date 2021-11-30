import {
  DUPLICATE_ERROR_MESSAGE,
  GAME_NUMBER_LENGTH,
  LENGTH_ERROR_MESSAGE,
  MAX_NUMBER,
  MIN_NUMBER,
  SCOPE_ERROR_MESSAGE,
  TYPE_ERROR_MESSAGE,
} from "../constants/index.js";

const isScopeInValid = (userInputNumbers) => {
  const result = userInputNumbers.every((number) =>
    number < MIN_NUMBER || number > MAX_NUMBER ? true : false
  );
  return result;
};

const isLengthInValid = (userInputNumbers) => {
  return userInputNumbers.length !== GAME_NUMBER_LENGTH;
};

const isDuplicated = (userInputNumbers) => {
  return userInputNumbers.length !== new Set(userInputNumbers).size
    ? true
    : false;
};

const isTypeInValid = (userInputNumbers) => {
  for (let number of userInputNumbers) {
    if (isNaN(number)) {
      return true;
    }
  }
  return false;
};

const isValid = (userInputNumbers) => {
  if (isTypeInValid(userInputNumbers)) {
    alert(TYPE_ERROR_MESSAGE);
    return false;
  }
  if (isScopeInValid(userInputNumbers)) {
    alert(SCOPE_ERROR_MESSAGE);
    return false;
  }
  if (isLengthInValid(userInputNumbers)) {
    alert(LENGTH_ERROR_MESSAGE);
    return false;
  }
  if (isDuplicated(userInputNumbers)) {
    alert(DUPLICATE_ERROR_MESSAGE);
    return false;
  }
  return true;
};

export default isValid;
