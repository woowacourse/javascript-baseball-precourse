export default function getComputerInputNumbers() {
  const computerInputList = [];

  while (computerInputList.length !== 3) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!computerInputList.includes(randomNumber)) {
      computerInputList.push(randomNumber);
    }
  }
  return computerInputList;
}
