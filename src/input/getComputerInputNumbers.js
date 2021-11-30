export default function () {
  return Number(MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join(""));
}
