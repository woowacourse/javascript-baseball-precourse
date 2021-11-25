export default function createComputerInputNumbers() {
  const selectedNumber = [];

  while (selectedNumber.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!selectedNumber.includes(number)) {
      selectedNumber.push(number);
    }
  }

  return selectedNumber;
}
