import { NUMBER_MIN, NUMBER_MAX, LENGTH_REQUIRED } from '../consts.js';

const { MissionUtils } = window;

function generateComputerInput() {
  return MissionUtils.Random.pickUniqueNumbersInRange(NUMBER_MIN, NUMBER_MAX, LENGTH_REQUIRED).join('');
}

export default generateComputerInput;
