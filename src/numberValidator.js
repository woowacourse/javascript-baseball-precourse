const hasSameNumber = (numberArrays) => {
  let answer = false;
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  numberArrays.forEach((value) => {
    if (numbers.indexOf(value) === -1) {
      answer = true;
    } else {
      numbers.splice(numbers.indexOf(value), 1);
    }
  });

  return answer;
};

export default function isValidNumber(numberArrays) {
  if (numberArrays.some((value) => isNaN(value))) {
    alert("숫자만 입력해주세요");

    return false;
  }

  if (numberArrays.length !== 3) {
    alert("숫자 3개를 입력해주세요");

    return false;
  }

  if (numberArrays.indexOf(0) !== -1) {
    alert("1부터 9까지의 숫자 중에서 입력해주세요");

    return false;
  }

  if (hasSameNumber(numberArrays)) {
    alert("서로 다른 숫자를 입력해주세요");

    return false;
  }

  return true;
}
