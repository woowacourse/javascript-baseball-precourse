export default function createComputerInputNumber() {
  const computerInputNumber = new Set();
  while (computerInputNumber.size !== 3) {
    computerInputNumber.add(MissionUtils.Random.pickNumberInRange(1, 9));
  }
  return Number(Array.from(computerInputNumber).join(''));
}
