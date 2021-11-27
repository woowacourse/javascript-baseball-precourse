export function checkOnlyNumberOfDigitsInRange(
  minNumber,
  maxNumber,
  length,
  number,
) {
  const regex = new RegExp(
    String.raw`^[${minNumber}-${maxNumber}]{${length}}$`,
  );
  return regex.test(number);
}

export function checkDuplicationNumbers(number) {
  const numbers = number.split('');
  const duplicatedNumberArr = numbers.filter(
    (value, index) => numbers.indexOf(value, index + 1) > -1,
  );
  return duplicatedNumberArr.length > 0;
}
