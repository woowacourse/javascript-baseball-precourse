export function generateComputerNumber() {
  const computerInputNumbers = [];

  while (computerInputNumbers.length < 3) {
    let randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!computerInputNumbers.includes(randomNumber)) {
      computerInputNumbers.push(randomNumber);
    }
  }

  return computerInputNumbers.join("");
}
