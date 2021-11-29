import { MIN, MAX, LENGTH } from "../constatns/constants";

export default function makeAnswer() {
  let answer = new Set();
  while(answer.size < LENGTH) {
    answer.add(MissionUtils.Random.pickNumberInRange(MIN, MAX));
  }

  return [...answer].join("");
}