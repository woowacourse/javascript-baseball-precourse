import { GAME_SCORE, CANDIDATE_LENGTH } from "./constants.js";

// 컴퓨터 랜덤 숫자 생성
function makeRandomNumber() {
  let randomNumber = [];

  while (randomNumber.length <= 2) {
    let digit = Math.floor(Math.random() * CANDIDATE_LENGTH + 1);

    if (randomNumber.indexOf(digit) === -1) {
      randomNumber.push(digit);
    }
  }

  return randomNumber;
}

// 사용자 인풋 유효성 검증
function verifyInput(input) {
  let inputArr = input.split("");

  return isThreeCharacter(inputArr) || isValidateDigit(inputArr) || isUnique(inputArr);
}

// 세자리수 검증
function isThreeCharacter(inputArr) {
  if (inputArr.length !== 3) {
    return "세 자리수의 숫자로 입력해주세요.";
  }

  return;
}

// 1~9사이 숫자 검증
function isValidateDigit(inputArr) {
  for (let i = 0; i < inputArr.length; i++) {
    let alertMsg;

    if (inputArr[i] === "0") {
      alertMsg = "1부터 9까지의 숫자만 사용해주세요.";
    } else if (!(inputArr[i] >= "1" && inputArr[i] <= "9")) {
      alertMsg = "숫자만 입력해주세요.";
    }

    return alertMsg;
  }

  return;
}

// 중복 숫자 검증
function isUnique(inputArr) {
  const set = new Set(inputArr);
  if (inputArr.length !== set.size) {
    return "중복되지 않는 숫자로 입력해주세요.";
  }

  return;
}

// 볼, 스트라이크 개수 카운트
function ballAndStrike(computerInputNumbers, userInputNumbers) {
  let ball = 0;
  let strike = 0;

  for (let i = 0; i <= 2; i++) {
    if (computerInputNumbers[i] === userInputNumbers[i]) {
      strike += 1;
    } else if (computerInputNumbers.includes(userInputNumbers[i]) === true) {
      ball += 1;
    }
  }

  return [ball, strike];
}

// 힌트 메시지 생성
function makeHint(ball, strike) {
  let hint;

  if (strike === 3) {
    hint = GAME_SCORE.threeStrike;
  } else if (strike + ball === 0) {
    hint = GAME_SCORE.nothing;
  } else if ((strike >= 1) & (ball >= 1)) {
    hint = `${ball}볼 ${strike}스트라이크`;
  } else if ((strike === 0) & (ball >= 1)) {
    hint = `${ball}볼`;
  } else if ((strike >= 1) & (ball === 0)) {
    hint = `${strike}스트라이크`;
  }

  return hint;
}

export { makeRandomNumber, verifyInput, ballAndStrike, makeHint };
