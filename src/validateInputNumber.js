export default function validateInputNumber(userInputNumbers) {
    const checkFunctions = [
        checkNotNumber,
        checkNumber0,
        checkNumberLength,
        checkSameNumber,
    ];
    const checkEveryFunction = checkFunctions.every((func) =>
        func(userInputNumbers)
    );
    return checkEveryFunction;
}

function checkNumberLength(userInputNumbers) {
    const inputNumberlength = userInputNumbers.length;
    return inputNumberlength === 3;
}

function checkNumber0(userInputNumbers) {
    return !userInputNumbers.includes("0");
}

function checkSameNumber(userInputNumbers) {
    const eachInputNumber = [...new Set(userInputNumbers)].length;
    return eachInputNumber === 3;
}

function checkNotNumber(userInputNumbers) {
    const isNumber = userInputNumbers.filter((v) => {
        return v.charCodeAt(0) > 48 && v.charCodeAt(0) < 58;
    });
    const countNumber = isNumber.length;
    return countNumber === 3;
}
