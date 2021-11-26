import { NUMBER_MIN, NUMBER_MAX, LENGTH_REQUIRED } from '../consts.js';

const { MissionUtils } = window;

function generateComputerInput() {
  const numbers = [];

  while (numbers.length < LENGTH_REQUIRED) {
    const number = MissionUtils.Random.pickNumberInRange(NUMBER_MIN, NUMBER_MAX);

    if (!numbers.includes(number)) numbers.push(number);
  }

  return numbers.join('');
}

export default generateComputerInput;
