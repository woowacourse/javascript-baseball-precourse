export const randomThreeNumbers = () => {
  let result = '';

  while (result.length < 3) {
    const randomNum = MissionUtils.Random.pickNumberInRange(1, 9).toString();

    if (!result.includes(randomNum)) result += randomNum;
  }

  return result;
};
