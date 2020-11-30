const hasSameNumber = (numberArray) => {
  const sameIndex = numberArray.filter(
    (value, index) => value === numberArray[index + 1]
  );
  return sameIndex.length !== 0;
};

export default function isValidNumber(numberArray) {
  if (hasSameNumber(numberArray)) {
    alert("서로 다른 숫자를 입력해주세요");
    return false;
  }

  if (numberArray.indexOf("0") !== -1) {
    alert("1부터 9까지의 숫자 중에서 입력해주세요");
    return false;
  }

  if (numberArray.length !== 3) {
    alert("숫자 3개를 입력해주세요");
    return false;
  }

  return true;
}
