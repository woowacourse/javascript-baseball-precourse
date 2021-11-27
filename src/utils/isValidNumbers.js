import utils from './utils.js';
import DOMUtils from './DOMUtils.js';
import { ERROR } from '../constants.js';

const showErrorMessage = (errorMessage, element) => {
  alert(errorMessage);
  DOMUtils.initValue('#user-input');
  element.focus();
  return false;
};

const isValidNumbers = (userInput) => {
  if (!utils.isThreeDigitUniqueNumbers(userInput)) {
    showErrorMessage(ERROR.REQUIRE_THREE_UNIQUE_NUMBERS, userInput);
  } else if (!utils.isDuplicateNumbers(userInput)) {
    showErrorMessage(ERROR.REQUIRE_NOT_DUPLICATE_NUMBERS, userInput);
  } else {
    return true;
  }
};

export default isValidNumbers;
