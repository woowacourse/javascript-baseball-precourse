import { COMPUTER_NUMBERS, ERR_MESSAGE } from './constant.js';

/* eslint-disable no-undef */
const { pickNumberInRange } = MissionUtils.Random;

export function pickRandomNumbers() {
  const randomNumbers = new Set();

  while (randomNumbers.size < COMPUTER_NUMBERS.LENGTH) {
    randomNumbers.add(
      pickNumberInRange(
        COMPUTER_NUMBERS.MIN_NUMBER,
        COMPUTER_NUMBERS.MAX_NUMBER
      )
    );
  }
  return [...randomNumbers].join('');
}

export function isValidInputNumbers(userInputNumbers) {
  if (isNaN(userInputNumbers)) {
    return alert(ERR_MESSAGE.JUST_NUMBERS);
  }
  if (userInputNumbers.length !== COMPUTER_NUMBERS.LENGTH) {
    return alert(ERR_MESSAGE.NUMBERS_LENGTH);
  }
  if (new Set(userInputNumbers).size !== COMPUTER_NUMBERS.LENGTH) {
    return alert(ERR_MESSAGE.NOT_DUPLICATED);
  }
  return true;
}
