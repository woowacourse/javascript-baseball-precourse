import { MIN, MAX, LENGTH } from "./constant.js";

export default function makeAnswer() {
  const answer = MissionUtils.Random.pickUniqueNumbersInRange(MIN, MAX, LENGTH);
  console.log(answer);
  return answer;
}
