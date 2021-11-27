import { GAME_CONFIG } from "./constants.js";

export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = this.createComputerNumbers();
  }

  play(userInputNumbers) {
    const checkResults = this.checkResult(
      this.computerInputNumbers,
      userInputNumbers
    );
    return checkResults;
  }

  createComputerNumbers() {
    const uniqueNumberSet = new Set();
    while (uniqueNumberSet.size < GAME_CONFIG.LENGTH) {
      uniqueNumberSet.add(
        MissionUtils.Random.pickNumberInRange(
          GAME_CONFIG.MIN_NUMBER,
          GAME_CONFIG.MAX_NUMBER
        )
      );
    }
    return Array.from(uniqueNumberSet).join("");
  }

  checkResult(computerInputNumbers, userInputNumbers) {
    let result = {
      strike: 0,
      ball: 0,
    };
    computerInputNumbers.split("").forEach((comValue, comIndex) => {
      userInputNumbers.split("").forEach((userValue, userIndex) => {
        if (comValue === userValue) {
          if (comIndex === userIndex) result.strike++;
          else result.ball++;
        }
      });
    });
    return result;
  }
}
