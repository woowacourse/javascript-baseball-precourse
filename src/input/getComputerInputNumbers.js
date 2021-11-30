export default function () {
  let answer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  return Number(answer.join(""));
}
