export default function createComputerInputNumbers() {
  const numbers = [];

  while (numbers.length < 3) {
    const random = window.MissionUtils.Random.pickNumberInRange(1, 9);

    if (!numbers.includes(random)) numbers.push(random);
  }

  return numbers;
}
