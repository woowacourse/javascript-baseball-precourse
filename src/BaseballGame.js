import { GAME_CONFIG } from "./constants.js";

export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = this.createComputerNumbers();
  }

  play() {}

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
}
