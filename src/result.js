import { RESTART } from "./constant.js";

export default function getResult(answer, userNum) {
  const strike = countStrike(answer, userNum);
  const ball = countBall(answer, userNum);
  let result = "";
  if (strike == 3) {
    result += RESTART;
  } else {
    if (ball > 0) {
      result += `${ball}볼 `;
    }
    if (strike > 0) {
      result += `${strike}스트라이크 `;
    }
    if (ball == 0 && strike == 0) {
      result = "낫싱";
    }
  }
  return result;
}

function countStrike(answer, userNum) {
  let strike = 0;
  answer.split("").forEach((elm, idx) => {
    if (elm == userNum[idx]) {
      strike++;
    }
  });

  return strike;
}

function countBall(answer, userNum) {
  let ball = 0;
  answer.split("").forEach((elm, idx) => {
    if (userNum.includes(elm) && userNum[idx] != elm) {
      ball++;
    }
  });

  return ball;
}
