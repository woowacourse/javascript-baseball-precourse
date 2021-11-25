import {
  DIGIT_NUMBER,
  START_NUMBER,
  END_NUMBER,
  THREE_UNIQUE_NUMBERS_REGEX,
  ERROR,
} from './constants.js';

const util = {
  pickUniqueThreeNumbers: () => {
    let result = new Set();
    while (result.size < DIGIT_NUMBER) {
      result.add(
        MissionUtils.Random.pickNumberInRange(START_NUMBER, END_NUMBER)
      );
    }
    return Array.from(result);
  },
  isThreeDigitUniqueNumbers: (element) => {
    return THREE_UNIQUE_NUMBERS_REGEX.test(element.value);
  },
  initValue: (element) => {
    element.value = '';
  },
};

export default util;
