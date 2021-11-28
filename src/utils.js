export const numArrToNum = (numArr) => {
  return numArr.reduce((acc, cur, idx) => {
    return acc + ((10**(numArr.length - idx - 1)) * cur);
  }, 0);
}

export const numToNumArr = (num) => {
  return Array.from(String(num), (num) => Number(num));
}

export const pickUniqueNumbersInRange = (startInclusive, endInclusive, count) => {
  const numSet = new Set([MissionUtils.Random.pickNumberInRange(startInclusive, endInclusive)]);
  while(numSet.size < count) {
    numSet.add(MissionUtils.Random.pickNumberInRange(1, 9));
  }
  return [...numSet.values()];
}