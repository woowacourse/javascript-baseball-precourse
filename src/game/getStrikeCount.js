export default function getStrikeCount(computerInputNumbers, userInputNumbers) {
  return computerInputNumbers.reduce((acc, currentValue, index) => {
    if (currentValue === userInputNumbers[index]) {
      return acc + 1;
    }
    return acc;
  }, 0);
}
