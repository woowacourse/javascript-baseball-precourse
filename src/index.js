import { NUMBER_RULES, RESULT_MESSAGE } from './constants.js';

export default class BaseballGame {

  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }

  generateComputerRandomNumber() {
    const computerNumberList =  new Set();

    while (computerNumberList.size < NUMBER_RULES.LENGTH)
      computerNumberList.add(MissionUtils.Random.pickNumberInRange(NUMBER_RULES.MIN_NUMBER, NUMBER_RULES.MAX_NUMBER));

    return Array.from(computerNumberList);
  }
}