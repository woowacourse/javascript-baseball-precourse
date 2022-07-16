//2. 입력한 숫자 확인

export default function isValid(input) {
  if (!isNaN(input)) {
    checkNumber(input);
  } else {
    alert("숫자를 입력해주세요");
  }
}

function checkDuplication(number) {
  const numberArray = [...new Set(number)];
  if (numberArray.length !== 3) {
    return false;
  }
  return true;
}

function checkNoZero(number) {
  if (number.includes(0)) {
    return false;
  }
  return true;
}

function checkThreeDigitNumber(number) {
  if (number.length !== 3) {
    return false;
  }
  return true;
}

function checkNumber(number) {
  if (checkThreeDigitNumber(number) === false) {
    alert("세자리 숫자를 입력해주세요");
  } else if (
    checkNoZero(number) === false &&
    checkThreeDigitNumber(number) === true
  ) {
    alert("1부터 9까지 숫자를 입력해 주세요");
  } else if (
    checkDuplication(number) === false &&
    checkThreeDigitNumber(number) === true &&
    checkNoZero(number) === true
  ) {
    alert("중복 없이 입력해 주세요");
  } else {
    return true;
  }
}
