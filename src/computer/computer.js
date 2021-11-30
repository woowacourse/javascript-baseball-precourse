import { NUMBER_LENGTH } from '../libs/constant.js';

function addRandomNum(answer) {
  // eslint-disable-next-line no-undef
  const randomNum = String(MissionUtils.Random.pickNumberInRange(1, 9));
  if (answer.length === 0 || !answer.includes(randomNum)) {
    answer.push(randomNum);
  }
}

export function generateComputerValue() {
  const answer = [];
  while (answer.length < NUMBER_LENGTH) {
    addRandomNum(answer);
  }
  return answer.join('');
}
