const COMPUTER_NUMBER = {
  MAX_NUMBER: 9,
  MIN_NUMBER: 1,
  PICK: 3,
};

function pickRandomNumbers() {
  const numbers = [];
  while (numbers.length !== COMPUTER_NUMBER.PICK) {
    const number = pickRandomNumber();
    if (numbers.indexOf(number) === -1) {
      numbers.push(number);
    }
  }
  return numbers;
}

function pickRandomNumber() {
  return MissionUtils.Random.pickNumberInRange(
    COMPUTER_NUMBER.MIN_NUMBER,
    COMPUTER_NUMBER.MAX_NUMBER,
  );
}

export default function getComputerInput() {
  return pickRandomNumbers().join('');
}
