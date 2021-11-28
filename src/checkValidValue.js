function checkThreeLength(value) {
  const isThreeLength = value.length === 3;
  if (!isThreeLength) {
    alert(`3개만 입력해주세요.`);
  }
  return isThreeLength;
}

function checkTypeNumber(value) {
  const isNumber = !isNaN(Number(value));
  if (!isNumber) {
    alert(`숫자만 입력해주세요.`);
  }
  return isNumber;
}

function checkInRange(value) {
  const isContainZero = [...value].includes("0");
  if (isContainZero) {
    alert(`1에서 9까지의 수만 입력해주세요.`);
  }
  return !isContainZero;
}

function checkDuplicate(value) {
  const isDuplicate = new Set([...value]).size !== 3;
  if (isDuplicate) {
    alert(`중복된 수를 제거해주세요.`);
  }
  return !isDuplicate;
}

export function checkValidValue(targetValue) {
  return (
    checkThreeLength(targetValue) &&
    checkTypeNumber(targetValue) &&
    checkInRange(targetValue) &&
    checkDuplicate(targetValue)
  );
}
