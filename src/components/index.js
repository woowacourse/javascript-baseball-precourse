import { isNumberObject } from '../common/index.js';
import { BASEBALL, EMPTY } from '../constants/index.js';

/* eslint-disable no-undef */
const { pickNumberInRange } = MissionUtils.Random;

export default class BaseballGame {
  constructor(state) {
    const { digit, exclude, start, end } = isNumberObject(state);

    this.digit = digit;
    this.exclude = exclude;
    this.start = start;
    this.end = end;

    this.computerInputNumbers = this.getRandomNumbers(this.start, this.end);
  }

  getRandomNumbers() {
    const result = new Set();
    /* eslint-disable no-constant-condition */
    while (true) {
      result.add(pickNumberInRange(this.start, this.end));
      if (result.size === this.digit) return [...result].join(EMPTY);
    }
  }

  checkCorrectNumber(userInputNumbers) {
    const targetNumbers = this.computerInputNumbers.split(EMPTY);
    const restNumbers = targetNumbers.reduce((numbers, value, index) => {
      if (userInputNumbers[index] !== value) numbers.push(userInputNumbers[index]);
      return numbers;
    }, []);

    const { length: MISMATCH } = restNumbers;
    const SIMILAR = new Set([...restNumbers, ...targetNumbers]).size;

    return [this.digit - MISMATCH, this.digit - SIMILAR + MISMATCH];
  }

  play(userInputNumbers) {
    let result = EMPTY;

    const [STRIKE, BALL] = this.checkCorrectNumber(userInputNumbers);

    if (STRIKE === this.digit) result = BASEBALL.WIN;
    else if (STRIKE + BALL === this.exclude) result = BASEBALL.NOTING;
    else result = `${BALL ? `${BALL}볼` : EMPTY} ${STRIKE ? `${STRIKE}스트라이크` : EMPTY}`.trim();

    console.log(result);
  }
}
