export const generateRandomNumArr = (length, min, max) => {
  const randomNums = new Set();

  while (randomNums.size < length) {
    const randomNum = MissionUtils.Random.pickNumberInRange(min, max);
    randomNums.add(String(randomNum));
  }

  return [...randomNums];
};
