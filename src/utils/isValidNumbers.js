import utils from './utils.js';
import DOMUtils from './DOMUtils.js';
import { ERROR } from '../constants.js';

const isValidNumbers = (userInput) => {
  if (!utils.isThreeDigitUniqueNumbers(userInput)) {
    alert(ERROR.REQUIRE_THREE_UNIQUE_NUMBERS);
    DOMUtils.initValue(userInput);
    return false;
  } else if (!utils.isDuplicateNumbers(userInput)) {
    alert(ERROR.REQUIRE_NOT_DUPLICATE_NUMBERS);
    DOMUtils.initValue(userInput);
    return false;
  } else {
    return true;
  }
};

export default isValidNumbers;
