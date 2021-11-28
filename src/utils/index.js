export const pickUniqueThreeNumbers = () => {
  const numberSet = new Set();
  while (numberSet.size !== 3) {
    numberSet.add(MissionUtils.Random.pickNumberInRange(1, 9));
  }
  return Array.from(numberSet);
}
