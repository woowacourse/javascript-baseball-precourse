import { RANGE_MIN, RANGE_MAX, NUMBER_LENGTH } from '../constants/game-rule.js';

export default function makeRandomNumber() {
  let randomNumberString = '';
  while (randomNumberString.length < NUMBER_LENGTH) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(RANGE_MIN, RANGE_MAX);
    if (!randomNumberString.includes(randomNumber)) {
      randomNumberString += randomNumber;
    }
  }

  return parseInt(randomNumberString);
}
