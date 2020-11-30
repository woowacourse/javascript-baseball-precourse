export default function getBallCount(computerInputNumbers, userInputNumbers) {
  return userInputNumbers.reduce((acc, currentValue, index) => {
    if (
      currentValue !== computerInputNumbers[index] &&
      computerInputNumbers.includes(currentValue)
    ) {
      return acc + 1;
    }
    return acc;
  }, 0);
}
