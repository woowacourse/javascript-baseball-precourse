import { GAME_SCORE } from "./constants.js";

// 랜덤 숫자 생성
function makeRandomNumber() {
  const CANDIDATE_LENGTH = 9;
  let randomNumber = [];

  while (randomNumber.length <= 2) {
    let digit = Math.floor(Math.random() * CANDIDATE_LENGTH + 1);

    if (randomNumber.indexOf(digit) === -1) {
      randomNumber.push(digit);
    }
  }
  return randomNumber;
}

const verifyInput = function (input) {
  let inputArr = input.split("");

  return isThreeCharacter(inputArr) && isValidateDigit(inputArr) && isUnique(inputArr);
};

// 세자리수 검증
const isThreeCharacter = function (inputArr) {
  if (inputArr.length !== 3) {
    alert("세 자리수의 숫자로 입력해주세요.");
    return false;
  }
  return true;
};

// 0, 문자 포함 여부 검증
const isValidateDigit = function (inputArr) {
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === "0") {
      alert("1부터 9까지의 숫자만 사용해주세요.");
      return false;
    } else if (!(inputArr[i] >= "1" && inputArr[i] <= "9")) {
      alert("숫자만 입력해주세요.");
      return false;
    }
  }
  return true;
};

// 중복 숫자 검증
const isUnique = function (inputArr) {
  const set = new Set(inputArr);
  if (inputArr.length !== set.size) {
    alert("중복되지 않는 숫자로 입력해주세요.");
    return false;
  }
  return true;
};

// 볼, 스트라이크 생성
const ballAndStrike = function (computerInputNumbers, userInputNumbers) {
  let strike = 0;
  let ball = 0;

  for (let i = 0; i <= 2; i++) {
    if (computerInputNumbers[i] === userInputNumbers[i]) {
      strike += 1;
    } else if (computerInputNumbers.includes(userInputNumbers[i]) === true) {
      ball += 1;
    }
  }
  return [strike, ball];
};

// 힌트 생성
const makeHint = function (strike, ball) {
  if (strike === 3) {
    return GAME_SCORE.threeStrike;
  } else if (strike + ball === 0) {
    return GAME_SCORE.nothing;
  } else if ((strike >= 1) & (ball >= 1)) {
    return `${ball}볼 ${strike}스트라이크`;
  } else if ((strike === 0) & (ball >= 1)) {
    return `${ball}볼`;
  } else if ((strike >= 1) & (ball === 0)) {
    return `${strike}스트라이크`;
  }
};

export { makeRandomNumber, verifyInput, ballAndStrike, makeHint };
