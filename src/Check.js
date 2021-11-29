function checkLength(numbers) {
  return numbers.length === 3;
}

function checkRange(numbers) {
  for (let i = 0; i < 3; i += 1) {
    if (!(numbers[i] >= 1 && numbers[i] <= 9)) return false;
  }

  return true;
}

function checkDuplication(numbers) {
  return new Set(numbers).size !== 3;
}

export default function checkInputValidation(numbers) {
  return (
    checkLength(numbers) && checkRange(numbers) && !checkDuplication(numbers)
  );
}
