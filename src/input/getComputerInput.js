function pickRamdomNumber(COMPUTER_NUMBER) {
  return MissionUtils.Random.pickUniqueNumbersInRange(
    COMPUTER_NUMBER.minNum,
    COMPUTER_NUMBER.maxNum,
    COMPUTER_NUMBER.pick,
  );
}

export default function getComputerInput() {
  const COMPUTER_NUMBER = {
    maxNum: 9,
    minNum: 1,
    pick: 3,
  };
  return pickRamdomNumber(COMPUTER_NUMBER).join('');
}
