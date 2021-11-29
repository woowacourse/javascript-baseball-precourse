import { BASEBALL } from '../constants.js';

// check 1- 숫자인지 확인
const checktype = num => {
    if (isNaN(Number(num))) {
      alert(BASEBALL.ALERT_ONLY_NUM);
      return true;
    }
  };

  // check 2- 3자리인지 확인
  const checkLen = num => {
    if (num.length !== 3) {
      alert(BASEBALL.ALERT_THREE_NUM);
      return true;
    }
  };

  // check3 - 숫자 범위 확인 (0 포함 확인)
  const checkOnetoNine = num => {
    if (num.includes(0)) {
      alert(BASEBALL.ALERT_ONE_TO_NINE);
      return true;
    }
  };

  // check4 - 숫자 중복 여부 확인
  const checkDuplication = num => {
    if (num[0] === num[1] || num[1] === num[2] || num[0] === num[2]) {
      alert(BASEBALL.ALERT_DUPLICATION);
      return true;
    }
  };

  // check All
export const checkNum = num => {
    if (
      checktype(num) ||
      checkLen(num) ||
      checkOnetoNine(num) ||
      checkDuplication(num)
    ) {
      return;
    }

    return true;
};