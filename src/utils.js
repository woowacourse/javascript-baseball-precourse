import { BASEBALL_RULL } from './constants.js';
export const generateRandomNumber = () => {
  const numberSet = new Set();
  while (numberSet.size < BASEBALL_RULL.DIGITS) {
    numberSet.add(
      MissionUtils.Random.pickNumberInRange(
        BASEBALL_RULL.MIN,
        BASEBALL_RULL.MAX
      )
    );
  }
  return [...numberSet].join('');
};
