export const createAnswer = () => {
  const computerAnwer = new Set();
  while(computerAnwer.size < 3) {
    computerAnwer.add(MissionUtils.Random.pickNumberInRange(1, 9));
  }
  return [...computerAnwer];
};