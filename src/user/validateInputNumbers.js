const INPUT_REGULAR_EXPRESSION = '^[1-9]{3}$';
const ERROR = {
  INPUT_REGULAR_EXPRESSION: '입력 오류: 1~9 사이의 숫자를 입력해 주세요 예) 123',
  DUPLICATION: '입력 오류: 서로 다른 수를 입력해 주세요. 예) 123',
};

function checkInputDuplication(numbers) {
  if (numbers.length !== new Set(numbers).size) {
    return false;
  }
  return true;
}

export default function validateNumbers(numbers) {
  if (!numbers.match(INPUT_REGULAR_EXPRESSION)) {
    return alert(ERROR.INPUT_REGULAR_EXPRESSION);
  }
  if (!checkInputDuplication(numbers)) {
    return alert(ERROR.DUPLICATION);
  }
  return true;
}
