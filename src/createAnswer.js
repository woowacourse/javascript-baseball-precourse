export const createAnswer = () => {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
};