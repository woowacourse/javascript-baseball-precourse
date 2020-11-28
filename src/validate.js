const DIGITS = 3;
const validateInputDigit = function (input) {
  return input.length === DIGITS;
};
const validateInputUnique = function (input) {
  let isValid = true;
  const inputArray = input.split("");
  inputArray.forEach((input, index) => {
    if (inputArray.indexOf(input) !== index) isValid = false;
  });
  return isValid;
};
const validateInputNumber = function (input) {
  let isValid = true;
  const inputArray = input.split("");
  const validArray = [...Array(9).keys()].map((num) => String(num + 1)); // ["1"..."9"]
  inputArray.forEach((input) => {
    if (!validArray.includes(input)) isValid = false;
  });
  return isValid;
};

const validateUserInput = function (input) {
  const isValid =
    validateInputDigit(input) &&
    validateInputUnique(input) &&
    validateInputNumber(input);
  if (!isValid) alert("입력값이 잘못되었습니다. 다시 입력해주세요 :)");
  return isValid;
};
export { DIGITS, validateUserInput };
