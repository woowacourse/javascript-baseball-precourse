export function getComputerInput() {
  let computerInput = [];
  let i = 0;
  while (i < 3) {
    const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!isDuplicated(randomNum)) {
      computerInput.push(randomNum);
      i++;
    }
  }

  function isDuplicated(number) {
    return computerInput.find((element) => element === number);
  }
  return computerInput;
}
