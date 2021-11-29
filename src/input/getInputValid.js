function checkInputLength(numbers) {
  if (numbers.length === 3) {
    return true;
  }
  return false;
}

function checkInputType(number) {
  if (isNaN(number)) {
    return false;
  }
  return true;
}

function checkInputZero(number) {
  if (number === 0) {
    return false;
  }
  return true;
}

function checkInputDuplication(numbers) {
  if (numbers.length !== new Set(numbers).size) {
    return false;
  }
  return true;
}

export default function getInputValid(numbers) {
  if (!checkInputLength(numbers)) {
    return alert('입력 오류: 세 자릿수를 입력해 주세요. 예) 123');
  }
  if (!numbers.every(checkInputType)) {
    return alert('입력 오류: 숫자만 입력해 주세요. 예) 123');
  }
  if (!numbers.every(checkInputZero)) {
    return alert('입력 오류: 0은 빼고 입력해 주세요. 예) 123');
  }
  if (!checkInputDuplication(numbers)) {
    return alert('입력 오류: 서로 다른 수를 입력해 주세요. 예) 123');
  }
  return true;
}
