import { convertToArray } from './utils';

export const createRandomNumber = () => {
  let randomNum = MissionUtils.Random.pickNumberInRange(123, 987);
  randomNum = convertToArray(randomNum);
};
