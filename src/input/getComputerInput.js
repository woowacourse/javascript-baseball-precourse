import { INPUT_LENGTH } from '../constant/constant.js';

export default function getComputerInput() {
  const computerInput = new Set();
  while (computerInput.size < INPUT_LENGTH) {
    computerInput.add(window.MissionUtils.Random.pickNumberInRange(1, 9));
  }
  return Number([...computerInput].join(''));
}
