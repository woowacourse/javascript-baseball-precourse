export default function getRandomNums() {
  const NUMBER_LENGTH = 3;
  const computerInputNumbers = new Array(NUMBER_LENGTH).fill(0);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < NUMBER_LENGTH; i++) {
    const pickNumber = Math.floor(Math.random() * (numbers.length - 1) + 1);
    const selectedIndex = numbers.indexOf(pickNumber);
    computerInputNumbers[i] = selectedIndex === -1 ? numbers[0] : pickNumber;
    numbers.splice(numbers.indexOf(computerInputNumbers[i]), 1);
  }

  return computerInputNumbers;
}
