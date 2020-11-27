// 랜덤 숫자 생성
function makeRandomNumber() {
  const CANDIDATE_LENGTH = 9;
  let randomNumber = [];

  while (randomNumber.length <= 2) {
    let a = Math.floor(Math.random() * CANDIDATE_LENGTH + 1);

    if (randomNumber.indexOf(a) === -1) {
      randomNumber.push(a);
    }
  }

  return randomNumber;
}

const verifyInput = function (input) {
  let inputArr = input.split("");
  console.log(inputArr);

  if (!isThreeCharacter(inputArr)) {
    alert("세 자리수의 숫자로 입력해주세요.");
    return false;
  }

  if (!validateDigit(inputArr)) {
    return false;
  }

  //중복 숫자 검증
  const set = new Set(inputArr);
  if (inputArr.length !== set.size) {
    alert("중복되지 않는 숫자로 입력해주세요.");
    return false;
  }
  return true;
};

// 세자리수 검증
const isThreeCharacter = function (inputArr) {
  if (inputArr.length !== 3) {
    return false;
  } else {
    return true;
  }
};

// 0, 문자 포함 여부 검증
const validateDigit = function (inputArr) {
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === "0") {
      alert("1부터 9까지의 숫자만 사용해주세요.");
      return false;
    } else if (!(inputArr[i] >= "1" && inputArr[i] <= "9")) {
      console.log(inputArr[i]);
      alert("숫자만 입력해주세요.");
      return false;
    }
  }
  return true;
};

export { makeRandomNumber, verifyInput };
