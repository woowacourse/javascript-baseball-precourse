export default function makeAnswer() {
  const answer = [];
  while (answer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!answer.includes(number)) answer.push(number);
  }
  return answer.join("");
}
