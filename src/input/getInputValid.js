function checkInputDuplication(numbers) {
  if (numbers.length !== new Set(numbers).size) {
    return false;
  }
  return true;
}

export default function getInputValid(numbers) {
  if (!numbers.match('^[1-9]{3}$')) {
    return alert('입력 오류: 1~9 사이의 숫자를 입력해 주세요 예) 123');
  }
  if (!checkInputDuplication(numbers)) {
    return alert('입력 오류: 서로 다른 수를 입력해 주세요. 예) 123');
  }
  return true;
}
