import util from './util.js';

const isValidNumbers = (userInput) => {
  if (!util.isThreeDigitUniqueNumbers(userInput)) {
    alert(ERROR.REQUIRE_THREE_UNIQUE_NUMBERS);
    util.initValue(element);
  }
};

export default isValidNumbers;
