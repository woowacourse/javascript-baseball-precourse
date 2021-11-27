function isInteger(number) {
  return number % 1 === 0;
}

export function isThreeDigitsNumber(checkValue) {
  const checkValueToNumber = Number(checkValue);
  if (checkValueToNumber === NaN || !isInteger(checkValueToNumber))
    return false;
  if (checkValueToNumber >= 100 && checkValueToNumber <= 999) return true;
  else return false;
}

export function checkUserInputValue(userInputValue) {
  if (!isThreeDigitsNumber(userInputValue)) return false;
  const userInputValueArray = userInputValue.split("");
  var isThereZero = false;
  userInputValueArray.map((item) => {
    if (item === "0") isThereZero = true;
  });
  if (isThereZero) return false;
  if (
    userInputValueArray[0] !== userInputValueArray[1] &&
    userInputValueArray[0] !== userInputValueArray[2] &&
    userInputValueArray[1] !== userInputValueArray[2]
  )
    return true;
  else return false;
}
