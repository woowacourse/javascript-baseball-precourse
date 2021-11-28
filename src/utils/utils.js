/* eslint-disable prettier/prettier */
import { NUMBER, THREE_UNIQUE_NUMBERS_REGEX } from '../constants.js';

const utils = {
  pickUniqueThreeNumbers: () => {
    const result = new Set();
    while (result.size < NUMBER.DIGIT) {
      result.add(MissionUtils.Random.pickNumberInRange(NUMBER.START, NUMBER.END));
    }
    return Array.from(result);
  },
  isThreeDigitUniqueNumbers: (element) => THREE_UNIQUE_NUMBERS_REGEX.test(element.value),

  isDuplicateNumbers: (element) => {
    const result = new Set(element.value);
    return element.value.length === result.size;
  },

  stringToNumArray: (string) => string.split('').map((num) => Number(num)),
};

export default utils;
