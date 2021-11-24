export default function makeAnswer() {
  const answer = MissionUtils.Random.shuffle(
    MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3)
  ).join("");
  return answer;
}
