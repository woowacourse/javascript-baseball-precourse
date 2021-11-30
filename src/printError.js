import { $ } from './utils/utils.js';

const printError = userInputNumbers => {
  if (userInputNumbers.includes(NaN)) {
    alert('잘못 입력하였습니다❗️ 숫자를 입력하세요.');
    // eslint-disable-next-line prettier/prettier
  } else if ([...new Set(userInputNumbers)].length !== 3 && $('#user-input').value.length === 3) {
    alert('잘못 입력하였습니다❗️ 중복되지 않는 숫자를 입력하세요.');
  } else if (userInputNumbers.includes(0)) {
    alert('잘못 입력하였습니다❗️ 0을 제외한 1~9까지의 수만 입력하세요.');
  } else if (userInputNumbers.length !== 3) {
    alert('잘못 입력하였습니다❗️ 3개의 숫자를 입력하세요.');
  }
};

export default printError;
