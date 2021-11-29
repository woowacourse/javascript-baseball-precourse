export default class Computer {
  constructor(NUMBER_LENGTH) {
    this.NUMBER_LENGTH = NUMBER_LENGTH;
  }

  makeNumbers() {
    const randomNumbers = new Set();
    while (randomNumbers.size !== this.NUMBER_LENGTH) {
      randomNumbers.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    return [...randomNumbers].join("");
  }

  changeStringToNumberArray(string) {
    return [...string].map(value => Number(value));
  }
}
