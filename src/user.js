// 3자리 숫자인지 확인
const checkLengthThree = number => {
  if (number.length !== 3) {
    alert("세자리의 수를 입력해주세요.");
    return true;
  } else {
    return false;
  }
};

// 중복된 숫자 사용했는지 확인
const checkOverlap = number => {
  if (
    number[0] === number[1] ||
    number[1] === number[2] ||
    number[0] === number[2]
  ) {
    alert("중복없는 세자리의 수를 입력해주세요.");
    return true;
  } else {
    return false;
  }
};

// 1~9의 숫자인지 확인
const checkValidNumber = number => {
  let i = 0;
  for (; i < 3; i++) {
    if (number[i] < "1" || number[i] > "9") {
      alert("1~9까지의 수를 입력해주세요.");
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
    return "unvalid";
  }
};

export const resetUserInput = () => {
  const userInput = document.getElementById("user-input");
  userInput.value = "";
};
