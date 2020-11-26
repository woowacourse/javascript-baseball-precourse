//랜덤 숫자 생성
function makeRandomNumber() {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let randomNumber = [];

  while (randomNumber.length <= 2) {
    let a = Math.floor(Math.random() * candidates.length + 1);

    if (randomNumber.indexOf(a) === -1) {
      randomNumber.push(a);
    }
  }

  return randomNumber;
}

const checkInput = function (input) {
  let inputArr = input.split("");
  console.log(inputArr);

  //세자리수 체크 함수
  if (!isThreeCharacter(inputArr)) {
    alert("세 자리수의 숫자로 입력해주세요.");
    return false;
  }

  //0부터 9 숫자 체크 함수
  if (!isDigit(inputArr)) {
    return false;
  }

  //중복 숫자 체크
  const set = new Set(inputArr);
  if (inputArr.length !== set.size) {
    alert("중복되지 않는 숫자로 입력해주세요.");
    return false;
  }

  return true;
};

const isThreeCharacter = function (inputArr) {
  if (inputArr.length !== 3) {
    return false;
  } else {
    return true;
  }
};

const isDigit = function (inputArr) {
  for (let i = 0; i < inputArr.length; i++) {
    //0 포함
    if (inputArr[i] === "0") {
      alert("1부터 9까지의 숫자만 사용해주세요.");
      return false;
      //문자
    } else if (!(inputArr[i] >= "1" && inputArr[i] <= "9")) {
      console.log(inputArr[i]);
      alert("숫자만 입력해주세요.");
      return false;
    } else {
      return true;
    }
  }
};

export { makeRandomNumber, checkInput };
