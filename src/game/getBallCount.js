export default function getBallCount(computerInputNumbers, userInputNumbers) {
  return userInputNumbers
    .toString()
    .split('')
    .reduce((acc, currentValue, index) => {
      if (
        currentValue !== computerInputNumbers.toString().split('')[index] &&
        computerInputNumbers.toString().split('').includes(currentValue)
      ) {
        return acc + 1;
      }
      return acc;
    }, 0);
}
