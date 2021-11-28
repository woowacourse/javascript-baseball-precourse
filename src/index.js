import INPUT_RULES from './constants';

function generateRandomNumbers() {
  const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
    INPUT_RULES.MIN_OF_RANGE,
    INPUT_RULES.MAX_OF_RANGE,
    INPUT_RULES.NUMBER_OF_DIGITS
  );
  return randomNumbers;
}

export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = generateRandomNumbers();
  }
}
