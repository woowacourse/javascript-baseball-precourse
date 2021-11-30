const COMPUTER_NUMBER = {
  MAX_NUMBER: 9,
  MIN_NUMBER: 1,
  PICK: 3,
};

function pickRandomNumber() {
  return MissionUtils.Random.pickUniqueNumbersInRange(
    COMPUTER_NUMBER.MIN_NUMBER,
    COMPUTER_NUMBER.MAX_NUMBER,
    COMPUTER_NUMBER.PICK,
  );
}

export default function getComputerInput() {
  return pickRandomNumber().join('');
}
