export function checkDigits(length, number) {
  return String(number).length === length;
}

export function checkNumbersInRange(minNumber, maxNumber, number) {
  const numberArr = Array.from(number);
  const result = numberArr.filter(
    (value) => value >= minNumber && value <= maxNumber,
  ).length;
  return result === numberArr.length;
}

export function checkDuplicationNumbers(number) {
  const numbers = number.split('');
  const duplicatedNumberArr = numbers.filter(
    (value, index) => numbers.indexOf(value, index + 1) > -1,
  );
  return duplicatedNumberArr.length > 0;
}

export function clearInputWithFocus(element) {
  element.value = '';
  element.focus();
}