const getRandomNum = () => {
  const randomNum = {
    firstNum: MissionUtils.Random.pickNumberInRange(1, 9),
    secondNum: MissionUtils.Random.pickNumberInRange(1, 9),
    thirdNum: MissionUtils.Random.pickNumberInRange(1, 9),
  };

  return randomNum;
};

const isDuplicated = (firstNum, secondNum, thirdNum) => {
  if (firstNum == secondNum || secondNum == thirdNum || firstNum == thirdNum) {
    return true;
  }

  return false;
};

export const ramdomAnswer = () => {
  let randomNum = getRandomNum();

  while (
    isDuplicated(randomNum.firstNum, randomNum.secondNum, randomNum.thirdNum)
  ) {
    randomNum = getRandomNum();
  }

  return `${randomNum.firstNum}${randomNum.secondNum}${randomNum.thirdNum}`;
};
