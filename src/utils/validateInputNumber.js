function isThreeDigits(inputNumber) {
    return inputNumber.length === 3;
}

function isDuplicate(inputNumber) {
    const firstDigit = inputNumber.charAt(0);
    const secondDigit = inputNumber.charAt(1);
    const thirdDigit = inputNumber.charAt(2);
    return firstDigit === secondDigit || secondDigit === thirdDigit || thirdDigit === firstDigit;
}

function validateInputNumber(inputNumbers) {
    if(!Number.isInteger(Number(inputNumbers))) return false;
    if(!isThreeDigits(inputNumbers)) return false;
    return !isDuplicate(inputNumbers);
}

export default validateInputNumber;
