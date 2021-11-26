import {
  DIGIT_NUMBER,
  START_NUMBER,
  END_NUMBER,
  THREE_UNIQUE_NUMBERS_REGEX,
} from '../constants.js';

const utils = {
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
  isDuplicateNumbers: (element) => {
    let result = new Set(element.value);
    return element.value.length === result.size;
  },
  initValue: (element) => {
    element.value = '';
  },
};

export default utils;
