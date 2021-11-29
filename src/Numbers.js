export function createComputerInputNumbers() {
  const numbers = [];

  while (numbers.length < 3) {
    const random = window.MissionUtils.Random.pickNumberInRange(1, 9);

    if (!numbers.includes(random)) numbers.push(random);
  }

  return numbers;
}

function parseStringToInt(string) {
  return parseInt(string, 10);
}

export function createUserInputNumbers() {
  const userInput = document.getElementById('user-input').value;
  const numbers = userInput.toString().split('').map(parseStringToInt);

  return numbers;
}
