export const ramdomAnswer = () => {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join('');
};
