// 자리 수 검사
export const validateDigit = function (input, digits) {
  return input.length === digits;
};

// 중복 검사
export const validateUnique = function (input) {
  let isValid = true;
  const inputArray = input.split("");

  inputArray.forEach((input, index) => {
    if (inputArray.indexOf(input) !== index) {
      isValid = false;
    }
  });

  return isValid;
};

// 문자 검사 (1~9)
export const validateNumber = function (input) {
  let isValid = true;
  const inputArray = input.split("");

  const validArray = [...Array(9).keys()].map((num) => String(num + 1)); // ["1"..."9"]
  inputArray.forEach((input) => {
    if (!validArray.includes(input)) {
      isValid = false;
    }
  });

  return isValid;
};
