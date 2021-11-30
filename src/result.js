import { RESTART } from "./constant.js";

export default function getResult(answer, userNum) {
  const count = ballStrike(answer, userNum);
  let result = "";
  if (count.strike == 3) {
    result += RESTART;
  } else {
    if (count.ball > 0) {
      result += `${count.ball}볼 `;
    }
    if (count.strike > 0) {
      result += `${count.strike}스트라이크 `;
    }
    if (count.ball == 0 && count.strike == 0) {
      result = "낫싱";
    }
  }
  return result;
}

function ballStrike(answer, userNum) {
  let count = {
    ball: 0,
    strike: 0,
  };
  // strike?
  let userNumberArray = Array.from(userNum); // ['1', '2', '3']

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (answer[i] == userNumberArray[j]) {
        i == j ? (count.strike += 1) : (count.ball += 1);
        break; // 중복된 숫자가 없기 때문에 같은 숫자를 찾으면 바로 break한다.
      }
    }
  }
  return count;
}
