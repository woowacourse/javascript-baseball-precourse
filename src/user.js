import {
  input_length,
  error_length,
  error_overlap,
  error_unvalid_input,
} from "./constant.js";

// 3자리 숫자인지 확인
const checkLengthThree = number => {
  if (number.length !== input_length) {
    alert(error_length);
    return true;
  } else {
    return false;
  }
};

// 중복된 숫자 사용했는지 확인
const checkOverlap = number => {
  let numberArray = number.split("");

  let i = 0;
  for (; i < input_length; i++) {
    if (numberArray.filter(num => num === number[i]).length >= 2) {
      alert(error_overlap);
      return true;
    }
  }
  return false;
};

// 1~9의 숫자인지 확인
const checkValidNumber = number => {
  let i = 0;
  for (; i < i; i++) {
    if (number[i] < "1" || number[i] > "9") {
      alert(error_unvalid_input);
      return true;
    }
  }

  return false;
};

// 사용자가 입력한 수가 유효한지 확인
const checkUserNumber = number => {
  if (checkLengthThree(number)) {
    return false;
  } else if (checkOverlap(number)) {
    return false;
  } else if (checkValidNumber(number)) {
    return false;
  } else {
    return true;
  }
};

// 사용자로부터 입력받기
export const getUserNumber = () => {
  const userInput = document.getElementById("user-input");
  let userNumber = userInput.value;

  if (checkUserNumber(userNumber)) {
    return userNumber;
  } else {
    return "unvalid_input";
  }
};

export const resetUserInput = () => {
  const userInput = document.getElementById("user-input");
  userInput.value = "";
};
