/* pickThreeDigitRandomNumber(); */
import { RANGE_MIN, RANGE_MAX, NUMBER_LENGTH } from './consts.js';

export default function getComputerNumber() {
  function convertSetToString(setA) {
    let strArray = [];
    for (let i of setA) {
      strArray.push(i);
    }
    return strArray.join('');
  }

  function getNLengthRandomNumber() {
    const numberSet = new Set();
    while (numberSet.size < NUMBER_LENGTH) {
      numberSet.add(
        MissionUtils.Random.pickNumberInRange(RANGE_MIN, RANGE_MAX),
      );
    }
    return convertSetToString(numberSet);
  }

  return getNLengthRandomNumber();
}
