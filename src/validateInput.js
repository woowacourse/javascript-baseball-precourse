// input validation function
const validateInput = function validateUserInputValue(inputValue) {
  // validate input and alert if not valid
  if (!checkValidNum(inputValue)) {
    alert("입력 값의 형식이 올바르지 않습니다.\n다시 입력해주세요.");
    return false;
  }

  return true;
};

// check value if valid
const checkValidNum = function checkNumberValidity(value) {
  // screen for duplicate and value length
  const valueSet = new Set(value.split(""));
  if (valueSet.size !== 3 || value.length !== 3) return false;

  // check if each digit is integer between 1 and 9
  valueSet.forEach((n) => {
    let integer = n * 1;
    if (!Number.isInteger(integer) || integer < 1 || integer > 9) return false;
  });

  return true;
};

export default validateInput;
