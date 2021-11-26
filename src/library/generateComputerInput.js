const { MissionUtils } = window;

function generateComputerInput() {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join('');
}

export default generateComputerInput;
