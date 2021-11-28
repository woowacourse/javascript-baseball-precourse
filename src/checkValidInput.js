export const isNotValidInput = (input) => {
  return isNotValidLength(input) || isOutOfRange(input) || isDuplicated(input) || isNotNumeric(input);
}

const isNotValidLength = (input) => {
  return input.length !== 3;
}

const isOutOfRange = (input) => {
  return input.includes('0');
}

const isDuplicated = (input) => {
  const inputArray = input.split('');
  let flag = false;
  inputArray.forEach(element => {
    if (inputArray.indexOf(element) !== inputArray.lastIndexOf(element)) {
      flag = true;
    }
  });
  return flag;
}

const isNotNumeric = (input) => {
  return Number.isNaN(input);
}