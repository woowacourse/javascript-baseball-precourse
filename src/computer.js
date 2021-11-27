import { input_length } from "./constant.js";

// 컴퓨터 난수 생성
export const getComputerNumber = () => {
  let number = [];
  while (number.length < input_length) {
    const randNumber = MissionUtils.Random.pickNumberInRange(1, 9);

    if (number.includes(randNumber)) {
      continue;
    }

    number.push(randNumber);
  }

  return number.join("").toString();
};
