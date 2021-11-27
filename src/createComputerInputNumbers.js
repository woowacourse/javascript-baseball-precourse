import { NUMBERS_RANGE, NUMBERS_LENGTH } from './constants.js';

export default function createComputerInputNumbers() {
  const selectedNumber = [];

  while (selectedNumber.length < NUMBERS_LENGTH) {
    const number = MissionUtils.Random.pickNumberInRange(NUMBERS_RANGE.min, NUMBERS_RANGE.max);
    if (!selectedNumber.includes(number)) {
      selectedNumber.push(number);
    }
  }

  return selectedNumber;
}
