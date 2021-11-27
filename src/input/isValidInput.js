function isThreeDigitInput(input) {
  return input.length === 3;
}

function isOneToNineNumber(input) {
  return !input.some((element) => {
    return Number.isNaN(element) || element < 1 || element > 9;
  });
}

function isNoDuplicatedNumber(input) {
  const nonDuplicatedSet = new Set();

  for (let idx = 0; idx < input.length; idx += 1) {
    nonDuplicatedSet.add(input[idx]);
  }
  return nonDuplicatedSet.size === 3;
}

export default function isValidInput(input) {
  if (!isThreeDigitInput(input)) {
    return false;
  }
  if (!isOneToNineNumber(input)) {
    return false;
  }
  if (!isNoDuplicatedNumber(input)) {
    return false;
  }
  return true;
}
