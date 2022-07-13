import { checkOverlap, checkZero } from './inputCheck.js';
import { convertToArray } from './utils.js';

export const createRandomNumber = () => {
  let randomNum;
  let randomNumArray;
  do {
    randomNum = String(MissionUtils.Random.pickNumberInRange(123, 987));
    randomNumArray = convertToArray(randomNum);
  } while (!(checkOverlap(randomNumArray) && checkZero(randomNum)));
  return randomNumArray;
};
