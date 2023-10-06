import { COMPUTER_NUMBER_RANGE, MAX_INPUT_LENGTH } from '../constants/constant.js';

export const generateComputerNumber = () => {
  const computerNumber = [];
  while (computerNumber.length < MAX_INPUT_LENGTH) {
    let randomNumber = MissionUtils.Random.pickNumberInRange(COMPUTER_NUMBER_RANGE.MIN, COMPUTER_NUMBER_RANGE.MAX);
    if (!computerNumber.includes(randomNumber)) {
      computerNumber.push(randomNumber);
    }
  }
  return computerNumber.join('');
};
