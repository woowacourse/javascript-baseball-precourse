import { CONSTRAIN, MESSAGE } from './utils/constant.js';
import Validator from './utils/validator.js';

const isValid = value => {
  return Validator.isLengthCorrect(value, CONSTRAIN.INPUT_LENGTH) 
  && Validator.isNumber(value) 
  && !Validator.isDuplicated(value) 
  && !Validator.hasZero(value);
};

export const getUserInput = userInput => {
  if (!isValid(userInput)) {
    alert(MESSAGE.INPUT_ERR);
    return null;
  }

  return userInput.split('');
};
