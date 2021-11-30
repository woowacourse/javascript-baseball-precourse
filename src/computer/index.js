import { GAME_RULE } from '../constants/index.js';

export default class Computer {
  constructor() {
    this.number = 0;
    this.setRandomNumber();
  }
  setRandomNumber() {
    let randomNumberString = '';
    while (randomNumberString.length < GAME_RULE.numberLength) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(
        GAME_RULE.rangeMin,
        GAME_RULE.rangeMax,
      );
      if (!randomNumberString.includes(randomNumber)) {
        randomNumberString += randomNumber;
      }
    }
    this.number = randomNumberString;
  }
  getNumber() {
    return this.number;
  }
}
