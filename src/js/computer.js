import { MIN_NUM, MAX_NUM, NUM_COUNT } from './constant/constant.js';

export const getComputerInputNumbers = computerInputNumbers => {
  computerInputNumbers = [];
  while (computerInputNumbers.length !== NUM_COUNT) {
    const num = MissionUtils.Random.pickNumberInRange(MIN_NUM, MAX_NUM);
    if (!computerInputNumbers.includes(num)) {
      computerInputNumbers.push(num);
    }
  }
  return computerInputNumbers;
};
