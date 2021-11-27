export function makeNumbers() {
  const NUMBER_LENGTH = 3;
  const threeRandomNumbers = new Set();
  while (threeRandomNumbers.size !== NUMBER_LENGTH) {
    threeRandomNumbers.add(MissionUtils.Random.pickNumberInRange(1, 9));
  }
  return [...threeRandomNumbers];
}
