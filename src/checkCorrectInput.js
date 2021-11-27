export default function checkCorrectInput(userInputNumbers) {
  const nonOverlapping = new Set(userInputNumbers);
  if (userInputNumbers.length !== 3) return false;
  if (userInputNumbers.length !== nonOverlapping.size) return false;
  const realNum = userInputNumbers.filter((number) => {
    if (number >= 1 && number <= 9) return true;
    return false;
  });
  if (realNum.length !== 3) return false;
  return true;
}
