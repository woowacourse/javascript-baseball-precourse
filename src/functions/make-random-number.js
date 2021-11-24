import { RANGE_MIN, RANGE_MAX, NUMBER_LENGTH } from "../constants/game-rule.js";

export default function makeRandomNumber() {
  let randomNumberArray = [];
  while (randomNumberArray.length < NUMBER_LENGTH) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(RANGE_MIN, RANGE_MAX);
    if (!randomNumberArray.includes(randomNumber)) {
      randomNumberArray.push(randomNumber);
    }
  }
  return randomNumberArray;
}