export const randomThreeNumbers = () =>
  MissionUtils.Random.pickNumberInRange(1, 9).toString() +
  MissionUtils.Random.pickNumberInRange(1, 9).toString() +
  MissionUtils.Random.pickNumberInRange(1, 9).toString();
