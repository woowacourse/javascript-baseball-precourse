export default function checkCorrectInput(userInputNumbersArray) {
  const nonOverlapping = new Set(userInputNumbersArray);
  if (userInputNumbersArray.length !== 3) return false;
  if (userInputNumbersArray.length !== nonOverlapping.size) return false;
  const realNum = userInputNumbersArray.filter((number) => {
    if (number >= 1 && number <= 9) return true;
    return false;
  });
  if (realNum.length !== 3) return false;
  return true;
}
