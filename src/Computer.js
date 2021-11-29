import {
  MIN_NUMBER_IN_RANGE,
  MAX_NUMBER_IN_RANGE,
  LENGTH_NUMBERS,
} from './constant/index.js';

export default class Computer {
  constructor() {
    this.computerNumbers = Computer.generateComputerNumber();
  }

  static generateComputerNumber() {
    const numberList = [];
    let generatedNumber = null;

    while (numberList.length < LENGTH_NUMBERS) {
      generatedNumber = MissionUtils.Random.pickNumberInRange(
        MIN_NUMBER_IN_RANGE,
        MAX_NUMBER_IN_RANGE,
      );

      if (!Computer.checkIncludedNumber(numberList, generatedNumber)) {
        numberList.push(generatedNumber);
      }
    }

    return numberList.join('');
  }

  static checkIncludedNumber(numberList, generatedNumber) {
    return numberList.includes(generatedNumber);
  }

  getComputerNumbers() {
    return this.computerNumbers;
  }
}
