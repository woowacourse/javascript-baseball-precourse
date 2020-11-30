export default function getStrikeCount(computerInputNumbers, userInputNumbers) {
  return computerInputNumbers
    .toString()
    .split('')
    .reduce((acc, currentValue, index) => {
      if (currentValue === userInputNumbers.toString().split('')[index]) {
        return acc + 1;
      }
      return acc;
    }, 0);
}
