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
  for (let number of userInputNumbers) {
    if (number < MIN_NUMBER || number > MAX_NUMBER) {
      return true;
    }
  }
  return false;
};

const isLengthInValid = (userInputNumbers) => {
  return userInputNumbers.length !== GAME_NUMBER_LENGTH;
};

const isDuplicated = (userInputNumbers) => {
  return userInputNumbers.length !== new Set(userInputNumbers).size;
};

const isTypeInValid = (userInputNumbers) => {
  for (let number of userInputNumbers) {
    if (isNaN(number)) {
      return true;
    }
  }
  return false;
};

const showAlertScreen = (error_message) => {
  alert(error_message);
  return false;
};

const isValid = (userInputNumbers) => {
  if (isTypeInValid(userInputNumbers)) {
    return showAlertScreen(TYPE_ERROR_MESSAGE);
  }
  if (isScopeInValid(userInputNumbers)) {
    return showAlertScreen(SCOPE_ERROR_MESSAGE);
  }
  if (isLengthInValid(userInputNumbers)) {
    return showAlertScreen(LENGTH_ERROR_MESSAGE);
  }
  if (isDuplicated(userInputNumbers)) {
    return showAlertScreen(DUPLICATE_ERROR_MESSAGE);
  }
  return true;
};

export default isValid;
