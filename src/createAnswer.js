export const createAnswer = () => {
  const computerNumber = new Set();
  while(computerNumber.size < 3) {
    computerNumber.add(MissionUtils.Random.pickNumberInRange(1, 9));
  }
  return [...computerNumber];
};