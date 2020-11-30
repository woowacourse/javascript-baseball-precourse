const hasSameNumber = (numberArray) => {
  let answer = false;
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  numberArray.forEach((value) => {
    if (numbers.indexOf(value) === -1) answer = true;
    else numbers.splice(numbers.indexOf(value), 1);
  });

  return answer;
};

export default function isValidNumber(numberArray) {
  if (numberArray.length !== 3) {
    alert("숫자 3개를 입력해주세요");
    return false;
  }

  if (numberArray.indexOf("0") !== -1) {
    alert("1부터 9까지의 숫자 중에서 입력해주세요");
    return false;
  }

  if (hasSameNumber(numberArray)) {
    alert("서로 다른 숫자를 입력해주세요");
    return false;
  }

  return true;
}
