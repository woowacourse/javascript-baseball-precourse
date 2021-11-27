// TODO: 11/27 eslint에서 class에 this를 사용하라고 표시.

/* eslint-disable class-methods-use-this */

export default class Baseballgame {
  constructor() {}

  validate(userInputNumbers) {
    if (userInputNumbers.length !== 3) return false;
    if (isNaN(userInputNumbers)) return false;
    if (userInputNumbers.match(/[0]/)) return false;
    return true;
  }

  play(computerInputNumbers, userInputNumbers) {
    console.log(computerInputNumbers, userInputNumbers);
  }
}
