export const validateDigit = function (input, digits) {
  return input.length === digits;
};
export const validateUnique = function (input) {
  let isValid = true;
  const inputArray = input.split("");
  inputArray.forEach((input, index) => {
    if (inputArray.indexOf(input) !== index) isValid = false;
  });
  return isValid;
};
export const validateNumber = function (input) {
  let isValid = true;
  const inputArray = input.split("");
  const validArray = [...Array(9).keys()].map((num) => String(num + 1)); // ["1"..."9"]
  inputArray.forEach((input) => {
    if (!validArray.includes(input)) isValid = false;
  });
  return isValid;
};
