import { DIGIT_NUMBER, START_NUMBER, END_NUMBER } from './constants.js';

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
};

export default util;
